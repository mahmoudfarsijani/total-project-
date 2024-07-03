import { defineStore } from "pinia";

export const useBasket = defineStore("useBasket", {
  state: () => ({
    basket: JSON.parse(localStorage.getItem("baskets")) || [],
  }),
  actions: {
    persist() {
      localStorage.setItem("baskets", JSON.stringify(this.basket));
    },
    addBasket(items) {
      // const existingItem = this.basket.find(item => item.id === items.id);
      this.basket.push(items)
      this.persist()
    },
    removeBasket(pro) {
      const indexItem = this.basket.findIndex((p) => p.id === pro.id);
      if (indexItem > -1) {
        this.basket.splice(indexItem, 1);
        this.persist();
      } 
    },
  },
});
