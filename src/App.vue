<template>
  
  <div id="app">
    <Logo/>
  </div>

</template>

<script>
import Logo from './components/Logo.vue'

export default {
  name: 'app',
  components: {
    Logo
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
