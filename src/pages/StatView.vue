<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="stat-card" v-for="i in 5" :key="i">
      <h2>{{ 500 }}</h2>
      <p>Минут медитации</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 980px;
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 25px;
}

.stat-card {
  border: 1px solid #f7f3f0;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  padding: 0 30px 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin: 0;
    padding: 0;
    font-family: var(--font-name-primary), sans-serif;
    font-weight: 700;
    font-size: 80px;
    text-align: right;
  }

  p {
    font-family: var(--font-name-secondary), sans-serif;
  }
}
</style>
