<script setup lang="ts">
import IconChart from '@/components/icons/IconChart.vue'
import IconExit from '@/components/icons/IconExit.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
</script>

<template>
  <nav>
    <div class="menu-item">
      <IconPlay />
      Медитация
    </div>
    <div class="menu-item middle">
      <IconChart />
      Статистика
    </div>
    <div class="menu-item">
      <IconExit />
      Выход
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  gap: 55px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-family: var(--font-name-secondary),sans-serif;;
}

.middle {
  border-left: 1px  solid #3a5051;
  border-right: 1px solid #3a5051;
}
</style>
