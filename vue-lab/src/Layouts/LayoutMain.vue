<template>
  <component :is="curLayout">
    <!-- 正文部分 -->
    <div class="text">Level {{ level }}</div>

    <!-- 控制区域 -->
    <div class="container">
      <a :href="`#/level${level + 1}`" @click="updateNavigation">Go to Level {{ level + 1 }}</a>
      <button @click="switchLayout">Switch Layout</button>
    </div>

    <!-- 用于显示下一个嵌套矩形框的占位符 -->
    <router-view v-if="level < 4" /> 
  </component>
</template>

<script setup>
import { ref, computed } from 'vue'

const level = ref(1)
const curLayout = ref('MarginSolid')

const switchLayout = () => {
  curLayout.value = curLayout.value === 'MarginSolid' ? 'MarginDashed' : 'MarginSolid'
}

const updateNavigation = () => {
  // 不用手动触发事件，直接跳转路由
  // 路由跳转会自动更新 `LayoutOverall.vue` 中的导航条
}
</script>