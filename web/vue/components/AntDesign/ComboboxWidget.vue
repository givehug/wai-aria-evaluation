<template>
  <AutoComplete
    v-model="value"
    :data-source="dataSource"
    style="width: 200px"
    placeholder="input here"
    @select="onSelect"
    @search="onSearch"
    @change="onChange"
  />
</template>

<script>
import { AutoComplete } from 'ant-design-vue';

export default {
  components: { AutoComplete },
  data() {
    return {
      value: '',
      dataSource: []
    };
  },
  watch: {
    value(val) {
      console.log('value', val);
    }
  },
  methods: {
    onSearch(searchText) {
      this.dataSource = !searchText
        ? []
        : [searchText, searchText.repeat(2), searchText.repeat(3)];
    },
    onSelect(value) {
      console.log('onSelect', value);
    },
    onChange(value) {
      console.log('onChange', value);
    }
  }
};
</script>
