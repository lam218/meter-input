<template>
  <div class="body">
    <div class="body__box">
      <p>
        The latitude is:
        <span class="bold">{{latitude}}</span>
      </p>
      <p>
        The longitude is:
        <span class="bold">{{longitude}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "get-location",
  data: function() {
    return {
      latitude: "",
      longitude: ""
    };
  },
  mounted: function() {
    this.getLocation();
  },
  methods: {
    getLocation: function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      }
    },
    showPosition: function(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    }
  }
};
</script>

<style lang="scss" scoped>
.body {
  &__box {
    text-align: left;
    max-width: 940px;
    margin: 80px auto;
    padding: 20px;
    border: 2px solid #009ebd;
    border-radius: 8px;
  }
}
.bold {
  font-weight: 600;
}
</style>