<script setup lang="ts">
import ProfileIconsList from '@/components/ProfileIconsList.vue'
</script>

<template>
  <div class="profile-info">
    <img src="/avatar.png" alt="" />

    <div class="profile-welcome">
      <h2>Добро пожаловать, Наталья!</h2>
      <p class="text-secondary">Как вы сегодня себя чувствуете?</p>
    </div>

    <div class="icon-list">
      <ProfileIconsList />
    </div>
  </div>
</template>

<style scoped>
.profile-info {
  padding-top: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 45px;

  img {
    width: 129px;
    height: 129px;
    border-radius: 100%;
    background-size: contain;
  }
}

.profile-welcome {
  h2 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .text-secondary {
    font-family: var(--font-name-secondary), sans-serif;
  }
}

.icon-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  max-width: 325px;
}
</style>
