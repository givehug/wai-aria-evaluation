<template>
  <div class="container">
    <h1>Framework - VueJS</h1>
    <h2>Library - {{ library }}</h2>
    <div class="cards">
      <div class="card" v-for="(widget, index) in widgets" :key="widget">
        <h4 class="cardTitle">
          {{ index + '. ' + widget }}
        </h4>
        <div class="cardContent">
          <slot :name="widget.toLowerCase()">-</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['library'],
  data() {
    return {
      widgets: [
        'Accordion',
        'Alert',
        'AlertDialog',
        'Breadcrumbs',
        'Button',
        'Carousel',
        'Checkbox',
        'Combobox',
        'Dialog',
        'Disclosure',
        'Feed',
        'Link',
        'Listbox',
        'Menu',
        'MenuButton',
        'RadioGroup',
        'Slider',
        'MultiThumbSlider',
        'Spinbutton',
        'Table',
        'Tabs',
        'Toolbar',
        'Tooltip',
        'TreeView',
        'TreeGrid',
        'WindowSplitter'
      ]
    };
  }
});
</script>

<style lang="css" scoped>
.container {
  margin: 0 auto;
  width: '100%';
  max-width: 1200px;
  min-height: 100vh;
  padding: 0 1rem;
  height: 100vh;
}

.cards {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  border: 1px solid #a0a0a0;
  display: flex;
  position: relative;
  min-height: 100px;
  width: 48%;
  margin-bottom: 50px;
  padding: 50px 10px 20px;
}

.cardTitle {
  border-right: 1px solid #a0a0a0;
  border-bottom: 1px solid #a0a0a0;
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
  margin: 0;
}

.cardContent {
  flex: 1;
}
</style>
