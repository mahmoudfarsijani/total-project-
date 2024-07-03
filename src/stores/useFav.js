
import { defineStore } from "pinia";

export const useFavs = defineStore('useFav',{
    state:() => ({
        favList : JSON.parse(localStorage.getItem('favsMovies')) || []
    }),
    actions:{
        persist(){
            localStorage.setItem('favsMovies',JSON.stringify(this.favList))
        },
        addFav(id){
            const index = this.favList.indexOf(id)
            if(index > -1) {
                this.favList.splice(index,1)
                this.persist()
            } else {
                this.favList.push(id)
                this.persist()
            }
        },
        isFav(id){
            return this.favList.indexOf(id) > -1
        }
    }
})