<template>
    <div class="m-0 relative w-full h-full flex flex-col">
        <div class="text-center mb-5">
            <a href="#" @click.prevent="goBack" class="text-gray-600 flex flex-row hover:underline hover:text-blue-400 hover:bg-transparent">
                Go back
            </a>
        <h4 class="text-3xl font-semibold text-gray-700 p-4 px-6 capitalize">Questionnaries</h4>
        </div>
        <div class="flex-1 flex flex-row flex-wrap justify-center content-start">
            <card  v-for="x,y in list" :key="y" :item="x"/>
        </div>
</div>
        
</template>

<script setup>
    import Card from '../components/Questionnarie.vue'
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import {rq} from '../helpers/http'
    const list = $ref([]);
    const router = useRouter();

    onMounted(async()=>{
        const response = (await rq.get('/questionnaries-list')).data;

        list = await Promise.all(response.map(async x =>{
            const responses = (await rq.get(`/questionnaries/${x.id}/user-responses/` + localStorage.getItem('user'))).data;
            x.questions = x.questions?.length ?? 0;
            x.responses = responses?.length ??  0
            console.log(x);
            return {
                ...x,
            }
        }))
    })

    function goBack(){
        router.push({name:'home',params:{
            token:localStorage.getItem('token')
        }})
    }
</script>