<template>
  <component :is="curLayout">
    <div class="content">
      <h2>This is Level {{ level }}!</h2>
    </div>
    <div class="container">
      <router-link
        :to="`/level-${level + 1}`"
        v-if="level < 4 && level === currentLevel - 1"
      >
        Go to Level {{ level + 1 }}
      </router-link>
      <button @click="switchLayout">Switch Layout</button>
    </div>
    <LayoutMain
      v-if="level < currentLevel - 1"
      :level="level + 1"
    />
  </component>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MarginSolid from './MarginSolid.vue';
import MarginDashed from './MarginDashed.vue';

const router = useRouter();
const route = useRoute();
const currentLevel = computed(() => parseInt(route.params.level) || 0);

const props = defineProps({
  level: {
    type: Number,
    default: 0,
  },
});

const isDashed = ref(props.level === 0);

const switchLayout = () => {
  isDashed.value = !isDashed.value;
};

const curLayout = computed(() =>
  isDashed.value ? MarginDashed : MarginSolid
);

// 在组件挂载后判断是否需要跳转
onMounted(() => {
  if (props.level >= currentLevel.value) {
    router.push(`/level-${props.level}`);
  }
});
</script>