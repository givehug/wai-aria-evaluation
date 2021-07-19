<template>
  <div>
    <Button type="primary" @click="log">Primary</Button>
    <Button type="success" disabled>Success</Button>
  </div>
</template>

<script>
import { Button } from 'element-ui';

export default {
  components: { Button },
  methods: {
    log() {
      console.log(1);
    }
  }
};
</script>
