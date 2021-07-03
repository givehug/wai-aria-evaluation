<template>
  <BDropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
    <BDropdownItem>First Action</BDropdownItem>
    <BDropdownItem>Second Action</BDropdownItem>
    <BDropdownItem>Third Action</BDropdownItem>
    <BDropdownDivider />
    <BDropdownItem active>Active action</BDropdownItem>
    <BDropdownItem disabled>Disabled action</BDropdownItem>
  </BDropdown>
</template>

<script>
import { BDropdownItem, BDropdown, BDropdownDivider } from 'bootstrap-vue';

export default {
  components: { BDropdownItem, BDropdown, BDropdownDivider }
};
</script>
