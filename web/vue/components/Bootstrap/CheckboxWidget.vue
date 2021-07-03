<template>
  <BFormGroup label="Using options array:" v-slot="{ ariaDescribedby }">
    <BFormCheckboxGroup
      id="checkbox-group-1"
      v-model="selected"
      :options="options"
      :aria-describedby="ariaDescribedby"
      name="flavour-1"
    />
  </BFormGroup>
</template>

<script>
import { BFormCheckboxGroup, BFormGroup } from 'bootstrap-vue';

export default {
  components: { BFormCheckboxGroup, BFormGroup },
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' }
      ]
    };
  }
};
</script>
