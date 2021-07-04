<template>
  <TimePicker
    v-model="value1"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Arbitrary time"
  >
  </TimePicker>
</template>

<script>
import { TimePicker } from 'element-ui';

export default {
  components: { TimePicker },
  data() {
    return {
      value1: 0
    };
  }
};
</script>
