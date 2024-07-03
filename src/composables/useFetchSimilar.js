import { ref } from "vue";

export const useFetchSimilar = () => {
  const dataS = ref([]);
  const isLoadingS = ref(false);
  const errorS = ref(null);

  const fetchDataS = async (url,option) => {
    isLoadingS.value = true;
    try {
      const response = await fetch(url,option);
      if (!response.ok) {
        throw new Error("new error");
      }
      const res = await response.json()
      dataS.value = res.results
      
    } catch (errors) {
      errorS.value = errors;
    } finally {
      isLoadingS.value = false;
    }
  };




  return {
    dataS,
    isLoadingS,
    errorS,
    fetchDataS
  };
};
