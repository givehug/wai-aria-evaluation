<template>
  <CheckboxGroup
    :options="options"
    :default-value="['Apple']"
    @change="onChange"
  >
    <span slot="label" slot-scope="{ value }" style="color: red">{{
      value
    }}</span>
  </CheckboxGroup>
</template>

<script>
import { Checkbox } from 'ant-design-vue';

const options = [
  { value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false }
];

export default {
  components: { CheckboxGroup: Checkbox.Group },
  data() {
    return {
      options,
      value: []
    };
  },
  methods: {
    onChange(checkedValues) {
      console.log('checked = ', checkedValues);
      console.log('value = ', this.value);
    }
  }
};
</script>
