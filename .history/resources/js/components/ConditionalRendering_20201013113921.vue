<template>
   <div class="conditional-rendering">
        <div class="block-1" v-if="isActive == false">
            This is block 1
        </div>
        <div class="block-2" v-if="isActive == true"> 
            This is block 2
        </div>
        <div>
            <button @click="toggleActive()">Toggle Active</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isActive:true
        }
    },
    methods:{
        toggleActive(){
            if(this.isActive == false){
               return this.isActive = true
            }else return this.isActive = false
        }
    }
}
</script>