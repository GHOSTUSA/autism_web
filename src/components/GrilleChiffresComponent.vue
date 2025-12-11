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
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.grille > * {
  height: 100%;
}

@media (min-width: 768px) {
  .grille {
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    padding: 15px;
    margin-top: 40px;
  }
}

@media (min-width: 1024px) {
  .grille {
    grid-template-columns: repeat(4, 1fr);
    gap: 60px;
    padding: 20px;
  }
}
</style>
