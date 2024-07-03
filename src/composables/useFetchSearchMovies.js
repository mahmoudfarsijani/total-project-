import { ref } from "vue";

export const useFetchSearchMovies = () => {
  const data = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchData = async (url,option) => {
    isLoading.value = true;
    try {
      const response = await fetch(url,option);
      if (!response.ok) {
        throw new Error("new error");
      }
      const res = await response.json();
      data.value = res.results
      
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
