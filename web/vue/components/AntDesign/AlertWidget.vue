<template>
  <Alert
    message="Error Text"
    description="Error Description Error Description Error Description Error Description Error Description Error Description"
    type="error"
    closable
    @close="onClose"
  />
</template>
<script>
import { Alert } from 'ant-design-vue';

export default {
  components: { Alert },
  methods: {
    onClose(e) {
      console.log(e, 'I was closed.');
    }
  }
};
</script>
