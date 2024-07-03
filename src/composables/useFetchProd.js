import { ref } from "vue";

export const useFetchProd = (url) => {
  const data = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchData = async () => {
    isLoading.value = true
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('errorrrr')
        } 
       return data.value = await response.json()
    } catch(errors) {
        error.value = errors
    } finally {
        isLoading.value = false
    }

    // try{
    //     isLoading.value = true
    //     const response = await fetch(url);
    //     data.value = await response.json()
    // } catch(err) {
    //     error.value = err
    // } finally {
    //     isLoading.value = false
    // }
  };

  fetchData()


  return {
    data,
    isLoading,
    error
  }
};
