<script>
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import Button from '@smui/button';
  import { Label } from '@smui/common';

  let clicked = 0;
</script>

<Wrapper>
  <Button on:click={() => clicked++}>
    <Label>Button</Label>
  </Button>
  <Tooltip>Tooltip on a button.</Tooltip>
</Wrapper>
