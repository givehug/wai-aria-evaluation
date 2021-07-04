<template>
  <Tabs v-model="activeName">
    <TabPane label="User" name="first">User</TabPane>
    <TabPane label="Config" name="second">Config</TabPane>
    <TabPane label="Role" name="third">Role</TabPane>
    <TabPane label="Task" name="fourth">Task</TabPane>
  </Tabs>
</template>

<script>
import { Tabs, TabPane } from 'element-ui';

export default {
  components: { Tabs, TabPane },
  data() {
    return {
      activeName: 'first'
    };
  }
};
</script>
