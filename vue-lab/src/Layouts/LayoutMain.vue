<template>
  <component :is="curLayout">
    <!-- 正文部分 -->
    <div class="content">
      <h2>This is Level {{ level }}!</h2>
    </div>

    <!-- 控制区域 -->
    <div class="container">
      <router-link v-if="level < 4" :to="`/level${level + 1}`">Go to Level {{ level + 1 }}</router-link>
      <button @click="switchLayout">Switch Layout</button>
    </div>

    <!-- 用于显示下一个嵌套矩形框的占位符 -->
    <router-view v-if="level < 4" />
  </component>
</template>

<script setup>
import { ref, computed } from 'vue';
import MarginSolid from './MarginSolid.vue';
import MarginDashed from './MarginDashed.vue';

const props = defineProps({
  level: {
    type: Number,
    default: 0,
  },
  navigationLevels: {
    type: Array,
    required: true,
  },
  initialDashed: {
    type: Boolean,
    default: false,
  },
});

const level = ref(props.level);
const curLayout = ref(props.initialDashed ? 'MarginDashed' : 'MarginSolid');

const switchLayout = () => {
  curLayout.value = curLayout.value === 'MarginSolid' ? 'MarginDashed' : 'MarginSolid';
};

const updateNavigation = () => {
  // 通过 props 传递数据
  handleNavigationUpdate(level.value + 1);
};

const handleNavigationUpdate = (newLevel) => {
  props.navigationLevels.value.push(newLevel);
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content {
  margin-bottom: 10px;
}
</style>