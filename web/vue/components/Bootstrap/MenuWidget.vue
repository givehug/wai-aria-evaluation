<template>
  <BNav>
    <BNavItem active>Active</BNavItem>
    <BNavItem>Link</BNavItem>
    <BNavItem>Another Link</BNavItem>
    <BNavItem disabled>Disabled</BNavItem>
  </BNav>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue';

export default {
  components: { BNav, BNavItem }
};
</script>
