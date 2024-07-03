import { ref } from "vue";
export const fetchCode = (field) => {
  const isLoading = ref(false);
  const error = ref(null);
  const data = ref([]);

  const fetchData = async () => {
    isLoading.value = true
    try {
      const query = field ? `fields=${field.join(",")}` : "";
      const response = await fetch(
        `https://restcountries.com/v3.1/all?${query}`
      );
      if (!response.ok) {
        throw new Error("error");
      }
      data.value = await response.json();
    } catch (errors) {
      error.value = errors;
    } finally {
      isLoading.value = false;
    }
  };

  fetchData();

  return {
    isLoading,
    error,
    data,
  };
};
