<script>
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';

  let active = 'Home';
</script>

<TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
  <Tab {tab}>
    <Label>{tab}</Label>
  </Tab>
</TabBar>
