<template>
  <div>
    <v-slider
      v-model="ex1.val"
      :color="ex1.color"
      :label="ex1.label"
    ></v-slider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ex1: { label: 'color', val: 25, color: 'orange darken-3' }
    };
  }
};
</script>
