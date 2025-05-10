<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="login">
      <h1>404</h1>
      <router-link to="/main">На главную</router-link>
    </div>
  </div>


</template>

<style scoped>
.container {
  display: grid;
  place-items: center;
  height: 100vh;
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: #f7f3f0;
    font-size: 120px;
    font-family: var(--font-name-secondary), sans-serif;
  }

  a {
    color: #F7F3F0;
    font-size: 20px;
    text-decoration: none;
  }
}
</style>
