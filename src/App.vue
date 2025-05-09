<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
import ProfileInfo from '@/components/ProfileInfo.vue'
import MainNavigation from '@/components/MainNavigation.vue'
import MeditationCard from '@/components/MeditationCard.vue'
import { onMounted, ref } from 'vue'
import { useMeditationStore } from '@/stores/meditations.store.ts'

const meditationStore = useMeditationStore();
onMounted(() => {
  meditationStore.fetchMeditations()
})

</script>

<template>
  <div class="container">
    <header>
      <div class="header">
        <IconLogo />
        <MainNavigation />
      </div>
    </header>

    <main>
      <ProfileInfo />
      <div class="cards-list">
        <MeditationCard v-for="card in meditationStore.meditations" :key="card.ID" v-bind="card"
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

main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

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
