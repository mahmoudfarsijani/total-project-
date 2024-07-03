import { ref } from "vue";

export const useFetchUser = () => {
  const data = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchData = async (url) => {
    isLoading.value = true;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("new error");
      }
      const res = await response.json();
      data.value = await res.results[0]
    } catch (errors) {
      error.value = errors;
    } finally {
      isLoading.value = false;
    }
  };



  return {
    data,
    isLoading,
    error,
    fetchData
  };
};
