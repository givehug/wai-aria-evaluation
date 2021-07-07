<script>
  import { RadioButtonGroup, RadioButton } from 'carbon-components-svelte';
</script>

<RadioButtonGroup selected="standard">
  <RadioButton labelText="Free (1 GB)" value="free" />
  <RadioButton labelText="Standard (10 GB)" value="standard" />
  <RadioButton labelText="Pro (128 GB)" value="pro" />
</RadioButtonGroup>
