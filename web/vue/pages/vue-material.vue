<template>
  <div>
    <!-- <link
      rel="stylesheet"
      href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
    />

    <WidgetTemplate library="Vuetify">
      <template v-slot:alertdialog>
        <AlertDialogWidget />
      </template>

      <template v-slot:button>
        <ButtonWidget />
      </template>
    </WidgetTemplate> -->
  </div>
</template>

<script lang="ts">
// Note:
// this lib does not work correctly with standalone components
// - https://github.com/vuematerial/vue-material/issues/1974

import Vue from 'vue';

// import 'vue-material/dist/vue-material.min.css';
// import 'vue-material/dist/theme/default.css';

import WidgetTemplate from '../components/WidgetTemplate.vue';
// import ButtonWidget from '../components/VueMaterial/ButtonWidget.vue';
// import AlertDialogWidget from '../components/VueMaterial/AlertDialogWidget.vue';

export default Vue.extend({
  components: {
    WidgetTemplate
    // ButtonWidget,
    // AlertDialogWidget
  }
});
</script>
