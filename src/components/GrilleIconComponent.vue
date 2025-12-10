<script lang="ts">
import IconTxtComponent from './IconTxtComponent.vue'
import type { IconData } from '../types/types'
import type { PropType } from 'vue'

export default {
  name: 'GrilleIconComponent',
  components: {
    IconTxtComponent,
  },
  props: {
    data: {
      type: Array as PropType<IconData[]>,
      required: true,
    },
    fonctionnalites: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="grille">
    <h3 class="titre_grille">{{ fonctionnalites }}</h3>
    <div class="grille_icons">
      <IconTxtComponent
        v-for="(item, index) in data"
        :key="index"
        :iconUrl="item.url"
        :text="item.text"
      />
    </div>
  </div>
</template>

<style scoped>
.grille {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0px;
}
.grille_icons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
}
.titre_grille {
  text-align: center;
  font-size: 25px;
  font-weight: 700;
}
</style>
