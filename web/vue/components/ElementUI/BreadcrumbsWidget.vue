<template>
  <Breadcrumb separator="/">
    <BreadcrumbItem :to="{ path: '/' }">homepage</BreadcrumbItem>
    <BreadcrumbItem><a href="/">promotion management</a></BreadcrumbItem>
    <BreadcrumbItem>promotion list</BreadcrumbItem>
    <BreadcrumbItem>promotion detail</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from 'element-ui';

export default {
  components: { Breadcrumb, BreadcrumbItem }
};
</script>
