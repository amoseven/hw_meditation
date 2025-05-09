<script setup lang="ts">

import IconIn4 from '@/components/icons/IconIn4.vue'
import IconPanel from '@/components/IconPanel.vue'
import IconIn1 from '@/components/icons/IconIn1.vue'
import IconIn2 from '@/components/icons/IconIn2.vue'
import IconIn3 from '@/components/icons/IconIn3.vue'
</script>

<template>
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
</template>

<style scoped>

</style>
