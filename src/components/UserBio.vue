<template>
    <div class="bg-gray-100 relative rounded-lg  w-1/2  lg:w-1/4 mx-auto">
        <div class="relative w-32 h-32 mx-auto mt-5 border-r-8 border-purple-500 rounded-full">
                <img :src="'https://cute-cat-avatars.fly.dev/api/v1/' + user.first_last_name " :alt="user.first_name + ' '+ user.first_last_name" class="rounded-full mx-auto relative w-32 h-32 border-8 border-white transition duration-200 transform hover:scale-110 shadow">
        </div>
        
        <div class="my-3">
            <h1 class="font-bold text-center text-3xl text-gray-900">@{{user.first_name}}_{{ user.first_last_name}}</h1>
            <p class="text-center text-sm text-gray-400 font-medium">Welcome to AMS</p>
            <p>
                <span>
                    
                </span>
            </p>
          
        </div>
        <div class="px-7">
            <div class="bg-white rounded-lg p-5 shadow-sm">
                <ul class="space-y-2 px-3">
                    <li  v-for="link,index in links" :key="index" :data-disabled="link.disabled && !curp">
                        <a @click="()=>{
                        if(!link.disabled){
                             $emit('visit', link.route)
                        }
                        }" href="#" :class="link.disabled && !curp  ? 'cursor-not-allowed hover:bg-transparent' :'cursor-pointer hover:bg-purple-400 hover:text-purple-100'" class="flex items-center p-2 py-3 text-base font-normal text-gray-900 rounded-lg  group">
                            <span v-html="link.icon" class="text-gray-400 group-hover:text-purple-100"></span>
                            <span class="ml-3 capitalize font-semibold text-xl">{{link.title}}</span>
                        </a>
                    </li>
                    
                    
                        
                    
                </ul>
            </div>
        </div>
        <p class="text-gray-400 text-center p-3 px-5 font-semibold my-3" v-if="!curp">
            Your profile is not complete. Please complete the information before proceeding
        </p>
    </div>
</template>
<script setup>
    import { onMounted } from 'vue'
    import {rq} from '../helpers/http'
    const curp = $ref(null)
    const {user} = defineProps({
        user:{
            type:Object,
            default:()=>{}
        },
        
    })

    onMounted(async()=>{
        curp = (await rq.get('/users/' + user.id)).data?.curp;
    })
    
    const links = $ref([
        {
            title:'profile', 
            route:'profile',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>`,
            disabled:false
        },
        {
            title:'questionnaries', 
            route:'questionnaries',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>`,
            disabled:true
        },
        {
            title:'files', 
            route:'files',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>`,
            disabled:true
        },
        {
            title:'messages', 
            route:'chat',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>`,
            disabled:false
           
        },
    ]);
  
</script>