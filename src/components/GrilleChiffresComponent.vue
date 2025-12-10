<script lang="ts">
import ChiffresComponent from './ChiffresComponent.vue'
import type { ChiffresData } from '../types/types'
import type { PropType } from 'vue'

export default {
  name: 'GrilleChiffresComponent',
  components: {
    ChiffresComponent,
  },
  props: {
    data: {
      type: Array as PropType<ChiffresData[]>,
      required: true,
    },
  },
}
</script>

<template>
  <div class="grille">
    <ChiffresComponent
      v-for="(item, index) in data"
      :key="index"
      :chiffres="item.chiffres"
      :suffixe="item.suffixe"
    />
  </div>
</template>

<style scoped>
.grille {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px;
  justify-content: space-around;
  align-items: center;
}
.grille > * {
  height: 100%;
}
</style>
