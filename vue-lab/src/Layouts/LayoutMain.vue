<template>
  <!-- 将 router-view 放在最外层 -->
  <router-view />
  <component :is="curLayout">
    <!-- 正文部分 -->
    <div class="content">
      <h2>This is Level {{ level }}!</h2>
    </div>

    <!-- 控制区域 -->
    <div class="container">
      <!-- 进入下一个层级的链接：`Go to Level X` -->
      <router-link :to="`/level-${parseInt(level) + 1}`" v-if="parseInt(level) < 4">
        Go to Level {{ parseInt(level) + 1 }}
      </router-link>

      <!-- 切换边框风格的按钮 -->
      <button @click="switchLayout">Switch Layout</button>
    </div>

    <!-- 递归渲染下一层级 -->
    <LayoutMain v-if="level + 1 < currentLevel" :level="parseInt(level) + 1" />
  </component>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import MarginSolid from './MarginSolid.vue';
import MarginDashed from './MarginDashed.vue';

const route = useRoute();
const currentLevel = computed(() => parseInt(route.params.level) || 0);

const props = defineProps({
  level: {
    type: Number,
    default: 0
  }
});

const isDashed = ref(props.level === 0);

const switchLayout = () => {
  isDashed.value = !isDashed.value;
};

const curLayout = computed(() => (isDashed.value ? MarginDashed : MarginSolid));

watch(currentLevel, () => {
  isDashed.value = props.level === 0; 
});
</script>
