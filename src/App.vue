<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
import IconIn1 from '@/components/icons/IconIn1.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import IconChart from '@/components/icons/IconChart.vue'
import IconExit from '@/components/icons/IconExit.vue'
import IconIn2 from '@/components/icons/IconIn2.vue'
import IconIn3 from '@/components/icons/IconIn3.vue'
import IconIn4 from '@/components/icons/IconIn4.vue'
import IconPanel from '@/components/IconPanel.vue'
</script>

<template>
  <div class="container">
    <header>
      <div class="header">
        <IconLogo />
        <nav style="display: flex; align-items: center; gap: 55px">
          <div class="menu-item">
            <IconPlay />
            Медитация
          </div>
          <div class="menu-item" style="border-left: 1px; border-right: 1px; border-color: #3a5051">
            <IconChart />
            Статистика
          </div>
          <div class="menu-item">
            <IconExit />
            Выход
          </div>
        </nav>
      </div>
    </header>

    <main>
      <div class="profile-info">
        <img
          src="/avatar.png"
          alt=""
          style="width: 129px; height: 129px; border-radius: 100%; background-size: contain"
        />
        <h2>Добро пожаловать, Наталья!</h2>
        <p class="text-secondary">Как вы сегодня себя чувствуете?</p>
        <div class="icon-list">
          <IconPanel name="Спокойно">
            <IconIn1 />
          </IconPanel>
          <IconPanel name="Расслабленно">
            <IconIn2 />
          </IconPanel>
          <IconPanel name="Фокусировано">
            <IconIn3 />
          </IconPanel>
          <IconPanel name="Тревожно">
            <IconIn4 />
          </IconPanel>
        </div>
      </div>
      <div class="cards-list"></div>
    </main>
  </div>
</template>

<style scoped>
.container {
  width: 1280px;
  margin: 5px auto 0 auto;
  border: 1px solid #fff;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  padding-top: 20px;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  margin-bottom: 50px;
}

.text-secondary {
  font-family: var(--font-name-secondary);
}

.icon-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5px;
  max-width: 325px;
}
</style>
