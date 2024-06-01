<template>
  <div class="layout-overall">
    <!-- 导航条 -->
    <div class="navigation">
      <span v-for="(level, index) in navigationLevels" :key="index">
        Level {{ level }}
        <span v-if="index < navigationLevels.length - 1"> > </span>
      </span>
    </div>

    <!-- 主页面占位符 -->
    <router-view /> 
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const navigationLevels = ref([1])
const router = useRouter()

// 监听路由变化
watch(router.currentRoute, (newRoute) => {
  const pathSegments = newRoute.path.split('/').filter(segment => segment !== '');
  navigationLevels.value = pathSegments.map((segment) => parseInt(segment.slice(5)));
})
</script>