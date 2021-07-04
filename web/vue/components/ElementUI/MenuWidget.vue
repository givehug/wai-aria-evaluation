<template>
  <Menu :default-active="'1'" class="Menu-demo" mode="horizontal">
    <MenuItem index="1">Processing Center</MenuItem>
    <Submenu index="2">
      <template slot="title">Workspace</template>
      <MenuItem index="2-1">item one</MenuItem>
      <MenuItem index="2-2">item two</MenuItem>
      <MenuItem index="2-3">item three</MenuItem>
      <Submenu index="2-4">
        <template slot="title">item four</template>
        <MenuItem index="2-4-1">item one</MenuItem>
        <MenuItem index="2-4-2">item two</MenuItem>
        <MenuItem index="2-4-3">item three</MenuItem>
      </Submenu>
    </Submenu>
    <MenuItem index="3" disabled>Info</MenuItem>
    <MenuItem index="4"
      ><a href="https://www.ele.me" target="_blank">Orders</a></MenuItem
    >
  </Menu>
</template>

<script>
import { Menu, MenuItem, Submenu } from 'element-ui';

export default {
  components: { Menu, MenuItem, Submenu }
};
</script>
