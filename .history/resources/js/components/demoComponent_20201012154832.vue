<template>
    <div class="myComponent">
        <h1>{{message}}</h1>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:'this is first component'
        }
    }
}
</script>
<style>
    .myComponent{
        color:red;
    }
</style>