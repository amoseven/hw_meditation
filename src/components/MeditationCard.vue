<script setup lang="ts">

import type { Meditation } from '@/interfaces.ts'

const { title, duration_min, description } = defineProps<Meditation>()
</script>

<template>
  <div class="card">
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="card-footer">
      <button>Начать</button>
      <p>{{ duration_min }} мин</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  width: 340px;
  height: 170px;
  background: var(--color-bg-panel);
  padding: 20px 30px;
  color: var(--color-text-inverted);
  border-radius: 20px;
}

.card-content {
  h3 {
    font-weight: 500;
    font-size: 25px;
  }

  p {
    font-weight: 500;
    font-size: 15px;
    font-family: var(--font-name-secondary),sans-serif;;
  }
}

.card-footer {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  font-family: var(--font-name-secondary),sans-serif;;
}
</style>
