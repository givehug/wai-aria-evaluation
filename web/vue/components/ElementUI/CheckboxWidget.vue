<template>
  <CheckboxGroup v-model="checkList">
    <Checkbox label="Option A"></Checkbox>
    <Checkbox label="Option B"></Checkbox>
    <Checkbox label="Option C"></Checkbox>
    <Checkbox label="disabled" disabled></Checkbox>
    <Checkbox label="selected and disabled" disabled></Checkbox>
  </CheckboxGroup>
</template>

<script>
import { CheckboxGroup, Checkbox } from 'element-ui';

export default {
  components: { CheckboxGroup, Checkbox },
  data() {
    return {
      checkList: ['selected and disabled', 'Option A']
    };
  }
};
</script>
