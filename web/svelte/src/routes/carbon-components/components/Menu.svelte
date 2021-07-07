<script>
  import { OverflowMenu, OverflowMenuItem } from 'carbon-components-svelte';
</script>

<OverflowMenu>
  <OverflowMenuItem text="Manage credentials" />
  <OverflowMenuItem
    href="https://cloud.ibm.com/docs/api-gateway/"
    text="API documentation"
  />
  <OverflowMenuItem danger text="Delete service" />
</OverflowMenu>
