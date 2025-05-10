<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="login">
      <h1>Login</h1>
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
  a {
    color: #F7F3F0;
    font-size: 18px;
  }
}
</style>
