<template>
<div>
    <h4 class="mb-5 text-gray-700 text-xl pl-3 font-semibold">{{list.title}}</h4>
    <form @submit.prevent="beforeSubmit" autocomplete="off" class="w-full max-w-3xl bg-white p-5 rounded-md shadow-md">
    <div class="flex flex-wrap -mx-3 mb-4">
        <div class="w-full px-3 mb-6 md:mb-0" v-for="x,y in list.questions" :key="y">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            {{x.title}}
        </label>
        <input  :placeholder="x.hint"  v-model="form.questions[x.id]" class="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text">
        </div>
    </div>
  <div class="flex items-center justify-end relative mt-5">
    <button type="button" @click="goBack" class="mr-auto text-gray-400 ml-5 hover:underline hover:text-blue-500">Go back</button>
    <button class="p-3 px-5 bg-gray-700 rounded-sm shadow text-white hover:bg-gray-500">Save</button>
  </div>
</form> 
</div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import {rq} from '../helpers/http'
    import {useRoute, useRouter} from 'vue-router'
    const route = useRoute();
    const router = useRouter();
    const user = localStorage.getItem('user');
    const list = $ref([]);
    const form = $ref({
        questions:{},
        questionnaryId:route.params.id
    })

    onMounted(async()=>{
        const questionnarie = (await rq.get(`/questionnaries/${form.questionnaryId}/questions`)).data;
        const responses = (await rq.get(`/questionnaries/${questionnarie.id}/user-responses/${user}`)).data
        questionnarie.questions.map(x =>{
            form.questions[x.id] = responses.find(r => r.questionId == x.id)?.response ?? null;
             
            return x;
        })
        list = questionnarie;
        list.responses =  responses;
    })


    function goBack() {
        router.push({name:'questionnaries'})
    }
    
    function beforeSubmit() {
        Object.keys(form.questions).map(x =>{
            if(!form.questions[x]){
                return null;
            }
            const data ={
                questionId: parseInt(x),
                questionnaryId: parseInt(route.params.id),
                userId:parseInt(user),
                response: form.questions[x],
            };
            const id = list.responses.find(r => r.questionId == x)?.id ?? null;
            
            if(!id){
                rq.post('/responses', data);
                
            }else{
                rq.patch('/responses/' +id, data);
            } 
        }); 
        alert('Questionnarie completed correctly.');
        setTimeout(()=>goBack() ,1500)

    }

    
</script>