<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
import ProfileInfo from '@/components/ProfileInfo.vue'
import MainNavigation from '@/components/MainNavigation.vue'
import MeditationCard from '@/components/MeditationCard.vue'
import { ref } from 'vue'

const meditationCards = ref([
  {
    id: 1,
    title: 'Короткая',
    text: 'Базовая медитация на 5 минут для успокоения сознания',
    timer: 5,
    url: '',
  },
  {
    id: 2,
    title: 'Ежедневная',
    text: 'Стандартная медитация для ежедневной осознанности',
    timer: 10,
    url: '',
  },
  {
    id: 3,
    title: 'Для опытных',
    text: 'Полноценная 15-ти минутная сессия для тех, кто хочет очистить сознание',
    timer: 15,
    url: '',
  },
  {
    id: 4,
    title: 'Глубокое погружение',
    text: 'Большая медитация для погружения в себя и снятия стресса',
    timer: 30,
    url: '',
  },
])
</script>

<template>
  <div class="container">
    <header>
      <div class="header">
        <IconLogo />
        <MainNavigation />
      </div>
    </header>

    <main
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
      "
    >
      <ProfileInfo />
      <div class="cards-list">
        <MeditationCard v-for="card in meditationCards" :key="card.id" v-bind="card"
        />
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  width: 1280px;
  margin: 5px auto 0 auto;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin-bottom: 50px;
}

.cards-list {
  width: 700px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
