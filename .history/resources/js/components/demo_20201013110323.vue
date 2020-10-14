<template>
  <div id="myConponent">
      <h1>Title: {{message.title}}</h1>
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