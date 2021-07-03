<template>
  <div>
    <Collapse>
      <CollapsePanel header="Disclosure">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </CollapsePanel>
    </Collapse>
  </div>
</template>

<script>
import { Collapse } from 'ant-design-vue';

export default {
  components: { Collapse, CollapsePanel: Collapse.Panel }
};
</script>
