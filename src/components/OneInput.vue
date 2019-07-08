<template>
  <div>
    <div class="value-container" v-if="!showInput">
      <div
        class="value"
        v-bind:class="{'value--red': i > 4}"
        v-for="(item, i) in meterValue"
        v-bind:key="item.key"
        v-on:click="toggleInput(true)"
      >{{item.value}}
      <span v-if="i === 4">.</span>
      </div>
    </div>
    <div v-if="showInput">
      <div class="input-container">
        <span class="input-container__input" v-html="displayValue"></span>
        <input
          class="input-container__hidden-input"
          v-bind:value="inputValue"
          v-on:input="onChange"
          maxlength="8"
        />
      </div>
      <button v-on:click="toggleInput(false)">Done</button>
      <p v-if="showError ">Have you remembered the leading zeros, you should have 8 numbers</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "one-input",
  data: function() {
    return {
      inputValue: "",
      displayValue: "",
      meterValue: [
        {
          key: 0,
          value: 0
        },
        {
          key: 1,
          value: 0
        },
        {
          key: 2,
          value: 0
        },
        {
          key: 3,
          value: 0
        },
        {
          key: 4,
          value: 0
        },
        {
          key: 5,
          value: 0
        },
        {
          key: 6,
          value: 0
        },
        {
          key: 7,
          value: 0
        }
      ],
      showInput: false,
      showError: false
    };
  },
  methods: {
    onChange: function(e) {
      if (!isNaN(parseInt(e.data))) {
        const value = e.target.value;
        this.inputValue = value;
        if (value.length === 5) {
          this.displayValue = `${value}<span style="color: red">.</span>`;
        } else if (value.length > 5) {
          this.displayValue = `${this.displayValue}<span style="color: red">${e.data}</span>`;
        } else {
          this.displayValue = value;
        }
      }
    },
    toggleInput: function(shouldShowInput) {
      if (!shouldShowInput && this.inputValue.length === 8) {
        this.showError = false;
        this.meterValue = this.inputValue
          .split("")
          .map((item, i) => ({ key: i, value: item }));
        this.showInput = shouldShowInput;
      } else if (shouldShowInput) {
        this.showInput = shouldShowInput;
      } else {
        this.showError = true;
      }
    }
  }
};
</script>

<style scoped>
.input-container__input {
  background: white;
  width: 50%;
  height: 60px;
}
.input-container__hidden-input {
  padding: 10px;
  line-height: 25px;
  font-size: 16px;
  width: 100%;
  position: absolute;
  opacity: 0;
}

.input-container__input--red {
  color: red;
}
.value--red {
  color: red;
}
.red {
  color: red;
}
</style>