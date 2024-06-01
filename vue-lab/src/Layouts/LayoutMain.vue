<template>
  <component :is="curLayout">
    <div class="content">
      Level {{ level }}
    </div>
    <div class="container">
      <a @click="goToNextLevel" href="#">Go to Level {{ level + 1 }}</a>
      <button @click="switchLayout">Switch Layout</button>
    </div>
    <LayoutMain v-if="showNextLevel" :level="level + 1" @updateNavigation="updateNavigation" />
  </component>
</template>

<script setup>
import { ref } from 'vue';

const level = defineProps({
  level: {
    type: Number,
    default: 1
  }
});

const showNextLevel = ref(false);
const curLayout = ref('MarginSolid');

const goToNextLevel = () => {
  showNextLevel.value = true;
  emit('updateNavigation', `Level ${level + 1}`);
};

const switchLayout = () => {
  curLayout.value = curLayout.value === 'MarginSolid' ? 'MarginDashed' : 'MarginSolid';
};

const emit = defineEmits(['updateNavigation']);
</script>