<template>
    <div class="mt-5 m-auto p-10 relative">
        <div class="py-3 px-5">
            <h4 class="text-[#606164] font-semibold text-xl">Files Dashboard</h4>
            <p class="text-[#9EA1A7] font-medium text-sm">
                Upload at least all the mandatory files by pressing the upload button. You can not proceed on the process if you do not complete this step.
            </p>
        </div>
        <div class="mt-3 bg-white shadow overflow-y-auto rounded-md overflow-x-hidden">
            <table class="w-full whitespace-nowrap">
                <tbody>
                    <row @upload="syncFiles" :file="x" :last="isLastRow(i)" v-for="x,i in activeFiles" :key="x.id" tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded" />
                </tbody>
            </table>
        </div>
        <uploader :data="upload" v-if="showModal"/>
    </div>
       
</template>

<script setup>
    import Row from '../components/FilesRow.vue'
    import Uploader from '../components/UploadFileModal.vue'
    import {rq} from '../helpers/http'
    import {onMounted} from 'vue';
    const files = $ref([]);
    const activeFiles = $computed(()=>files.value);
   
   
    onMounted(async()=>{
            const response = (await rq.get('files')).data;
            const userFiles = (await rq.get('user/' + localStorage.getItem('user') + '/user-files')).data;
            files.value = response.map(x=>{  
                return{
                    ...x,
                    delivered: userFiles.find(y => y.fileId === x.id)?.created_at ?? null 
                }
            });
    }) 
        

    function isLastRow(row){
        return activeFiles.length === (row + 1);
    }

    const showModal = $ref(false);
    const upload = $ref({user:null, file:null});

    const syncFiles = (data)=>{
        upload = {...data};
        showModal = true;
    }
</script>