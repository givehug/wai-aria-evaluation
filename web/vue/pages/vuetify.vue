<template>
  <v-app>
    <WidgetTemplate library="Vuetify">
      <template v-slot:accordion>
        <AccordionWidget />
      </template>

      <template v-slot:alert>
        <AlertWidget />
      </template>

      <template v-slot:dialog>
        <DialogWidget />
      </template>

      <template v-slot:breadcrumbs>
        <BreadcrumbsWidget />
      </template>

      <template v-slot:button>
        <ButtonWidget />
      </template>

      <template v-slot:carousel>
        <CarouselWidget />
      </template>

      <template v-slot:checkbox>
        <CheckboxWidget />
      </template>

      <template v-slot:combobox>
        <ComboboxWidget />
      </template>

      <template v-slot:disclosure>
        <DisclosureWidget />
      </template>

      <template v-slot:feed>
        <FeedWidget />
      </template>

      <template v-slot:listbox>
        <ListboxWidget />
      </template>

      <template v-slot:menu>
        <MenuWidget />
      </template>

      <template v-slot:menubutton>
        <MenuButtonWidget />
      </template>

      <template v-slot:radiogroup>
        <RadioGroupWidget />
      </template>

      <template v-slot:slider>
        <SliderWidget />
      </template>

      <template v-slot:multithumbslider>
        <MultiThumbSliderWidget />
      </template>

      <template v-slot:table>
        <TableWidget />
      </template>

      <template v-slot:tabs>
        <TabsWidget />
      </template>

      <template v-slot:toolbar>
        <ToolbarWidget />
      </template>

      <template v-slot:tooltip>
        <TooltipWidget />
      </template>

      <template v-slot:treeview>
        <TreeViewWidget />
      </template>
    </WidgetTemplate>
  </v-app>
</template>

<script lang="ts">
// Note:
// - requirements for project - node and npm
// - vue libs and components can be added in corresponding directories and then with these commands ... you can build a project

import Vue from 'vue';
import WidgetTemplate from '../components/WidgetTemplate.vue';

import AlertWidget from '../components/Vuetify/AlertWidget.vue';
import DialogWidget from '../components/Vuetify/DialogWidget.vue';
import AccordionWidget from '../components/Vuetify/AccordionWidget.vue';
import BreadcrumbsWidget from '../components/Vuetify/BreadcrumbsWidget.vue';
import ButtonWidget from '../components/Vuetify/ButtonWidget.vue';
import CarouselWidget from '../components/Vuetify/CarouselWidget.vue';
import CheckboxWidget from '../components/Vuetify/CheckboxWidget.vue';
import ComboboxWidget from '../components/Vuetify/ComboboxWidget.vue';
import DisclosureWidget from '../components/Vuetify/DisclosureWidget.vue';
import FeedWidget from '../components/Vuetify/FeedWidget.vue';
import ListboxWidget from '../components/Vuetify/ListboxWidget.vue';
import MenuWidget from '../components/Vuetify/MenuWidget.vue';
import MenuButtonWidget from '../components/Vuetify/MenuButtonWidget.vue';
import RadioGroupWidget from '../components/Vuetify/RadioGroupWidget.vue';
import SliderWidget from '../components/Vuetify/SliderWidget.vue';
import MultiThumbSliderWidget from '../components/Vuetify/MultiThumbSliderWidget.vue';
import TableWidget from '../components/Vuetify/TableWidget.vue';
import TabsWidget from '../components/Vuetify/TabsWidget.vue';
import ToolbarWidget from '../components/Vuetify/ToolbarWidget.vue';
import TooltipWidget from '../components/Vuetify/TooltipWidget.vue';
import TreeViewWidget from '../components/Vuetify/TreeViewWidget.vue';

export default Vue.extend({
  components: {
    WidgetTemplate,
    AlertWidget,
    DialogWidget,
    AccordionWidget,
    BreadcrumbsWidget,
    ButtonWidget,
    CarouselWidget,
    CheckboxWidget,
    ComboboxWidget,
    DisclosureWidget,
    FeedWidget,
    ListboxWidget,
    MenuWidget,
    MenuButtonWidget,
    RadioGroupWidget,
    SliderWidget,
    MultiThumbSliderWidget,
    TableWidget,
    TabsWidget,
    ToolbarWidget,
    TooltipWidget,
    TreeViewWidget
  }
});
</script>
