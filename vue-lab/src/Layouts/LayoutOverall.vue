<template>
  <div class="layout-overall">
    <!-- 导航条 -->
    <div class="navbar">
  <router-link :to="{ name: 'Level', params: { level: 0 } }">Home</router-link>
  <span v-for="n in currentLevel" :key="n">  <-- 将 key 放在 span 上
    > <router-link :to="{ name: 'Level', params: { level: n } }">Level {{ n }}</router-link>
  </span>
</div>

    <!-- 主页面占位符 -->
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentLevel = computed(() => parseInt(route.params.level) || 0);
</script>