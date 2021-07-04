<template>
  <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
    <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
  </ul>
</template>

<script lang="ts">
import { InfiniteScroll } from 'element-ui';

export default {
  directives: {
    'infinite-scroll': InfiniteScroll as any
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    load() {
      if ((this as any).count <= 98) {
        (this as any).count += 2;
      }
    }
  }
};
</script>

<style scoped>
.infinite-list {
  width: 100%;
  height: 350px;
  border: 1px solid rebeccapurple;
  list-style: none;
  padding: 0;
}

.infinite-list-item {
  width: 100%;
  background: lightblue;
  padding: 10px 40px;
  text-align: center;
  list-style: none;
  margin-bottom: 20px;
  box-sizing: border-box;
}
</style>
