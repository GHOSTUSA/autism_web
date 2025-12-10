<script lang="ts">
export default {
  name: 'ChiffresComponent',
  props: {
    chiffres: {
      type: String,
      required: true,
    },
    suffixe: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="chiffresCles">
    <p class="chiffres">{{ chiffres }}</p>
    <p class="text">{{ suffixe }}</p>
  </div>
</template>

<style scoped>
.chiffresCles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: var(--blue);
  padding: 20px;
  border-radius: 10px;
}

.chiffres {
  font-size: 35px;
  font-weight: bold;
}
.text {
  text-align: center;
}
</style>
