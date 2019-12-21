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
    margin-top: 50px;
  }

  body{
    background: #E74C3C;
  }

</style>
