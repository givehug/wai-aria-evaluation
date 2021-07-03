<template>
  <Tabs default-active-key="1" @change="callback">
    <TabPane key="1" tab="Tab 1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane key="2" tab="Tab 2" force-render>
      Content of Tab Pane 2
    </TabPane>
    <TabPane key="3" tab="Tab 3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
</template>

<script>
import { Tabs } from 'ant-design-vue';

export default {
  components: {
    Tabs,
    TabPane: Tabs.TabPane
  },
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    }
  }
};
</script>
