<template>
  <Carousel height="150px" width="400px" arrow="always">
    <CarouselItem v-for="item in 4" :key="item">
      <h3 class="small">{{ item }}</h3>
    </CarouselItem>
  </Carousel>
</template>

<script>
import { CarouselItem, Carousel } from 'element-ui';

export default {
  components: { CarouselItem, Carousel }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
