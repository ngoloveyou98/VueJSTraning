<template>
    <div class="myComponent">
        <h1>{{message}}</h1>
        <button @click="sayHello()">click me</button>
        
    </div>

</template>
<script>

export default {
    data(){
        return{
            message:'Hello world',
            content: 'this is content',
            title: 'this is title',
            // category: '5t'
        }
    },
    methods:{
        sayHello(){
            return this.message = content.toUpperCase()
        }
    }
    // computed:{
    //     reverseMessage(){
    //         return this.message.split('').reverse().join('')
    //     }
    // }

}
</script>