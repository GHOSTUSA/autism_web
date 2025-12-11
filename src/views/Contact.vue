<script setup lang="ts">
defineOptions({
  name: 'ContactPage',
})
import FormCompo from '../components/FormCompo.vue'
</script>

<template>
  <div class="page-container">
    <header class="banner-header">
      <a href="/"><img src="/images/logo_white.svg" alt="Logo" class="logo" /></a>
      <CTAComponent link="/contact" text="Rejoindre la liste d’attente" />
    </header>
    <div class="contact">
      <h1>Contactez-nous</h1>
      <p>
        Vous avez des questions ou souhaitez en savoir plus sur notre application ? Remplissez le
        formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
      </p>
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
