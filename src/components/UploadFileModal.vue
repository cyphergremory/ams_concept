<template>
    <div class="fixed w-full h-full left-0 top-0 z-20 flex">
        <div class="relative z-20 bg-white m-auto max-w-xl w-full rounded-lg p-3 shadow-lg text-center">
        <div class="flex flex-row items-center px-3" v-if="status === 'done'">
            <p class="text-xl text-[#606164] font-semibold">File uploaded successfully</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-400 ml-auto" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
        </div>
        <div v-if="status === 'iddle'" class="w-full h-44  border-2  border-[#cfd8dc] border-dashed rounded-md flex flex-col items-center justify-center">        
            <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 border-4 border-gray-100 text-[#F4C9AE] rounded-md" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
            </svg>
            <p class="text-[#9EA1A7] text-sm font-thin mt-2">Drag and drop your file here or <button class="text-[#cfd8dc]  text-sm font-thin underline" @click="browseFiles">browse files</button></p>
        </div>  
        <div class="px-4" v-if="status === 'loading'">
            <div class="flex flex-row  items-center justify-start">
                <span class="ml-1 text-[#606164] font-semibold text-lg">Uploading file </span>
                <button class="w-8 h-8 hover:bg-red-300 hover:text-red-100 rounded-full bg-red-100 ml-auto text-red-400 flex">
                    <span class="m-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                </button>
            </div>
            <div class="flex flex-row ml-2 text-[#9EA1A7] items-center justify-start font-semibold text-xs">
                {{first.name[0].toUpperCase() + first.name.slice(1)}} <span class="ml-1 mt-1 font-bold">{{humanizeFileSize(first.size)}}</span>
            </div>
            <div id="loader_inner" class="bg-gray-200 w-full h-1 mt-2 rounded-full"></div>
        </div>
    </div> 
        <input hidden type="file" id="file" @change="uploadFile"/>
        <div  class="absolute w-full h-full left-0 top-0 bg-blue-100 opacity-75 z-10" @click="reset"></div>
    </div>
</template>

<script setup>
    import {rq} from '../helpers/http'
    import {humanizeFileSize} from '../helpers/conversion'
    import {useRouter} from 'vue-router';

    //Initialize props && refs:
    const {data} = defineProps({data:Object})
    const first = $ref({});
    const status = $ref('iddle');
    const router = useRouter();
 
    const browseFiles = ()=> document.getElementById('file').click();
    const uploadFile= async({target:{files}})=>{
        first = files[0];
        status = 'loading';
        setTimeout(async()=>{ 
             document.getElementById('loader_inner').classList.add('open');
        },300);

        await rq.post(`/user/${data.user}/user-files`,{
            fileId:data.file.id,
            userId:parseInt(data.user),
            file: first.name,
            created_at:new Date().toDateString()
        });

         setTimeout(async()=>{ 
             status = 'done';
            setTimeout(async()=>{ 
                reset();
            },1500);
        },3000);
    }

    const reset = ()=> router.go(0)
</script>

<style scoped>
#loader_inner::before{
    content:'';
    position: absolute;
    top:0;
    left:0;
    z-index:+1;
    height:100%;
    width:0;
    background-color:#69f0ae;
    
}
#loader_inner::before{
     -webkit-transition: width 3s;
    transition: width 3s;
}
#loader_inner.open::before{
   width:100%;
}
</style>