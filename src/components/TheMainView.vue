<script setup>

import { ref, onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const API_ENDPOINT = 'https://metallo.ew.r.appspot.com/monsters'
const page = ref(1) 
const limit = ref(40) 
const allMonsters = ref([])
const isLoaded = ref(false)
const router = useRouter()


const apiUrl = computed(() => {
  return `${API_ENDPOINT}?page=${page.value}&limit=${limit.value}`
})



onBeforeMount(async () => {
  try {
    const response = await axios.get(apiUrl.value)
    if (response.status === 200) {
      allMonsters.value = response.data
      isLoaded.value = true
      console.log(response.data)
    } else {
      console.error('Erreur lors de la récupération des monstres.')
    }
  } catch (error) {
    console.error('Une erreur est produite lors de la récupération des monstres :', error)
  }
})

</script>




<template>
    <section data-bs-version="5.1" class="features05 cid-sRQcud4Jjb" id="features05-2">
      <div class="container-fluid">
        <div class="wrapper">
          <div class="row title-section">
            <h2 class="mbr-section-title mbr-fonts-style display-2"><strong>Monsters</strong></h2>
          </div>
          <div class="row justify-content-center">
            <div v-for="monster in allMonsters" :key="monster._id" class="col-4 col-md-2 mb-2 mb-md-5">
              <div class="card">
                <img :src="monster.image" alt="" class="card-img-top h-100">
                <div class="card-body">
                  <h3 class="card-title mbr-section-subtitle mbr-fonts-style"><strong>{{ monster.name }}</strong></h3>
                  <ul class="list mbr-fonts-style display-7">
                    <li>[Drops 1]</li>
                    <li>[Drops 2]</li>
                    <li>[Drops 3]</li>
                  </ul>
                  <div class="mbr-section-btn">
                    <router-link :to="{ name: 'detail', params: { id: monster._id } }" class="justify-content-center btn btn-primary display-4">VOIR</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>


<style scoped>

</style>