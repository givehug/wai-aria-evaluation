<template>
  <div>
    <v-checkbox
      v-model="ex4"
      label="red"
      color="red"
      value="red"
      hide-details
    ></v-checkbox>
    <v-checkbox
      v-model="ex4"
      label="red darken-3"
      color="red darken-3"
      value="red darken-3"
      hide-details
    ></v-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ex4: ['red', 'red darken-3']
    };
  }
};
</script>
