<script>
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';

  let prominent = false;
  let dense = true;
  let secondaryColor = false;
</script>

<div class="flexy">
  <TopAppBar
    variant="static"
    {prominent}
    {dense}
    color={secondaryColor ? 'secondary' : 'primary'}
  >
    <Row>
      <Section>
        <IconButton class="material-icons">menu</IconButton>
        <Title>Static</Title>
      </Section>
      <Section align="end" toolbar>
        <IconButton class="material-icons" aria-label="Download"
          >file_download</IconButton
        >
        <IconButton class="material-icons" aria-label="Print this page"
          >print</IconButton
        >
        <IconButton class="material-icons" aria-label="Bookmark this page"
          >bookmark</IconButton
        >
      </Section>
    </Row>
  </TopAppBar>
</div>

<style>
  .flexy {
    display: flex;
    flex-wrap: wrap;
  }
</style>
