<script lang="ts">
export default {
  name: 'ContactPage',
}
import FormCompo from './components/FormCompo.vue'
</script>

<template>
  <div class="Contact">
    <h1>Contactez-nous</h1>
    <p>
      Vous avez des questions ou souhaitez en savoir plus sur notre application ? Remplissez le
      formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
    </p>
    <FormCompo />
  </div>
</template>

<style scoped>
.Contact {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
.Contact h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}
.Contact p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
</style>
