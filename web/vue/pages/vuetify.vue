<template>
  <div>
    <!-- <WidgetTemplate library="Vuetify">
      <template v-slot:alert>
        <AlertWidget />
      </template>

      <template v-slot:button>
        <ButtonWidget />
      </template>
    </WidgetTemplate> -->
  </div>
</template>

<script lang="ts">
// Note:

import Vue from 'vue';

import WidgetTemplate from '../components/WidgetTemplate.vue';

// import AlertWidget from '../components/Vuetify/AlertWidget.vue';
// import ButtonWidget from '../components/Vuetify/ButtonWidget.vue';

export default Vue.extend({
  components: {
    WidgetTemplate
    // AlertWidget,
    // ButtonWidget
  }
});
</script>
