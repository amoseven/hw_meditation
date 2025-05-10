<script setup lang="ts">
import MeditationCard from '@/components/MeditationCard.vue'
import { useMeditationStore } from '@/stores/meditations.store.ts'
import { onMounted } from 'vue'
import ProfileInfo from '@/components/ProfileInfo.vue'

const meditationStore = useMeditationStore()
onMounted(() => {
  meditationStore.fetchMeditations()
})
</script>

<template>
  <div class="main">
    <ProfileInfo />
    <div class="cards-list">
      <MeditationCard
        v-for="card in meditationStore.meditations"
        :key="card.ID"
        v-bind="card"
        :description="card.description"
        :duration_min="card.duration_min"
        :title="card.title"
      />
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

}
.cards-list {
  width: 700px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
