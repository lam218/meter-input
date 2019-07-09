<template>
  <div id="app">
    <p>
    
    <router-link to="/arrows" class="link">Go to Arrows</router-link>
    <router-link to="/meter-reading" class="link">Go to Meter reading</router-link>
    <router-view></router-view>
  </p>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.link {
  padding: 0 20px;  
}
</style>
