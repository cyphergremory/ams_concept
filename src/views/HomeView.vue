<script setup>
import {useRoute, useRouter} from 'vue-router'
import { onMounted, ref } from 'vue';
import { resolve } from '../helpers/url';
import UserBio from '../components/UserBio.vue'
import axios from 'axios';
const isLoading = ref(true);

//Router
const router = useRouter()
const route = useRoute()
function redirectTo(route = 'not-found'){
  return router.push({name:route});
}

//User related.
const user = ref({});
function parseUser(response){
      const user = {
        token: response.data.token ?? null,
        ...response.data.users[0]
      }

      localStorage.setItem('user', user.id);
      localStorage.setItem('token', user.token);
      
      return user;
}


//Onload
onMounted(async()=>{
  try{
      let response = await axios.get(resolve('validate-tokens/' + route.params.token ))
      user.value = parseUser(response);
      setTimeout(()=>{
        isLoading.value =false;
      },1)
  }catch(error){
    setTimeout(()=>{
         redirectTo();
      },3000)
  }
})

</script>

<template>
  <div v-if="isLoading">
    <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
  </div>
  <user-bio :user="user" v-else @visit="redirectTo" />
  
</template>
