<script>
  import WidgetTemplate from '../../components/WidgetTempalte.svelte';
  import AlertDialog from './components/AlertDialog.svelte';
  import Dialog from './components/Dialog.svelte';
  import Button from './components/Button.svelte';
  import Checkbox from './components/Checkbox.svelte';
  import Listbox from './components/Listbox.svelte';
  import Menu from './components/Menu.svelte';
  import RadioGroup from './components/RadioGroup.svelte';
  import Slider from './components/Slider.svelte';
  import MultithumbSlider from './components/MultithumbSlider.svelte';
  import Toolbar from './components/Toolbar.svelte';
  import Table from './components/Table.svelte';
  import Tabs from './components/Tabs.svelte';
  import Tooltip from './components/Tooltip.svelte';
</script>

<svelte:head>
  <title>Material UI</title>
</svelte:head>

<div class="container">
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/svelte-material-ui@4.0.0/bare.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />

  <WidgetTemplate library="Material UI">
    <div slot="alertdialog"><AlertDialog /></div>

    <div slot="button"><Button /></div>

    <div slot="checkbox"><Checkbox /></div>

    <div slot="dialog"><Dialog /></div>

    <div slot="listbox"><Listbox /></div>

    <div slot="menu"><Menu /></div>

    <div slot="menubutton"><Menu /></div>

    <div slot="radiogroup"><RadioGroup /></div>

    <div slot="slider"><Slider /></div>

    <div slot="multithumbslider"><MultithumbSlider /></div>

    <div slot="toolbar"><Toolbar /></div>

    <div slot="table"><Table /></div>

    <div slot="tabs"><Tabs /></div>

    <div slot="tooltip"><Tooltip /></div>

    <div slot="treeview">not available</div>
  </WidgetTemplate>
</div>
