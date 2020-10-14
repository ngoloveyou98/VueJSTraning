<template>
  <div class="myComponent">
    <h1>Title: {{message.title}}</h1>
    <p>Content: {{message.content}}</p>
    <button @click="changTitle()">Chang title</button>
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
      return (this.title = "this is new title");
    }
  }
};
</script>