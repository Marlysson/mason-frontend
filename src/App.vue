<template>
  
  <div id="app">
    <Logo/>
    <AliasShortnerComponent/>

  </div>

</template>

<script>

import Logo from './components/Logo.vue';
import AliasShortnerComponent  from "./components/AliasShortnerComponent.vue";

export default {
  name: 'app',
  components: {
    Logo,
    AliasShortnerComponent
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
