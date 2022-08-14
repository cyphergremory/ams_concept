<template>
 <form @submit.prevent="beforeSubmit" autocomplete="off" class="w-full max-w-3xl bg-white p-5 rounded-md shadow-md">
  <div class="flex flex-wrap -mx-3 mb-4">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input required  v-model="user.first_name" class="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Middle Name
      </label>
      <input required v-model="user.middle_name" class="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">

    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Last Name
      </label>
      <input required v-model="user.first_last_name" class="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Second Last Name
      </label>
      <input required v-model="user.second_last_name" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:" id="grid-last-name" type="text" placeholder="Doe">
    </div>
  
  <div class="w-full md:w-1/2 px-3">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Email@
    </label>
    <input required v-model="user.email" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:" id="grid-last-name" type="text" placeholder="Doe">
  </div>
  <div class="w-full md:w-1/2 px-3">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Phone
    </label>
    <input required v-model="user.phone" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:" id="grid-last-name" type="text" placeholder="Doe">
  </div>
  </div>
   <div class="w-full mb-4">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      CURP
    </label>
    <input required v-model="user.curp" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:" id="grid-last-name" type="text" placeholder="Doe">
  </div>
  <div class="w-full mb-4">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Address
    </label>
    <input v-model="user.address" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:" id="grid-last-name" type="text" placeholder="Doe">
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        English level
      </label>
      <div class="relative">
        <select  required v-model="user.english_level" class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:" id="grid-state">
          <option hidden value="">Select an option...</option>
          <option value="basic">Basic</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select  v-model="user.state" class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:" id="grid-state">
          <option value="MTY">Monterrey</option>
          <option value="QRO">Queretaro</option>
          <option value="AGS">Aguascalientes</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-end relative mt-5">
    <button type="button" @click="goBack" class="mr-auto text-gray-400 ml-5 hover:underline hover:text-blue-500">Go back</button>
    <button class="p-3 px-5 bg-gray-700 rounded-sm shadow text-white hover:bg-gray-500">Save</button>
  </div>
</form>   
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { resolve } from '../helpers/url'
  import axios from 'axios'
  import {useRouter} from 'vue-router';
  const router = useRouter();
  const  user = ref({})

  onMounted(async()=>{
    const response = await axios.get(resolve('users/' + localStorage.getItem('user')))
    user.value = response.data
  })

  async function beforeSubmit(){
    try{
      await axios.put(resolve('users/' + user.value.id), user.value)
      alert('User updated');
      setTimeout(()=>{
        router.go(0)
      },3000)

    }catch(error){
      alert('Something went wrong.')
    }
    
  }

  async function goBack(){
     return router.push({name:'home',params:{token:localStorage.getItem('token')}})
  }


</script>