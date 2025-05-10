<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
import MainNavigation from '@/components/MainNavigation.vue'

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
        <RouterView />
    </main>
  </div>
</template>

<style scoped>
.container {
  width: 1250px;
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
</style>
