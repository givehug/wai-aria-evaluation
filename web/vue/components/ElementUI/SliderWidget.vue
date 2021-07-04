<template>
  <Slider v-model="value1"></Slider>
</template>

<script>
import { Slider } from 'element-ui';

export default {
  components: { Slider },
  data() {
    return {
      value1: 0
    };
  }
};
</script>
