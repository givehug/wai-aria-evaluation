<template>
  <div>
    <v-btn depressed color="primary" @click="log">
      Primary
    </v-btn>
    <v-btn depressed color="error">
      Error
    </v-btn>
    <v-btn depressed disabled>
      Disabled
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    log() {
      console.log(1);
    }
  }
};
</script>
