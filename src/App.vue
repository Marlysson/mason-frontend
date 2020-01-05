<template>
  
  <div id="app">
    <CreateShortnedLink/>
  </div>

</template>

<script>

  import CreateShortnedLink from "./pages/CreateShortnedLink.vue";

  export default {
      name: 'app',
      components: {
        CreateShortnedLink
      }
  }

</script>

<style>

  #app {
    font-family: 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 50px auto 0;

  }

  label {
    display:block;
    margin-bottom:5px;
    text-align:left;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size:18px;
    color:white;
    font-weight:bold;
  }
    
  body{
    background: #E74C3C;
  }

  * { margin:0; padding:0; }

</style>
