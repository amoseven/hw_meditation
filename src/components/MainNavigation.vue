<script setup lang="ts">
import IconChart from '@/components/icons/IconChart.vue'
import IconExit from '@/components/icons/IconExit.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
</script>

<template>
  <nav>
    <router-link :to="{ name: 'meditations' }" class="menu-item">
      <IconPlay />
      Медитация
    </router-link>
    <router-link :to="{name: 'stat'}" class="menu-item middle">
      <IconChart />
      Статистика
    </router-link>
    <router-link to="/" class="menu-item">
      <IconExit />
      Выход
    </router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  gap: 55px;
}

a.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-family: var(--font-name-secondary), sans-serif;
  text-decoration: none;
  color: #f7f3f0;
}

.middle {
  border-left: 1px solid #3a5051;
  border-right: 1px solid #3a5051;
}
</style>
