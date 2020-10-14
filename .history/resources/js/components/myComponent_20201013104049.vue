<template>
    <div class="myComponent">
        <div>
            <h1>{{message}}</h1>
            <button @click="sayHello()">click me</button>
        </div>
        <div>
            <h2>{{reverseMessage}}</h2>
        </div>
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
            reverseMessage: 'hello vinh'
        }
    },
    methods:{
        sayHello(){
            return this.message = this.title.toUpperCase()
        }
    },
    computed:{
        reverseMessage(){
            return this.message.split('').reverse().join('')
        }
    }

}
</script>