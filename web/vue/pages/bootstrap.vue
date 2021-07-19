<template>
  <WidgetTemplate library="Bootstrap Vue">
    <template v-slot:accordion>
      <AccordionWidget />
    </template>

    <template v-slot:alert>
      <AlertWidget />
    </template>

    <template v-slot:alertdialog>
      <DialogWidget />
    </template>

    <template v-slot:button>
      <ButtonWidget />
    </template>

    <template v-slot:dialog>
      <DialogWidget />
    </template>

    <template v-slot:breadcrumbs>
      <BreadcrumbWidget />
    </template>

    <template v-slot:checkbox>
      <CheckboxWidget />
    </template>

    <template v-slot:carousel>
      <CarouselWidget />
    </template>

    <template v-slot:disclosure>
      <DisclosureWidget />
    </template>

    <template v-slot:link>
      - renders standard html a href element
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

    <template v-slot:spinbutton>
      <SpinbuttonWidget />
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
  </WidgetTemplate>
</template>

<script lang="ts">
import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import WidgetTemplate from '../components/WidgetTemplate.vue';
import AccordionWidget from '../components/Bootstrap/AccordionWidget.vue';
import AlertWidget from '../components/Bootstrap/AlertWidget.vue';
import DialogWidget from '../components/Bootstrap/DialogWidget.vue';
import BreadcrumbWidget from '../components/Bootstrap/BreadcrumbWidget.vue';
import CheckboxWidget from '../components/Bootstrap/CheckboxWidget.vue';
import ButtonWidget from '../components/Bootstrap/ButtonWidget.vue';
import CarouselWidget from '../components/Bootstrap/CarouselWidget.vue';
import DisclosureWidget from '../components/Bootstrap/DisclosureWidget.vue';
import ListboxWidget from '../components/Bootstrap/ListboxWidget.vue';
import MenuWidget from '../components/Bootstrap/MenuWidget.vue';
import RadioGroupWidget from '../components/Bootstrap/RadioGroupWidget.vue';
import TableWidget from '../components/Bootstrap/TableWidget.vue';
import SpinbuttonWidget from '../components/Bootstrap/SpinbuttonWidget.vue';
import TabsWidget from '../components/Bootstrap/TabsWidget.vue';
import ToolbarWidget from '../components/Bootstrap/ToolbarWidget.vue';
import TooltipWidget from '../components/Bootstrap/TooltipWidget.vue';

export default Vue.extend({
  components: {
    WidgetTemplate,
    AlertWidget,
    DialogWidget,
    BreadcrumbWidget,
    CheckboxWidget,
    ButtonWidget,
    CarouselWidget,
    AccordionWidget,
    DisclosureWidget,
    ListboxWidget,
    MenuWidget,
    RadioGroupWidget,
    SpinbuttonWidget,
    TableWidget,
    TabsWidget,
    ToolbarWidget,
    TooltipWidget
  }
});
</script>
