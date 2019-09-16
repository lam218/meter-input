<template>
  <div>
    <h1>DOW Triage POC</h1>
    <div class="container">

      <div id="q1-row" class="question-row">
        <div class="question">
          <label for="q1">Are you building over a pitch fiber pipe, asbestos, cement, brick?</label>
          </div>
        <div class="answer">
          <input type="radio" name="q1" v-bind:value="true" id="q1-yes" v-model="vq1"  >
          <label for="yes">Yes</label>
          <input type="radio" name="q1" v-bind:value="false" id="q1-no"  v-model="vq1" >
          <label for="no">No</label>
        </div>
      </div>

      <transition name="fade">
        <div id="q2-row" class="question-row" v-if="vq1===false">
          <div class="question">
            <label for="q2-answer">Please confirm the internal diameter of the public sewer or lateral drain.</label>
            </div>
          <div class="answer">
            <select id="q2" name="q2" v-on:change="handleQ2">
              <option value="">Please select...</option>
              <option value="100">100 - 150mm</option>
              <option value="225">225mm</option>
              <option value="300">300mm or larger</option>
            </select>        
            
            </div>
        </div>
      </transition>

      <transition name="fade">
        <div id="q3-row" class="question-row" v-if="showQ3">
          <div class="question">
            <label for="q3">Is the public sewer or lateral drain gravity based foul, storm water or combined flow from domestic properties (i.e. not pumped)?</label>
            </div>
          <div class="answer">
            <input type="radio" name="q3" v-bind:value="true" id="q3-yes" v-model="vq3"  >
            <label for="yes">Yes</label>
            <input type="radio" name="q3" v-bind:value="false" id="q3-no"  v-model="vq3" >
            <label for="no">No</label>
          </div>
        </div>
      </transition>

      <transition name="fade">
        <div id="q4-row" class="question-row" v-if="showQ4">
          <div class="question">
            <label for="q4">Is the sewer or lateral drain deeper than 2m?</label>
            </div>
          <div class="answer">
            <input type="radio" name="q4" v-bind:value="true" id="q4-yes" v-model="vq4"  >
            <label for="yes">Yes</label>
            <input type="radio" name="q4" v-bind:value="false" id="q4-no"  v-model="vq4" >
            <label for="no">No</label>
          </div>
        </div>
      </transition>

      <transition name="fade">
        <div id="q5-row" class="question-row" v-if="showQ5">
          <div class="question">
            <label for="q5">Will the development utilise strip/trench fill foundations?</label>
            </div>
          <div class="answer">
            <input type="radio" name="q5" v-bind:value="true" id="q5-yes" v-model="vq5"  >
            <label for="yes">Yes</label>
            <input type="radio" name="q5" v-bind:value="false" id="q5-no"  v-model="vq5" >
            <label for="no">No</label>
          </div>
        </div>
      </transition>

      <hr class="horizontal-line">
      <div class="submit-buttons">
        <div class="button__previous">
          <input type="button" value="Previous" class="button--previous secondary-button submit-buttons__left-button"/>
        </div>
        <div class="button__next">
          <input type="button" value="Next"  class="button--next primary-button submit-buttons__right-button" v-bind:disabled="!enableNext" v-on:click="handleNext()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import '../../public/main.css';

export default {
  name: "dow-triage-poc",
  props: {
  },
  mounted() {
  },
  data: function() {
    return {
      vq1: null,
      vq2: null,
      vq3: null,
      vq4: null,
      vq5: null,
      showQ2: false,
      showQ3: false,
      showQ4: false,
      showQ5: false,
      stopApplication: false,
      directToBos: false,
      nextMessage: null

    }
  },
  computed: {
      enableNext: function () {
        return this.stopApplication || this.directToBos || this.allQuestionsComplete;
      },
      allQuestionsComplete: function () {
        return this.vq1 !== null && this.vq2 !== null && this.vq3 !== null && this.vq4 !== null && this.vq5 !== null;
      }
  },
  watch: {
      vq1() {
        this.stopApplication = this.vq1;
        this.directToBos = false;
        this.nextMessage = (this.vq1) ?  "STOP due to question 1" : null;
        this.showQ2 = true;
        this.vq2 = this.vq3 = this.vq4 = this.vq5 = null;
      },
      vq2() {
          this.vq3 = this.vq4 = this.vq5 = null;
          switch(this.vq2) {
            case "100": // continue
              this.stopApplication = false;
              this.directToBos = false;
              this.showQ3 = true;
              this.showNext = true;
              this.nextMessage = null;
              break;
            case "225": // BOS app
              this.stopApplication = false;
              this.directToBos = true;
              this.showQ3 = false;
              this.nextMessage = "BOS due to question 2";
              break;
            case "300": // stop app
              this.stopApplication = true;
              this.directToBos = false;
              this.nextMessage = "STOP due to question 2";
              this.showQ3 = false;
              break;
            default:
              this.stopApplication = false;
              this.directToBos = false;
              this.showQ3 = false;
              this.nextMessage = null;
              break;
          }
      },
      vq3() {
        this.vq4 = this.vq5 = null;
        this.stopApplication = !this.vq3;
        this.directToBos = false;
        this.nextMessage = (this.vq3) ? "" : "STOP due to question 3";
        this.showQ4 = this.vq3;
      },
      vq4() {
        this.vq5 = null;
        this.stopApplication = false;
        this.directToBos = this.vq4;
        this.nextMessage = (this.vq4) ? "BOS due to question 4" : "";
        this.showQ5 = !this.vq4;
      },
      vq5() {
        this.stopApplication = false;
        this.directToBos = !this.vq5;
        this.nextMessage = (this.vq5) ? "" : "BOS due to question 5";
      }
  },
  methods: {
    handleQ2: function (event) {
      this.vq2 = event.target.value;
    },
    handleNext: function () {
      this.$router.push( { 
        name: 'dow-triage-poc-next', 
        params: { 
          stopApplication: this.stopApplication,
          directToBos: this.directToBos,
          message: this.nextMessage
        } 
      });
    }

  }
};
</script>

<style scoped lang="scss">

.container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 20px;

}
.question-row{
  grid-column: 3 / 11;
  display: flex;
  margin-bottom: 30px;
}

.field {
  &__heading {
    flex: 0 0 70%;
    text-align: left;

  }

}
.question {
  flex: 0 0 70%;
  text-align: left;
  }

label {
  text-align: left;
}
.answer {
  flex: 0 0 30%;
  text-align: right;
  input {
    margin-left: 10px;
    margin-right: 10px;
    display: inline;
  }

}

hr.horizontal-line {
  grid-column: 3 / 11;
  display: flex;
  margin-bottom: 30px;

}

.submit-buttons{
  grid-column: 3 / 11;
  display: grid;
  margin-bottom: 30px;

}


.button{
  &__previous {
    grid-column: 1 / 2;
  }
  &__next {
    grid-column: 11 / 12;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

