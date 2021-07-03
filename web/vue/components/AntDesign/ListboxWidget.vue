<template>
  <Select default-value="lucy" style="width: 120px" @change="handleChange">
    <SelectOption value="jack">
      Jack
    </SelectOption>
    <SelectOption value="lucy">
      Lucy
    </SelectOption>
    <SelectOption value="disabled" disabled>
      Disabled
    </SelectOption>
    <SelectOption value="Yiminghe">
      yiminghe
    </SelectOption>
  </Select>
</template>

<script>
import { Select } from 'ant-design-vue';

export default {
  components: { Select, SelectOption: Select.Option },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    }
  }
};
</script>
