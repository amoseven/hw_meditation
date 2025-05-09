import { defineStore } from 'pinia'
import { ref } from 'vue'
import { http } from '@/plugins/http.ts'
import type { Meditation } from '@/interfaces.ts'

export const useMeditationStore = defineStore('meditations', () => {
  const meditations = ref<Meditation[]>([])

  type DataMeditation = {
    data: {
      meditations: Meditation[]
    }
  }

  async function fetchMeditations() {
    try {
      const {data } = await http.get<DataMeditation>('/api/meditations');
      meditations.value = data.data.meditations;
    } catch (e) {
      console.log(e)
    }
  }



  return { meditations, fetchMeditations }
})
