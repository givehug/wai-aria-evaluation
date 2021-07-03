<template>
  <BButton v-b-tooltip.hover title="Tooltip content">Hover Me</BButton>
</template>
<script>
import { BButton, VBTooltip } from 'bootstrap-vue';

export default {
  components: { BButton },
  directives: { 'b-tooltip': VBTooltip }
};
</script>
