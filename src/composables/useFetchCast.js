import { ref } from "vue";

export const useFetchCast = () => {
  const dataCast = ref([]);
  const isLoadingCast = ref(false);
  const errorCast = ref(null);

  const fetchDataCast = async (url,option) => {
    isLoadingCast.value = true;
    try {
      const response = await fetch(url,option);
      if (!response.ok) {
        throw new Error("new error");
      }
      const res = await response.json();
      dataCast.value = res.cast
      
    } catch (errors) {
      errorCast.value = errors;
    } finally {
      isLoadingCast.value = false;
    }
  };



  return {
    dataCast,
    isLoadingCast,
    errorCast,
    fetchDataCast
  };
};
