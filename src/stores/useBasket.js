import { defineStore } from "pinia";

export const useBasket = defineStore("useBasket", {
  state: () => ({
    basket: JSON.parse(localStorage.getItem("baskets")) || [],
  }),
  getters: {
    getLength(state){
      return state.basket.length
    }
  },
  actions: {
    persist() {
      localStorage.setItem("baskets", JSON.stringify(this.basket));
    },
    addBasket(items) {
      const existingItem = this.basket.findIndex(item => item.id === items.id);
      if(existingItem !== -1) {
        this.basket[existingItem].quantity += 1
        this.persist()
      } else {
        this.basket.push(items)
        items.quantity = 1
        this.persist()
      }
    },
    removeBasket(pro) {
      const indexItem = this.basket.findIndex((p) => p.id === pro.id);
      if (indexItem !== -1) {
        this.basket.splice(indexItem, 1);
        this.persist();
      } 
    },
  },
});
