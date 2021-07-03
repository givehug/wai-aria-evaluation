<template>
  <BTime v-model="value" locale="en" @context="onContext"></BTime>
</template>
<script>
import { BTime } from 'bootstrap-vue';

export default {
  components: { BTime },
  data() {
    return {
      value: '',
      context: null
    };
  },
  methods: {
    onContext(ctx) {
      this.context = ctx;
    }
  }
};
</script>
