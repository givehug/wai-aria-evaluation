<template>
  <div>
    <BButton v-b-modal.modal-1>Launch demo modal</BButton>

    <BModal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </BModal>
  </div>
</template>

<script>
import { BButton, BModal, VBModal } from 'bootstrap-vue';

export default {
  components: { BButton, BModal },
  directives: { 'b-modal': VBModal }
};
</script>
