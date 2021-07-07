<script>
  import Select, { Option } from '@smui/select';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

  let value = 'Orange';
</script>

<div class="columns margins" style="justify-content: flex-start;">
  <Select bind:value label="Select Menu">
    {#each fruits as fruit}
      <Option value={fruit}>{fruit}</Option>
    {/each}
  </Select>
</div>
