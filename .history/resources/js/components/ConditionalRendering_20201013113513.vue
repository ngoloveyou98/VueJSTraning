<template>
   <div class="conditional-rendering">
        <div class="block-1" v-if="isActive == false">
            This is block 1
        </div>
        <div class="block-2" v-if="isActive == true"> 
            This is block 2
        </div>
    </div>
</template>