<template>
  <Carousel :after-change="onChange" class="carousel">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
</template>

<script>
import { Carousel } from 'ant-design-vue';

export default {
  components: { Carousel },
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c);
    }
  }
};
</script>

<style scoped>
.carousel {
  width: 400px;
}

.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
