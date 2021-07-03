<template>
  <WidgetTemplate library="Demo" />
</template>

<script lang="ts">
import Vue from 'vue';
import WidgetTemplate from '../components/WidgetTemplate.vue';

export default Vue.extend({
  components: {
    WidgetTemplate
  }
});
</script>

<style scoped>
.div {
  color: red;
}
</style>
