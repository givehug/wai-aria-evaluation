<template>
  <div>
    <BButton variant="success" @click="log">Button</BButton>
    <BButton variant="danger" disabled>Disabled</BButton>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue';

export default {
  components: { BButton },
  methods: {
    log() {
      console.log(1);
    }
  }
};
</script>
