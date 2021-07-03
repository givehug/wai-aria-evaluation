<template>
  <BTabs content-class="mt-3">
    <BTab title="First" active><p>I'm the first tab</p></BTab>
    <BTab title="Second"><p>I'm the second tab</p></BTab>
    <BTab title="Disabled" disabled><p>I'm a disabled tab!</p></BTab>
  </BTabs>
</template>
<script>
import { BTabs, BTab } from 'bootstrap-vue';

export default {
  components: { BTabs, BTab }
};
</script>
