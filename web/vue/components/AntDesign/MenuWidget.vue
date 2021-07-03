<template>
  <div>
    <Menu v-model="current" mode="horizontal">
      <MenuItem key="mail"> <Icon type="mail" />Navigation One </MenuItem>
      <Submenu>
        <span slot="title" class="submenu-title-wrapper"
          ><Icon type="setting" />Navigation Three - Submenu</span
        >
        <MenuGroup title="Item 1">
          <MenuItem key="setting:1">
            Option 1
          </MenuItem>
          <MenuItem key="setting:2">
            Option 2
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="Item 2">
          <MenuItem key="setting:3">
            Option 3
          </MenuItem>
          <MenuItem key="setting:4">
            Option 4
          </MenuItem>
        </MenuGroup>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
import { Menu, Icon } from 'ant-design-vue';

export default {
  components: {
    Menu,
    MenuItem: Menu.Item,
    MenuGroup: Menu.ItemGroup,
    Submenu: Menu.SubMenu,
    Icon
  },
  data() {
    return {
      current: ['mail']
    };
  }
};
</script>
