<template>
  <div id="app">
    <div class="sliderDiv">
      <input type="range" min="0" max="1000" class="slider" v-model="value" />
      <span>Valor Base: {{ value }}</span>
    </div>
    <value-bar :porcent="porcent"></value-bar>
    <donut-bar :porcent="porcent"></donut-bar>
    <clock />
  </div>
</template>

<script>
import valueBar from "./components/valueBar";
import donutBar from "./components/donutBar";
import clock from "./components/clock";
export default {
  name: "App",
  components: {
    valueBar,
    donutBar,
    clock,
  },
  data() {
    return {
      value: 700,
    };
  },
  computed: {
    porcent() {
      if (this.value <= 400) return "0%";
      if (this.value >= 1000) return "100%";
      return ((this.value - 400) * 100) / 600 + "%";
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.sliderDiv {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
}
.sliderDiv span {
  color: rgb(95, 93, 93);
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 15px;
}
.slider {
  margin-bottom: 10px;
  -webkit-appearance: none;
  width: 60%;
  height: 15px;
  background-image: linear-gradient(to right, #ff1413 30%, #d3d3d3 40%);
  outline: none;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #186fad;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #186fad;
  cursor: pointer;
}
</style>
