<script setup lang="ts">
const { name = 'Текст иконки' } = defineProps<{ name: string }>()
</script>

<template>
  <div class="panel-wrap">
    <div class="panel-logo">
      <slot />
    </div>
    <p class="panel-text">{{ name }}</p>
  </div>
</template>

<style scoped>
.panel-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.panel-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-bg-panel);
  width: 62px;
  height: 65px;
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 10px;
}

.panel-text {
  font-family: var(--font-name-secondary), sans-serif;
  font-size: 12px;
}
</style>
