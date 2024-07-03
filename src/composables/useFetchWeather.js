import { ref } from "vue";

export const useFetchWeather = () => {
  const isLoading = ref(false);
  const data = ref({});
  const error = ref(null);

  const fetchData = async (url) => {
    isLoading.value = true;
    try {
      const response = await fetch(url);
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

  return {
    isLoading,
    error,
    data,
    fetchData
  }
};
