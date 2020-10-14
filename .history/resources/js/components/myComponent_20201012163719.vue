<template>
    <div class="myComponent">
        <h1>{{message}}</h1>
        <button @click="sayHello(content)">click me</button>
    </div>

</template>
<script>
export default {
    data(){
        return{
            message:'Hello world',
            content: 'this is content'
        }
    },
    methods:{
        sayHello(content){
            return this.message = content.toUpperCase()
        }
    }
}
</script>