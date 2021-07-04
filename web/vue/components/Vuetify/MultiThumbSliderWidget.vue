<template>
  <v-range-slider v-model="value" step="10"></v-range-slider>
</template>

<script>
export default {
  data() {
    return {
      value: [20, 40]
    };
  }
};
</script>
