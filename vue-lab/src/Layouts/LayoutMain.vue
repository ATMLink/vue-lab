<template>
  <component :is="curLayout">
    <!-- 正文部分 -->
    <div class="text">Level {{ level }}</div>

    <!-- 控制区域 -->
    <div class="container">
      <a :href="`#/level${level + 1}`" @click="$emit('updateNavigation', level + 1)">Go to Level {{ level + 1 }}</a>
      <button @click="switchLayout">Switch Layout</button>
    </div>

    <!-- 递归调用自身，生成下一级矩形框 -->
    <template v-if="level < 4">
      <LayoutMain :level="level + 1" />
    </template>
  </component>
</template>

<script setup>
import { ref, computed } from 'vue'
import { inject } from 'vue'

const level = ref(1)
const curLayout = ref('MarginSolid')

// 注入全局事件
const emitter = inject('emitter')

const switchLayout = () => {
  curLayout.value = curLayout.value === 'MarginSolid' ? 'MarginDashed' : 'MarginSolid'
}

// 触发全局事件
const updateNavigation = (level) => {
  emitter.emit('updateNavigation', level)
}

// 监听全局事件
emitter.on('updateNavigation', updateNavigation)
</script>