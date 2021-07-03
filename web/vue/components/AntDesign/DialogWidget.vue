<template>
  <div>
    <Button type="primary" @click="showModal">
      Open Modal
    </Button>
    <Modal v-model="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button, Modal } from 'ant-design-vue';

export default {
  components: { Button, Modal },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showModal() {
      Modal.install(Vue);
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    }
  }
};
</script>
