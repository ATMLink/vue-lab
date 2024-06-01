<template>
  <div class="layout-overall">
    <!-- 导航条 -->
    <div class="navbar">
      <router-link v-for="(item, index) in breadcrumbs" :key="index" :to="item.path">
        {{ item.name }}
        <span v-if="index < breadcrumbs.length - 1"> > </span>
      </router-link>
    </div>

    <!-- 嵌套路由视图 -->
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter(p => p);
  const result = [{ name: 'Home', path: '/' }];
  let currentPath = '';

  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    result.push({ name: `Level ${index + 1}`, path: currentPath });
  });

  return result;
});
</script>

<style>
.layout-overall {
  padding: 20px;
  border: 2px dashed blue; /* 外层蓝色虚线框 */
}

.navbar {
  margin-bottom: 20px;
}
</style>
