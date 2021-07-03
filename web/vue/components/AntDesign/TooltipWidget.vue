<template>
  <Tooltip>
    <template slot="title">
      prompt text
    </template>
    Tooltip will show when mouse enter.
  </Tooltip>
</template>

<script>
import { Tooltip } from 'ant-design-vue';

export default {
  components: {
    Tooltip
  }
};
</script>
