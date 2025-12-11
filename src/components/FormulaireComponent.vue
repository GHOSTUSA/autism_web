<script lang="ts">
export default {
  name: 'FormulaireComponent',
  data() {
    return {
      form: {
        nom: '',
        prenom: '',
        email: '',
        tel: '',
      },
    }
  },
  methods: {
    submitForm() {
      console.log('Formulaire soumis avec les données :', this.form)
      // Ajoutez ici la logique pour traiter les données du formulaire

      // Réinitialiser le formulaire après soumission (optionnel)
      // this.form = { nom: '', prenom: '', email: '', tel: '' }
    },
  },
}
</script>

<template>
  <div class="formulaire">
    <h2>Formulaire d'inscription</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="nom">Nom: </label>
        <input type="text" id="nom" v-model="form.nom" required />
      </div>

      <div class="form-group">
        <label for="prenom">Prénom:</label>
        <input type="text" id="prenom" v-model="form.prenom" required />
      </div>

      <div class="form-group">
        <label for="email">Email: <span>*</span></label>
        <input type="email" id="email" v-model="form.email" required />
      </div>

      <div class="form-group">
        <label for="tel">Numéro de téléphone:</label>
        <input type="tel" id="tel" v-model="form.tel" required />
      </div>

      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<style scoped>
.formulaire {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
}

h2 {
  margin-bottom: 1.5rem;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: bold;
  color: #555;
}

input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 24px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

button:active {
  transform: scale(0.98);
}
</style>
