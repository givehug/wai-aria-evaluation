<template>
  <Breadcrumb>
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem><a href="">Application Center</a></BreadcrumbItem>
    <BreadcrumbItem><a href="">Application List</a></BreadcrumbItem>
    <BreadcrumbItem>An Application</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
import { Breadcrumb } from 'ant-design-vue';

export default {
  components: { Breadcrumb, BreadcrumbItem: Breadcrumb.Item }
};
</script>
