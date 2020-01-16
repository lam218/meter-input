<template>
  <div>
    <small-house
      v-if="house === 'small'"
      :scale="scale"
      :is-day="isDay"
      :rotate="rotate"
    ></small-house>
    <medium-house
      v-if="house === 'medium'"
      :scale="scale"
      :is-day="isDay"
      :rotate="rotate"
    ></medium-house>
    <large-house
      v-if="house === 'large'"
      :scale="scale"
      :is-day="isDay"
      :rotate="rotate"
    ></large-house>
  </div>
</template>

<script>
import LargeHouse from "./LargeHouse";
import MediumHouse from "./MediumHouse";
import SmallHouse from './SmallHouse';
export default {
  name: "house-icon",
  props: {
    house: String,
    scale: Number
  },
  components: {
    LargeHouse,
    MediumHouse,
    SmallHouse
  },
  data() {
    return {
      seconds: 0
    };
  },
  mounted() {
    const vm = this;
    setInterval(
      function() {
        vm.seconds = vm.seconds + 1;
      },
      1000,
      vm
    );
  },
  computed: {
    rotate() {
      return this.calculateMod360(this.seconds);
    },
    isDay() {
      if (this.rotate > 90 && this.rotate < 270) {
        return false;
      }
      return true;
    }
  },
  methods: {
    calculateIsDay() {
      //   const hours = new Date().getHours();
      //   return hours >= 6 && hours < 18;
    },
    calculateMod360(n) {
      let m = 270 + n;
      return ((m % 360) + 360) % 360;
    }
  }
};
</script>

<style scoped lang="scss">
#cycle {
  g {
    transition: all 1.5s ease-in-out;
  }
}
#house {
  transform-origin: 10% 50%;
  transition: all 0.25s ease-in-out;
}
</style>
