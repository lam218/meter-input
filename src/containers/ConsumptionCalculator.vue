<template>
  <div class="outer">
    <div class="slidecontainer">
      <p :style="{ marginLeft: margin }">{{ sliderValue }}</p>
      <input
        type="range"
        min="1"
        max="10"
        v-model.number="sliderValue"
        @input="changeWidth"
        class="slider"
        id="myRange"
      />
    </div>
    <house-icon :house="houseType" :scale="scale"></house-icon>
  </div>
</template>

<script>
import HouseIcon from "../components/HouseIcon";

export default {
  name: "ConsumptionCalculator",
  components: {
    HouseIcon
  },
  data: function() {
    return {
      sliderValue: 1
    };
  },
  computed: {
    margin() {
      if (this.sliderValue === 0 || this.sliderValue === 1) {
        return "10%";
      }
      if (this.sliderValue === 10) {
        return `calc(${this.sliderValue * 10}% - 30px)`;
      }
      return `calc(${(this.sliderValue + 1) * 10}% - 30px)`;
    },
    houseType() {
      let house = "";
      switch (this.sliderValue) {
        case 1:
        case 2:
          house = "small";
          break;
        case 3:
        case 4:
        case 5:
          house = "medium";
          break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
          house = "large";
          break;
        default:
          house = "small";
      }
      return house;
    },
    scale() {
      let scale = 0;
      switch (this.sliderValue) {
        case 1:
        case 3:
          scale = 1;
          break;
        case 2:
        case 4:
          scale = 1.02;
          break;
        case 5:
        case 6:
          scale = 1.04;
          break;
        case 7:
        case 8:
        case 9:
        case 10:
          scale = 1.06 + ((this.sliderValue - 7) / 100);
          break;
        default:
          scale = 0;
      }
      return scale;
    }
  },
  methods: {
    changeWidth() {
      this.width = this.sliderValue;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer {
  min-height: 90vh;
  display: flex;
  align-items: center;
}
.slidercontainer {
  margin-left: 40px;
}
.slider {
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  height: 10px; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 30px; /* Set a specific slider handle width */
  height: 30px; /* Slider handle height */
  background: #4caf50; /* Green background */
  cursor: pointer; /* Cursor on hover */
  border-radius: 100%;
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #4caf50; /* Green background */
  cursor: pointer; /* Cursor on hover */
}
</style>
