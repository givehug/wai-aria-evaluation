<template>
  <div>
    <Collapse v-model="activeKey">
      <CollapsePanel key="1" header="This is panel header 1">
        <p>{{ text }}</p>
      </CollapsePanel>
      <CollapsePanel key="2" header="This is panel header 2" :disabled="false">
        <p>{{ text }}</p>
      </CollapsePanel>
      <CollapsePanel key="3" header="This is panel header 3" disabled>
        <p>{{ text }}</p>
      </CollapsePanel>
    </Collapse>
  </div>
</template>

<script>
import { Collapse } from 'ant-design-vue';

export default {
  components: { Collapse, CollapsePanel: Collapse.Panel },
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: ['1']
    };
  }
};
</script>
