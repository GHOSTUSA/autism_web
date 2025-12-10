<script lang="ts">
export default {
  name: 'IconTxtComponent',
  props: {
    iconUrl: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="icon-text">
    <img :src="iconUrl" alt="Icone" class="icon" />
    <p class="text">{{ text }}</p>
  </div>
</template>

<style scoped>
.icon-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.icon {
  width: 50px;
  height: 50px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}

.text {
  font-size: 15px;
  font-weight: 600;
  text-align: center;
}
</style>
