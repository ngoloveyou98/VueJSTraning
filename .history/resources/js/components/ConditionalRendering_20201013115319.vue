<template>
   <!-- <div class="conditional-rendering">
        <div class="block-1" v-if="isActive == false">
            This is block 1
        </div>
        <div class="block-2" v-else> 
            This is block 2
        </div>
        <div>
            <button @click="toggleActive()">Toggle Active</button>
        </div>
    </div> -->
    
    <div class="conditional-rendering">
        <div class="block-1" v-show="isActive == false">
            This is block 1
        </div>
        <div class="block-2" v-show="isActive == true">
            This is block 2
        </div>
        <div>
            <button @click="isActive = !isActive">Button</button>
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
            this.isActive = !thisActive
        }
    }
}
</script>