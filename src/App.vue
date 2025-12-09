<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { RouterView } from 'vue-router'
import FormulaireComponent from './components/FormulaireComponent.vue'
import TitreComponent from './components/TitreComponent.vue'
import ContenuComponent from './components/ContenuComponent.vue'
import FormCompo from './components/FormCompo.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  </header>

  <FormulaireComponent />
  <FormCompo />
  <TitreComponent />
  <ContenuComponent />
  <RouterView />
</template>

<style scoped></style>
