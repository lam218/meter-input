<template>
  <div id="app">
    <p>
    <router-link to="/arrows" class="link">Go to Arrows</router-link>
    <router-link to="/animations" class="link">Go to SVG animations</router-link>
    <router-link to="/meter-reading" class="link">Go to Meter reading</router-link>
    <router-link to="/meter-reading-v2" class="link">Go to Meter reading v2</router-link>
<<<<<<< HEAD
    <router-link to="/content-scroll" class="link">Go to Content scroll</router-link>
=======
    <router-link to="/key-actions" class="link">Go to Key Actions CTA</router-link>
>>>>>>> 5d3d0706eb0530802cfe605fcbef69a2034493f1
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
