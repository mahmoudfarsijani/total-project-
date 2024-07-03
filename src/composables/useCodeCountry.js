import { ref } from "vue";

export const useFetchCode = (code) => {
  const data = ref(null);
  const borders = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchData = async () => {
    isLoading.value = true;
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const result = await response.json();
      data.value = result[0];
    } catch (errors) {
      error.value = errors;
    } finally {
      isLoading.value = false;
    }
    fetchBorders();
  };

  const fetchBorders = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${data.value.borders.join(
        ","
      )}`
    );
    borders.value = await response.json();
  };

  fetchBorders();
  fetchData();

  return {
    data,
    isLoading,
    error,
    borders,
  };
};
