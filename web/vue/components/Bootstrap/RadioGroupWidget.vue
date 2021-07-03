<template>
  <BFormGroup label="Radios using options" v-slot="{ ariaDescribedby }">
    <BFormRadioGroup
      id="radio-group-1"
      v-model="selected"
      :options="options"
      :aria-describedby="ariaDescribedby"
      name="radio-options"
    ></BFormRadioGroup>
  </BFormGroup>
</template>

<script>
import { BFormGroup, BFormRadioGroup } from 'bootstrap-vue';

export default {
  components: { BFormGroup, BFormRadioGroup },
  data() {
    return {
      selected: 'first',
      options: [
        { text: 'Toggle this custom radio', value: 'first' },
        { text: 'Or toggle this other custom radio', value: 'second' },
        { text: 'This one is Disabled', value: 'third', disabled: true },
        { text: 'This is the 4th radio', value: { fourth: 4 } }
      ]
    };
  }
};
</script>
