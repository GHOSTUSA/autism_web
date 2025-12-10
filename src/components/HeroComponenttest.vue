<template>
  <div class="Hero">
    <div class="contenu">
      <h1>{{ title }}</h1>
      <div>
        {{ tagline }}
      </div>
    </div>
    <div class="image" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HeroComponentTest',
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

<style scoped>
.Hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 300px;
  background: var(--pink);
  overflow: hidden;
}

.contenu {
  width: 60%;
  padding: 20px;
  color: var(--dark-blue);
  text-align: left;
  background-color: rgba(255, 255, 255, 0.5); /* Transparence par-dessus l'image */
  border-radius: 10px;
}

.image {
  width: 40%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

h1 {
  font-size: 2rem;
  font-family: 'Geoform', sans-serif;
  font-weight: bold;
}

div {
  font-size: 1rem;
  font-family: 'Geoform', sans-serif;
}
</style>
