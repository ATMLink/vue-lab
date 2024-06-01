<template>
  <div class="navigation">
    {{ navigation.join(' > ') }}
  </div>
  <div class="main">
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const navigation = ref(['Home']);

const updateNavigation = (newLevel) => {
  navigation.value.push(newLevel);
};
</script>