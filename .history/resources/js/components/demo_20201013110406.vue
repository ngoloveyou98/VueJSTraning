<template>
  <div id="myConponent">
      <h1>Title: {{message.title}}</h1>
      <p>Content: {{message.content}}</p>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        message:{
          title: 'vuejs',
          content: 'learn vuejs in laravel'
        }
      }
    }
  };
  
</script>