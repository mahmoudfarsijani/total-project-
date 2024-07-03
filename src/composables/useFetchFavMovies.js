import { ref } from "vue";

export const useFetchFavMovie = () => {
  const data = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchData = async (id,option) => {
    isLoading.value = true;
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`,option);
      if (!response.ok) {
        throw new Error("new error");
      }
      data.value.push(await response.json());
      // data.value = res.results
      
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
