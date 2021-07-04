<template>
  <div>
    <link
      rel="stylesheet"
      href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"
    />

    <WidgetTemplate library="Element UI">
      <template v-slot:accordion>
        <AccordionWidget />
      </template>

      <template v-slot:alert>
        <AlertWidget />
      </template>

      <template v-slot:alertdialog>
        <AlertDialogWidget />
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

      <template v-slot:dialog>
        <DialogWidget />
      </template>

      <template v-slot:disclosure>
        <DisclosureWidget />
      </template>

      <template v-slot:listbox>
        <ListboxWidget />
      </template>

      <template v-slot:menu>
        <MenuWidget />
      </template>

      <template v-slot:menubutton>
        <MenuWidget />
      </template>

      <template v-slot:radiogroup>
        <RadioGroupWidget />
      </template>

      <template v-slot:slider>
        <SliderWidget />
      </template>

      <template v-slot:multithumbslider>
        <MultiThumbSlider />
      </template>

      <template v-slot:spinbutton>
        <SpinbuttonWidget />
      </template>

      <template v-slot:table>
        <TableWidget />
      </template>

      <template v-slot:tabs>
        <TabsWidget />
      </template>

      <template v-slot:tooltip>
        <TooltipWidget />
      </template>

      <template v-slot:treeview>
        <TreeViewWidget />
      </template>

      <template v-slot:feed>
        <FeedWidget />
      </template>
    </WidgetTemplate>
  </div>
</template>

<script lang="ts">
// Note:
// - Vuetify not used - not possible to use in the same projects with other libraries
// - overall some libs allow to put any html attribute onto the widget including aria attributes, however they dont come with the set by default

import Vue from 'vue';

import WidgetTemplate from '../components/WidgetTemplate.vue';

import AccordionWidget from '../components/ElementUI/AccordionWidget.vue';
import AlertWidget from '../components/ElementUI/AlertWidget.vue';
import AlertDialogWidget from '../components/ElementUI/AlertDialogWidget.vue';
import BreadcrumbsWidget from '../components/ElementUI/BreadcrumbsWidget.vue';
import ButtonWidget from '../components/ElementUI/ButtonWidget.vue';
import CarouselWidget from '../components/ElementUI/CarouselWidget.vue';
import CheckboxWidget from '../components/ElementUI/CheckboxWidget.vue';
import ComboboxWidget from '../components/ElementUI/ComboboxWidget.vue';
import DialogWidget from '../components/ElementUI/DialogWidget.vue';
import DisclosureWidget from '../components/ElementUI/DisclosureWidget.vue';
import ListboxWidget from '../components/ElementUI/ListboxWidget.vue';
import MenuWidget from '../components/ElementUI/MenuWidget.vue';
import RadioGroupWidget from '../components/ElementUI/RadioGroupWidget.vue';
import SliderWidget from '../components/ElementUI/SliderWidget.vue';
import MultiThumbSlider from '../components/ElementUI/MultiThumbSlider.vue';
import SpinbuttonWidget from '../components/ElementUI/SpinbuttonWidget.vue';
import TableWidget from '../components/ElementUI/TableWidget.vue';
import TabsWidget from '../components/ElementUI/TabsWidget.vue';
import TooltipWidget from '../components/ElementUI/TooltipWidget.vue';
import TreeViewWidget from '../components/ElementUI/TreeWidget.vue';
import FeedWidget from '../components/ElementUI/FeedWidget.vue';

export default Vue.extend({
  components: {
    WidgetTemplate,
    AccordionWidget,
    AlertWidget,
    AlertDialogWidget,
    BreadcrumbsWidget,
    ButtonWidget,
    CarouselWidget,
    CheckboxWidget,
    ComboboxWidget,
    DialogWidget,
    DisclosureWidget,
    ListboxWidget,
    MenuWidget,
    RadioGroupWidget,
    SliderWidget,
    MultiThumbSlider,
    SpinbuttonWidget,
    TableWidget,
    TabsWidget,
    TooltipWidget,
    TreeViewWidget,
    FeedWidget
  }
});
</script>
