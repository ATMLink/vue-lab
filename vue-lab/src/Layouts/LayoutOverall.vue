<template>
  <div class="layout-overall">
    <div class="navbar">
      <router-link :to="{ name: 'Level', params: { level: 0 } }">
        Home
      </router-link>
      <span v-for="n in currentLevel" :key="n">
        >
        <router-link :to="{ name: 'Level', params: { level: n } }">
          Level {{ n }}
        </router-link>
      </span>
    </div>
    <router-view/> <div class="main-content">
      <router-view /> 
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentLevel = computed(() => parseInt(route.params.level) || 0);
</script>