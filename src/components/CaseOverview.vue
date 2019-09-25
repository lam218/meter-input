<template>
  <div class="temp-page-container-class">
    <Progress />
  </div>
</template>

<script>
import Progress from './Progress';

export default {
  name: 'CaseOverview',
  components: {
    Progress,
  },
  props: {
    status: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss">
.temp-page-container-class {
  max-width: 1000px;
  margin: 10rem auto 0 auto;
  padding: 0 1rem;
}
</style>