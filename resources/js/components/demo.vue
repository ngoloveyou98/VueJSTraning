<template>
  <div class="myComponent">
    <h1>Title: {{message.title}}</h1>
    <p>Content: {{message.content}}</p>
    <button @click="changTitle()">Chang title</button>
    <button @click="changContent()">Chang content</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {
        title: "vuejs",
        content: "learn vuejs in laravel"
      }
    };
  },

  methods: {
    changTitle() {
      return this.message.title = "this is new title"
    },
    changContent(){
      return this.message.content = 'This is new content'
    }
  },

  computed:{
      getTitle(){
        return this.message.title
      },
      getContent(){
        return this.message.content
      } 
  },
  watch:{
      getTitle(){
        console.log('Title changed')
      },
      getContent(){
        console.log('Content changed')
      }
  }
  
};
</script>