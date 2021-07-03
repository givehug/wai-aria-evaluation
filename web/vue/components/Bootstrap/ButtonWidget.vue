<template>
  <div>
    <BButton variant="success">Button</BButton>
    <BButton variant="danger" disabled>Disabled</BButton>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue';

export default {
  components: { BButton }
};
</script>
