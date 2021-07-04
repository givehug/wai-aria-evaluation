<template>
  <RadioGroup v-model="radio">
    <Radio :label="3">Option A</Radio>
    <Radio :label="6">Option B</Radio>
    <Radio :label="9">Option C</Radio>
  </RadioGroup>
</template>

<script>
import { Radio, RadioGroup } from 'element-ui';

export default {
  components: { Radio, RadioGroup },
  data() {
    return {
      radio: 3
    };
  }
};
</script>
