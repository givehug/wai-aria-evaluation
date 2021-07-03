<template>
  <div>
    <BButton v-b-toggle.collapse-1 variant="primary">Toggle Collapse</BButton>
    <BCollapse id="collapse-1" class="mt-2">
      <BCard>
        <p class="card-text">Collapse contents Here</p>
      </BCard>
    </BCollapse>
  </div>
</template>

<script>
import { BCard, BCollapse, BButton, VBToggle } from 'bootstrap-vue';

export default {
  components: { BCard, BCollapse, BButton },
  directives: { 'b-toggle': VBToggle }
};
</script>
