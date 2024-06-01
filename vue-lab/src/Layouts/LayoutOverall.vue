<template>
  <div class="layout-overall">
    <!-- 导航条 -->
    <div class="navbar">
      <router-link v-for="(item, index) in breadcrumbs" :key="index" :to="item.path">
        {{ item.name }}
        <span v-if="index < breadcrumbs.length - 1"> > </span>
      </router-link>
    </div>

    <LayoutMain :navigationLevels="navigationLevels" :initialDashed="true" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import LayoutMain from './LayoutMain.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const navigationLevels = ref([1]); // 导航栏初始层级

const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter(p => p);
  const result = [{ name: 'Home', path: '/' }];

  // 使用 for 循环，确保每个层级都被正确添加到导航栏
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    const name = path === '' ? 'Home' : `Level ${i + 1}`;
    result.push({ name, path: `/${path}` }); 
  }

  return result;
});
</script>

<style>
.layout-overall {
  border: 2px dashed blue; /* 外层蓝色虚线框 */
  padding: 20px;
}

.navbar {
  margin-bottom: 20px;
}
</style>