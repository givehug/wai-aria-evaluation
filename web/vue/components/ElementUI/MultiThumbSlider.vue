<template>
  <Slider v-model="value" range :max="10"></Slider>
</template>

<script>
import { Slider } from 'element-ui';

export default {
  components: { Slider },
  data() {
    return {
      value: [4, 8]
    };
  }
};
</script>
