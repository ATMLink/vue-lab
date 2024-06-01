<template>
  <component :is="curLayout">
    <!-- 正文部分 -->
    <div class="content">
      <h2 v-if="level === 0">Welcome Home!</h2>
      <h2 v-else>This is Level {{ level }}!</h2>
    </div>

    <!-- 控制区域 -->
    <div class="container">
      <router-link v-if="level < 4" :to="nextLevelPath">Go to Level {{ level + 1 }}</router-link>
      <button @click="switchLayout">Switch Layout</button>
    </div>

    <!-- 用于显示下一个嵌套矩形框的占位符 -->
    <router-view />
  </component>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import MarginSolid from './MarginSolid.vue';
import MarginDashed from './MarginDashed.vue';

const props = defineProps({
  level: {
    type: Number,
    default: 0,
  },
});

const route = useRoute();
const isDashed = ref(props.level === 0);

const switchLayout = () => {
  isDashed.value = !isDashed.value;
};

const curLayout = computed(() => (isDashed.value ? MarginDashed : MarginSolid));

const nextLevelPath = computed(() => {
  if (props.level === 0) {
    return `/level-1`;
  }
  return `${route.path}/level-${props.level + 1}`;
});
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
