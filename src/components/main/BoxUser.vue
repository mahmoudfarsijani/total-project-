<template>
    <Card v-if="user" tag="div" :is-col="true" :is-user="true" class="items-center pt-[10px] dark:bg-slate-700 ">
        <template #header>
            <div class="w-[150px] h-[150px] rounded-full  overflow-hidden mx-auto">
                <Img :src="user.picture.large" :alt="user.name.first" class="w-full h-full"/>
            </div>
            <div class="body text-center mt-[10px]">
                <h2 class="title text-[25px] capitalize text-black dark:text-white">
                   {{ user.name.first }} {{ user.name.last }}
                </h2>       
                <p class="subtitle capitalize text-[13px]">
                   email: {{ user.email }}
                </p>
                <span class="capitalize text-[13px]">
                   username: {{ user.login.username }}
                </span>
                <div class="detail capitalize flex flex-col">
                  <span class="text-[13px]">
                    age: {{ user.registered.age }}
                  </span>
                  <span class="text-[13px]">
                   date: {{ user.registered.date }}
                  </span>
                  <span class="capitalize text-[13px]">
                    country: {{ user.location.country }}
                  </span>
                  <span class="capitalize text-[13px]">
                    city: {{ user.location.city }}
                  </span>
                </div>
            </div>
        </template>
    </Card>
</template>


<script setup>
    import { defineProps } from 'vue';
    import { string,shape,object, number, array } from 'vue-types';


    import Card from '@/components/base/Card.vue'
    import Img from '@/components/base/Img.vue'

    const props = defineProps({
        user:shape({
            cell:string(),
            dob:object(),
            email:string(),
            gender:string(),
            id:object(),
            location:shape({
                city:string(),
                coordinates:object(),
                latitude:string(),
                longitude:string(),
                country:string(),
                postcode:number(),
                state:string(),
                street:object(),
                timezone:object()
            }),
            login:shape({
                md5:string(),
                password:string(),
                salt:string(),
                username:string()
            }),
            name:shape({
                first:string(),
                last:string(),
                title:string()
            }),
            nat: string(),
            phone:string(),
            picture:shape({
                large:string(),
                medium:string(),
                thumbnail:string()
            }),
            registered:shape({
                age:number(),
                date:string()
            })
        })
    })

</script>