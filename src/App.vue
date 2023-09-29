<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeaderView from './components/TheHeaderView.vue'
import TheFooterView from './components/TheFooterView.vue'
import TheMainView from './components/TheMainView.vue'
import TheNavView from './components/TheNavView.vue'

</script>

<template>

  <TheHeaderView> </TheHeaderView>
  

<TheNavView></TheNavView>


<TheMainView> </TheMainView>

<RouterView></RouterView>

<TheFooterView> </TheFooterView>

</template>

<style scoped>

</style>
