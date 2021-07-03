<template>
  <WidgetTemplate library="Ant Design Vue">
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
      <CheckboxGroupWidget />
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
      <MultithumbSliderWidget />
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
  </WidgetTemplate>
</template>

<script lang="ts">
import Vue from 'vue';
import 'ant-design-vue/dist/antd.css';
import WidgetTemplate from '../components/WidgetTemplate.vue';
import AccordionWidget from '../components/AntDesign/AccordionWidget.vue';
import AlertWidget from '../components/AntDesign/AlertWidget.vue';
import AlertDialogWidget from '../components/AntDesign/AlertDialogWidget.vue';
import BreadcrumbsWidget from '../components/AntDesign/BreadcrumbsWidget.vue';
import ButtonWidget from '../components/AntDesign/ButtonWidget.vue';
import CarouselWidget from '../components/AntDesign/CarouselWidget.vue';
import CheckboxGroupWidget from '../components/AntDesign/CheckboxGroupWidget.vue';
import ComboboxWidget from '../components/AntDesign/ComboboxWidget.vue';
import DialogWidget from '../components/AntDesign/DialogWidget.vue';
import DisclosureWidget from '../components/AntDesign/DisclosureWidget.vue';
import ListboxWidget from '../components/AntDesign/ListboxWidget.vue';
import MenuWidget from '../components/AntDesign/MenuWidget.vue';
import RadioGroupWidget from '../components/AntDesign/RadioGroupWidget.vue';
import SliderWidget from '../components/AntDesign/SliderWidget.vue';
import MultithumbSliderWidget from '../components/AntDesign/MultithumbSliderWidget.vue';
import SpinbuttonWidget from '../components/AntDesign/SpinbuttonWidget.vue';
import TableWidget from '../components/AntDesign/TableWidget.vue';
import TabsWidget from '../components/AntDesign/TabsWidget.vue';
import TooltipWidget from '../components/AntDesign/TooltipWidget.vue';
import TreeViewWidget from '../components/AntDesign/TreeViewWidget.vue';

export default Vue.extend({
  components: {
    WidgetTemplate,
    AlertWidget,
    AccordionWidget,
    AlertDialogWidget,
    BreadcrumbsWidget,
    ButtonWidget,
    CarouselWidget,
    CheckboxGroupWidget,
    ComboboxWidget,
    DialogWidget,
    DisclosureWidget,
    ListboxWidget,
    MenuWidget,
    RadioGroupWidget,
    SliderWidget,
    MultithumbSliderWidget,
    SpinbuttonWidget,
    TableWidget,
    TabsWidget,
    TooltipWidget,
    TreeViewWidget
  }
});
</script>
