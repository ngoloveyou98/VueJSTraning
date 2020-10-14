<template>
    <div class="myComponent">
        <h1>{{message}}</h1>
        <h2>{{content}}</h2>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:'this is first component',
            content: 'My name is Vinh'
        }
    }
}
</script>
<style>
    .myComponent{
        color:red;
    }
</style>