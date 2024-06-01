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
import { ref, computed, inject } from 'vue'

const navigationLevels = ref([1])

// 注入全局事件
const emitter = inject('emitter')

// 监听全局事件
emitter.on('updateNavigation', (level) => {
  navigationLevels.value.push(level)
})
</script>