<script setup lang="ts">
defineOptions({
  name: 'HomePage',
})

import CTAComponent from '../components/CTAComponent.vue'
import GrilleChiffresComponent from '../components/GrilleChiffresComponent.vue'
import FAQComponent from '../components/FAQComponent.vue'

const chiffresData = [
  { chiffres: '100 000', suffixe: 'jeunes autistes de moins de 20 ans' },
  { chiffres: '600 000 ', suffixe: 'adultes autistes' },
  { chiffres: '1/4', suffixe: 'famille n a pas déposer de dossier à la MDPH' },
  { chiffres: '48 %', suffixe: "de parents d'autistes en seuil de difficulté en santé mental" },
]

const faqData = [
  {
    question: 'À qui s’adresse l’application ?',
    answer:
      'Elle est pensée pour les parents d’enfants autistes, quelle que soit la sévérité ou l’âge de l’enfant. Elle convient aussi aux proches aidants et aux familles en cours de diagnostic.',
  },
  {
    question: 'L’accès à la bêta est-il gratuit ?',
    answer: 'Oui. L’accès à la bêta privée est 100% gratuit et sans engagement.',
  },
  {
    question: 'Quand l’application sera-t-elle disponible ?',
    answer:
      'Les premiers accès sont prévus pour les inscrits sur la liste d’attente. Le lancement public arrivera après vos retours.',
  },
  {
    question: 'L’application est-elle validée par des professionnels ?',
    answer:
      'Notre application ne remplace en aucun cas l’avis d’un médecin ou d’un spécialiste. Notre objectif est d’accompagner, guider et soutenir les parents grâce à des informations claires, fiables et accessibles. Tous nos contenus sont construits à partir de sources reconnues (Santé Autisme, HAS, ressources institutionnelles, associations spécialisées…) et élaborés en collaboration avec des professionnels du secteur pour garantir leur qualité. L’application vous aide à mieux comprendre le parcours, à vous organiser et à avancer sereinement — toujours en complément des professionnels qui suivent votre enfant.',
  },
  {
    question: 'Est-ce adapté pour les parents d’enfants non diagnostiqués ?',
    answer: [
      'Oui. Même si le diagnostic n’est pas encore posé, l’app vous aide à :',
      'comprendre les démarches',
      'préparer les bilans',
      'suivre les observations',
      'organiser vos rendez-vous',
    ],
  },
  {
    question: 'Mes données seront-elles protégées ?',
    answer:
      'Bien sûr. Vos données sont sécurisées, confidentielles et ne seront jamais partagées. Conformité RGPD garantie.',
  },
]
</script>

<template>
  <header class="banner-header">
    <a href="/"><img src="/images/logo_white.svg" alt="Logo" class="logo" /></a>
    <CTAComponent link="/contact" text="Rejoindre la liste d’attente" />
  </header>
  <div id="app_contenu">
    <div class="hero">
      <div class="contenu">
        <h1>Accompagne et allège la charge mentale des parents d’enfant autiste.</h1>
        <p>
          Tessa est une application pensée pour alléger la charge mentale des parents d’enfants
          autistes. Notre solution simplifie l’accès aux démarches, aux professionnels et aux
          structures adaptées grâce à une interface douce, intuitive et personnalisée. Nous voulons
          offrir un accompagnement fiable, bienveillant et moderne, pour que chaque parent se sente
          soutenu et guidé, à chaque étape du parcours. Tessa, c’est la technologie au service de
          l’humain, pour rendre le quotidien plus simple et plus serein.
        </p>
        <CTAComponent link="/contact" text="Accéder à la liste d’attente" />
      </div>
    </div>
    <GrilleChiffresComponent :data="chiffresData" />
    <div class="benefices Bloc_titre">
      <h2>Nos bénéfices</h2>
      <div class="etapes">
        <div class="etape">
          <h3>Une communauté bienveillante</h3>
          <p>Accédez à une communauté de parents expérimentés</p>
        </div>
        <div class="etape">
          <h3>Organisation des rendez-vous</h3>
          <p>
            Un agenda intelligent qui regroupe vos rendez-vous, vos documents, vos comptes-rendus et
            vos rappels
          </p>
        </div>
        <div class="etape">
          <h3>Ressources fiables et vérifiées</h3>
          <p>Des contenus provenant de sources officielles et reconnues</p>
        </div>
        <div class="etape">
          <h3>Réduire la charge mentale</h3>
          <p>Clarifiez, organisez et avancez avec confiance</p>
        </div>
      </div>
    </div>
    <div class="Bloc_titre">
      <h2>Comment ça marche</h2>
      <CTAComponent link="/contact" text="Accéder à la liste privée" />
    </div>
    <div class="etapes">
      <div class="etape">
        <h3>Rejoignez la liste privée</h3>
        <p>Inscrivez-vous facilement et faites partie des premiers informés.</p>
      </div>
      <div class="etape">
        <h3>Recevez des accès exclusifs</h3>
        <p>Profitez de contenus réservés et d’aperçus privilégiés.</p>
      </div>
      <div class="etape">
        <h3>Accédez en avant-première à la version bêta</h3>
        <p>Testez l’application en avant-première et influencez son développement.</p>
      </div>
    </div>
    <div class="missions">
      <div class="offre-container">
        <div class="offre Bloc_titre">
          <h2>Notre mission</h2>
          <p>
            Simplifier la vie des parents d’enfants autistes en rendant le parcours accessible,
            clair et mieux accompagné.
          </p>
        </div>
        <div class="offre Bloc_titre">
          <h2>Notre vision</h2>
          <p>
            Un parcours autisme moins stressant, plus humain, avec des outils modernes et adaptés
            aux réalités des familles.
          </p>
        </div>
      </div>
      <div class="offre Bloc_titre">
        <h2>Pourquoi nous l’avons créée</h2>
        <p>
          Parce que trop de parents se sentent seuls, perdus, dépassés par les démarches. Nous
          construisons une solution simple, fiable et co-créée avec vous.
        </p>
        <CTAComponent link="/contact" text="Être informé du lancement" />
      </div>
    </div>
    <FAQComponent :questions="faqData" />
    <div class="Bloc_titre">
      <h2>Rejoignez la liste d’attente pour accéder à l’application avant tout le monde.</h2>
      <CTAComponent link="/contact" text="S’inscrire maintenant" />
    </div>
  </div>
  <footer>
    <img src="/images/logo_white.svg" alt="Logo" class="logo-footer" />
  </footer>
</template>

<style>
.grille,
.benefices,
.Bloc_titre,
.etapes,
.offre,
.missions {
  max-width: 1100px;
  margin: 0 auto;
}
/* Header */
.banner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--dark-blue);
  color: var(--white);
  position: sticky; /* Rendre le header sticky */
  top: 0; /* Coller le header en haut de la page */
  z-index: 1000; /* Assurer qu'il reste au-dessus des autres éléments */
}
.banner-header .logo {
  width: 70px;
  object-fit: cover;
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/family.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 0;
}
.hero .contenu {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 920px;
  gap: 20px;
  margin: 10px 0;
}

.hero .contenu > * {
  width: fit-content;
}

.benefices {
  margin-top: 20px;
}
.benefices .etapes .etape {
  flex: 1;
  text-align: center;
  border: solid 2px var(--pink);
  border-radius: 24px;
  padding: 20px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.Bloc_titre {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.etapes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
  gap: 20px;
}

.etapes .etape {
  text-align: center;
  background-color: var(--yellow);
  border-radius: 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: auto;
  gap: 10px;
}

.missions {
  border: solid 2px var(--dark-blue);
  border-radius: 24px;
}

.temoignages {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch; /* Ensure equal height */
  gap: 20px;
  padding: 20px;
}
.temoignages .temoignage {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: auto;
  height: 100%;
  padding: 20px;
  background-color: var(--white);
  border-radius: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.temoignages .temoignage .image {
  width: 100%;
  text-align: right;
}

.temoignages .temoignage .image img {
  width: 20px;
  height: 20px;
  border-radius: 30px;
  object-fit: cover;
}

.offre {
  padding: 20px;
}

.offre-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

/* Footer */
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: var(--dark-blue);
  color: var(--white);
  margin-top: 40px;
}
footer .logo-footer {
  width: 70px;
  object-fit: cover;
}

@media (min-width: 768px) {
  .banner-header .logo {
    width: 90px;
  }
  .hero .contenu {
    border-radius: 24px;
    margin: 50px 0;
  }
  .benefices {
    margin-top: 40px;
  }
  .etapes {
    padding: 40px 0;
    flex-direction: row;
  }

  .etapes .etape {
    width: 33%;
  }
  .chiffresCles {
    margin-top: 40px;
  }

  .temoignages {
    padding: 40px;
  }

  #app > .cta-button {
    width: fit-content;
    text-align: center;
  }
  .offre {
    padding: 40px;
  }

  .offre-container {
    display: flex;
    flex-direction: row;
  }
}
</style>
