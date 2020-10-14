<template>
    <div class="myComponent">
        <h1>{{message}}</h1>
        <button @click="sayHello">click me</button>
    </div>

</template>
<script>
export default {
    data(){
        return{
            message:'Hello world'
        }
    },
    methods:{
        sayHello(){
            this.message = 'You clicked button'
        }
    }
}
</script>