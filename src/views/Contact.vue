<script setup lang="ts">
defineOptions({
  name: 'ContactPage',
})
import FormCompo from '../components/FormCompo.vue'
import GrilleIconComponent from '../components/GrilleIconComponent.vue'
</script>

<template>
  <div class="page-container">
    <header class="banner-header">
      <a href="/"><img src="/images/logo_white.svg" alt="Logo" class="logo" /></a>
      <CTAComponent link="/contact" text="Rejoindre la liste d’attente" />
    </header>
    <div class="contact">
      <h1>Bienvenue dans la communauté des parents pionniers !</h1>
      <p>
        Inscrivez votre email pour recevoir des mises à jour exclusives, des aperçus du produit et
        un accès anticipé à la version bêta.
      </p>

      <GrilleIconComponent
        :data="[
          { url: '/images/clock.svg', text: 'Accès anticipé à la version bêta' },
          { url: '/images/tips.svg', text: 'Contenus exclusifs et conseils pratiques' },
          { url: '/images/badge.svg', text: 'Influencez le développement de l’application' },
        ]"
        fonctionnalites="Pourquoi nous rejoindre ?"
      />
      <FormCompo />
    </div>
    <footer class="footer">
      <img src="/images/logo_white.svg" alt="Logo" class="logo-footer" />
    </footer>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

footer.footer {
  text-align: center;
  padding: 10px 0;
  margin-top: auto;
}

.contact {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  gap: 20px;
  display: flex;
  flex-direction: column;
}

iframe button:hover {
  background-color: var(--blue);
}
</style>
