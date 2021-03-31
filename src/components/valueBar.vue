<template>
  <div class="DefineValue">
    <div class="TypeValueBar">
      <div class="ValueBar">
        <span v-for="n in 6" :key="n">
          {{ n * 100 + 301 }} à {{ n * 100 + 400 }}
        </span>
      </div>
      <div class="TextValueBar">
        <span>Baixa</span>
        <span>Alta</span>
      </div>
    </div>
    <icon name="arrow" :style="{ left: porcent }" class="arrow" />
  </div>
</template>

<script>
export default {
  props: {
    porcent: String,
  },
};
</script>

<style>
.DefineValue {
  width: 80%;
  height: 90px;
  position: relative;
}
.arrow {
  position: absolute;
  top: 0;
  transform: translateX(-50%);
}
.TypeValueBar {
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0;
}
.TextValueBar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  color: #888686;
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 15px;
}
.ValueBar {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(
    to right,
    #ff1413,
    #ff580f,
    #ffc00a,
    #94c026,
    #1ea146
  );
}
.ValueBar span {
  color: white;
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 15px;
}
</style>