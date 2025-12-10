<script lang="ts">
import CTAComponent from './CTAComponent.vue'
export default {
  name: 'TexteComponent',
  components: {
    CTAComponent,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    ctaLink: {
      type: String,
      required: true,
    },
    ctaText: {
      type: String,
      required: true,
    },
  },
}
</script>
<template>
  <div class="TexteComponent">
    <h2>{{ title }}</h2>
    <div>
      {{ text }}
    </div>
    <CTAComponent :link="ctaLink" :text="ctaText" />
  </div>
</template>
<style scoped>
.TexteComponent {
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: flex-start;
  gap: 30px;
}
</style>
