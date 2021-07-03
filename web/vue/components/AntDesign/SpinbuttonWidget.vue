<template>
  <TimePicker use12-hours format="h:mm a" @change="onChange" />
</template>

<script>
import { TimePicker } from 'ant-design-vue';

export default {
  components: {
    TimePicker
  },
  methods: {
    onChange(time, timeString) {
      console.log(time, timeString);
    }
  }
};
</script>
