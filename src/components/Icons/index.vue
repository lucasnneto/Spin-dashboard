<template>
  <div v-on="$listeners">
    <component :is="name" v-bind="$props" />
  </div>
</template>
<script>
import arrow from "./arrow";
import donut from "./donut";
import pointer from "./pointer";
import clock from "./clock";
export default {
  components: {
    arrow,
    donut,
    pointer,
    clock,
  },
  props: {
    name: { type: String, required: true },
    data: { type: Object },
  },
};
</script>