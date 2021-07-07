<script>
  import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
  import IconButton from '@smui/icon-button';
  import Button, { Label } from '@smui/button';

  let open;
</script>

<Dialog
  bind:open
  fullscreen
  aria-labelledby="over-fullscreen-title"
  aria-describedby="over-fullscreen-content"
>
  <Header>
    <Title id="over-fullscreen-title">Terms and Conditions</Title>
    <IconButton action="close" class="material-icons">close</IconButton>
  </Header>
  <Content id="over-fullscreen-content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Content>
  <Actions>
    <Button action="reject">
      <Label>Reject</Label>
    </Button>
    <Button action="accept" default>
      <Label>Accept</Label>
    </Button>
  </Actions>
</Dialog>

<Button on:click={() => (open = true)}>
  <Label>Open Alert Dialog</Label>
</Button>
