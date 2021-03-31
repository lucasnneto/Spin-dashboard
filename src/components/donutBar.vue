<template>
  <div class="donutBody">
    <icon name="donut" />
    <icon
      name="pointer"
      :style="{
        transform: `rotate(${rotate}deg) translate(-1%,-1%)`,
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    porcent: String,
  },
  computed: {
    value() {
      return Number(this.porcent.split("%")[0]) || 0;
    },
    rotate() {
      //-196 a 78

      return (274 * this.value) / 100 - 196;
    },
  },
};
</script>

<style>
.donutBody {
  position: relative;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.donutBody div {
  position: absolute;
  top: 0;
}
</style>