<template>
  <div class="app">
   <h1>Update to input</h1>
   <p>In this one the input is above the visual representaion</p>
   <visual-rep></visual-rep>
   <p>In this one the visual representaion is above the input</p>
   <visual-rep-reverse></visual-rep-reverse>
  </div>
</template>

<script>
import VisualRep from './VisualRepresentation';
import VisualRepReverse from './VisualRepresentationReverse';

export default {
  name: 'MeterInputV2',
  components: {
    VisualRep,
    VisualRepReverse
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
