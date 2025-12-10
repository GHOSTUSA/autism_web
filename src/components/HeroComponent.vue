<script lang="ts">
export default {
  name: 'HeroComponent',
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tagline: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="Hero" :style="{ backgroundImage: `url(${imageUrl})` }">
    <div class="contenu">
      <h1>{{ title }}</h1>
      <div>
        {{ tagline }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.Hero {
  display: flex;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 270px;
  align-items: center;
  justify-content: center;
  position: relative;
}
.Hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--white);
  opacity: 0.5;
  z-index: 1;
}
.contenu {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  z-index: 3;
  padding: 0 20px;
}
@media screen and (min-width: 992px) {
  .contenu {
    padding: 0;
  }
}
</style>
