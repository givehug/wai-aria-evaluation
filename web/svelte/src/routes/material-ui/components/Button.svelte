<script>
  import Button, { Label } from '@smui/button';
</script>

<Button
  on:click={() => {
    console.log('click');
  }}
  variant="raised"
>
  <Label>Raised</Label>
</Button>
<Button disabled variant="unelevated">
  <Label>Unelevated</Label>
</Button>
