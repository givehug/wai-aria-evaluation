<template>
  <Button type="text" @click="openConfirm()">click to open the Dialog</Button>
</template>

<script>
import Vue from 'vue';
import { Button, MessageBox } from 'element-ui';

export default {
  components: { Button },
  methods: {
    openConfirm(done) {
      MessageBox.confirm('Are you sure?', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(done)
        .catch(() => {});
    }
  }
};
</script>
