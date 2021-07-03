<template>
  <Slider range :default-value="[20, 50]" />
</template>

<script>
import { Slider } from 'ant-design-vue';

export default {
  components: {
    Slider
  }
};
</script>
