<script lang="ts">
export default {
  name: 'CTAComponent',
  props: {
    link: {
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
  <a :href="link" class="cta-button">{{ text }}</a>
</template>

<style scoped>
.CTA {
  width: 100%;
  height: 100%;
}
.cta-button {
  padding: 10px 20px;
  background-color: var(--pink);
  color: var(--white);
  text-decoration: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: var(--blue);
}
</style>
