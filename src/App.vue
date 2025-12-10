<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeroComponent from './components/HeroComponent.vue'
import GrilleIconComponent from './components/GrilleIconComponent.vue'
import TexteComponent from './components/TexteComponent.vue'
import GrilleChiffresComponent from './components/GrilleChiffresComponent.vue'
import HeroComponenttest from './components/HeroComponenttest.vue'

const heroImageUrl = '/images/test.png'
const heroTitle = 'Tessa'
const heroTagline =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const texteTitle1 = 'Section 1'
const texteContent1 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
const texteCtaLink1 = 'https://example.com/section1'
const texteCtaText1 = 'En savoir plus'

const grilleData = [
  {
    url: '/images/maison.svg',
    text: 'Icon 1 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
  },
  {
    url: '/images/maison.svg',
    text: 'Icon 2 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
  },
  {
    url: '/images/maison.svg',
    text: 'Icon 3 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
  },
  {
    url: '/images/maison.svg',
    text: 'Icon 4 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
  },
]
const fonctionnalites = 'Fonctionnalités principales de Tessa'

const chiffresData = [
  { chiffres: '100 000', suffixe: 'jeunes autistes de moins de 20 ans' },
  { chiffres: '600 000 ', suffixe: 'adultes autistes' },
  { chiffres: '1/4', suffixe: 'famille n a pas déposer de dossier à la MDPH' },
  { chiffres: '48 %', suffixe: "de parents d'autistes en seuil de difficulté en santé mental" },
]
</script>

<template>
  <HeroComponenttest :imageUrl="heroImageUrl" :title="heroTitle" :tagline="heroTagline" />
  <!-- <HeroComponent :imageUrl="heroImageUrl" :title="heroTitle" :tagline="heroTagline" /> -->
  <div class="contenu_app">
    <TexteComponent
      :title="texteTitle1"
      :text="texteContent1"
      :ctaLink="texteCtaLink1"
      :ctaText="texteCtaText1"
    />
    <GrilleIconComponent :data="grilleData" :fonctionnalites="fonctionnalites" />
  </div>
  <GrilleChiffresComponent :data="chiffresData" />
</template>

<style scoped>
.contenu_app {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.contenu_app .grille {
  background-color: var(--yellow);
  border-radius: 10px;
}
@media screen and (min-width: 992px) {
  .contenu_app {
    flex-direction: row;
  }
  .contenu_app > * {
    width: 50%;
  }
  /* .contenu_app > :first-child {
    width: 40%;
  }
  .contenu_app > :nth-child(2) {
    width: 60%;
  } */
}
</style>
