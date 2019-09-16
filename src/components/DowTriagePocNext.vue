<template>
  <div>
    <h1>DOW Triage POC Next Steps</h1>
    <div class="container">
      <div class="next-block next-block__close-application" v-if="$route.params.stopApplication">
        <div class="next-block__message">
          <p>
          Your application cannot proceed due to:
          </p>

          {{this.$route.params.message}}
        </div>
        <div class="submit-buttons" >
            <input type="button" value="Contact us"  class="button--next primary-button" />
        </div>

      </div>
      <div class="next-block next-block__bos-form" v-if="$route.params.directToBos">
        <div class="next-block__message">
          <p>
          Due to the answers you provided you are required to complete the "BOS" form...
          </p>

          {{this.$route.params.message}}
        </div>
        <div class="submit-buttons" >
            <input type="button" value="Complete BOS form"  class="button--next primary-button" />
        </div>
      </div>

      <div class="next-block next-block__next-steps" v-if="!$route.params.directToBos && !$route.params.stopApplication">
        The next part of the form (successful progression)...

      </div>
    </div>
  </div>
</template>

<script>

import '../../public/main.css';

export default {
  name: "dow-triage-poc-next",
};
</script>

<style scoped lang="scss">

.container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 20px;

}
.next-block{
  grid-column: 3 / 11;
  margin-bottom: 30px;
}

.submit-buttons {
  display: block;
  text-align: center;
}

</style>

