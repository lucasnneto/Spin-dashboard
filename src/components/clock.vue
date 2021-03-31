<template>
  <div>
    <icon name="clock" :data="{ hoursAngle, minutesAngle, secondsAngle }" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hora: 0,
      minuto: 0,
      segundo: 0,
    };
  },
  mounted() {
    const time = new Date();
    this.hora = time.getHours();
    this.minuto = time.getMinutes();
    this.segundo = time.getSeconds();
  },
  watch: {
    segundo() {
      setTimeout(() => {
        const time = new Date();
        this.hora = time.getHours();
        this.minuto = time.getMinutes();
        this.segundo = time.getSeconds();
      }, 1000);
    },
  },
  computed: {
    hoursAngle() {
      return this.hora <= 12 ? this.hora * 30 : (this.hora - 12) * 30;
    },
    minutesAngle() {
      return this.minuto * 6;
    },
    secondsAngle() {
      return this.segundo * 6;
    },
  },
};
</script>