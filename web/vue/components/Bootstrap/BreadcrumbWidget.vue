<template>
  <BBreadcrumb :items="items"></BBreadcrumb>
</template>

<script>
import { BBreadcrumb } from 'bootstrap-vue';

export default {
  components: { BBreadcrumb },
  data() {
    return {
      items: [
        {
          text: 'Admin',
          href: '#'
        },
        {
          text: 'Manage',
          href: '#'
        },
        {
          text: 'Library',
          active: true
        }
      ]
    };
  }
};
</script>
