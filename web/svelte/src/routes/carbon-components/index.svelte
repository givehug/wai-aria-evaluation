<script>
  import WidgetTemplate from '../../components/WidgetTempalte.svelte';
  import Accordion from './components/Accordion.svelte';
  import Alert from './components/Alert.svelte';
  import AlertDialog from './components/AlertDialog.svelte';
  import Dialog from './components/Dialog.svelte';
  import Breadcrumbs from './components/Breadcrumbs.svelte';
  import Button from './components/Button.svelte';
  import Checkbox from './components/Checkbox.svelte';
  import Combobox from './components/Combobox.svelte';
  import Disclosure from './components/Disclosure.svelte';
  import Listbox from './components/Listbox.svelte';
  import Menu from './components/Menu.svelte';
  import RadioGroup from './components/RadioGroup.svelte';
  import Slider from './components/Slider.svelte';
  import Table from './components/Table.svelte';
  import Tabs from './components/Tabs.svelte';
  import Tooltip from './components/Tooltip.svelte';
  import TreeView from './components/TreeView.svelte';
</script>

<svelte:head>
  <title>Carbon Components</title>
</svelte:head>

<div class="container">
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/carbon-components-svelte@0.39.0/css/all.css"
  />

  <WidgetTemplate library="Carbon Components">
    <div slot="accordion">
      <Accordion />
    </div>

    <div slot="alert">
      <Alert />
    </div>

    <div slot="alertdialog">
      <AlertDialog />
    </div>

    <div slot="breadcrumbs">
      <Breadcrumbs />
    </div>

    <div slot="button">
      <Button />
    </div>

    <div slot="checkbox">
      <Checkbox />
    </div>

    <div slot="combobox">
      <Combobox />
    </div>

    <div slot="dialog">
      <Dialog />
    </div>

    <div slot="disclosure">
      <Disclosure />
    </div>

    <div slot="link">renders native html link</div>

    <div slot="listbox">
      <Listbox />
    </div>

    <div slot="menu">
      <Menu />
    </div>

    <div slot="menubutton">
      <Menu />
    </div>

    <div slot="radiogroup">
      <RadioGroup />
    </div>

    <div slot="slider">
      <Slider />
    </div>

    <div slot="table">
      <Table />
    </div>

    <div slot="tabs">
      <Tabs />
    </div>

    <div slot="tooltip">
      <Tooltip />
    </div>

    <div slot="treeview">
      <TreeView />
    </div>
  </WidgetTemplate>
</div>
