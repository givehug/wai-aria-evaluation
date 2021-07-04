<template>
  <Select v-model="value" placeholder="Select">
    <Option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </Option>
  </Select>
</template>

<script>
import { Select, Option } from 'element-ui';

export default {
  components: { Select, Option },
  data() {
    return {
      options: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ],
      value: ''
    };
  }
};
</script>
