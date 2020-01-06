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

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 50px auto 0;
  }

  label {
    display:block;
    margin-bottom:5px;
    text-align:left;
    font-size:18px;
    color:white;
    font-weight:bold;
  }
    
  body{
    background: #E74C3C;
  }

  * { margin:0; padding:0; }

  .block{ display:block;}
  
</style>
