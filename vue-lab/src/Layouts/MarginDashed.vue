<template>
  <div class="margin-dashed">
    <slot />
  </div>
</template>

<style scoped>
.margin-dashed {
  border: 2px dashed blue; /* 蓝色虚线边框 */
  padding: 20px;
}
</style>