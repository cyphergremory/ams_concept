 <template>
     <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-10 mx-5">
  <div class="flex justify-center md:justify-end -mt-16">
        <div class="w-20 h-20 flex items-center justify-center rounded-full border-8" :class="colorSchema" >
            {{completePercentage}}%
        </div>
  </div>
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold truncate" :title="item.title">{{item.title}}</h2>
    <p class="mt-2 text-gray-600">{{item.description}}</p>
  </div>
  <div class="flex justify-start align-center mt-4">
    <span class="ml-2 flex flex-row text-gray-400 font-semibold items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
         {{item.responses}}/{{item.questions}}
    </span>
    <span class="ml-2 flex flex-row text-gray-400 font-semibold items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {{item.timelapse}}min
    </span>
    <a href="#" @click.prevent="navigateToQuestionarie(item.id)" class="text-xl font-medium text-gray-400 hover:underline hover:text-indigo-400 ml-auto mr-2">Take Quizz</a>
  </div>
</div>
 </template>

 <script setup>
  import {useRouter} from 'vue-router'
    const {item} = defineProps({item:Object})
    const router = useRouter();

    item.completed = (item.responses * 100)/item.questions;
    

    function navigateToQuestionarie(id){
       router.push({name:'questionnarie',params:{id:id}})
    }

    const completePercentage = $computed(()=> (isNaN(item.completed)? 0 : item.completed ))
    const colorSchema = $computed(()=>{
      if(completePercentage < 20) return 'bg-red-500  border-red-400 text-red-100';
      if(completePercentage === 100) return 'bg-green-500 border-green-400 text-green-100';
      return 'bg-yellow-500 border-yellow-400 text-yellow-100';
    })
 </script>
