<template>
  <page-template titlePage="A Propos">
    <div class="mb-20 space-y-20 lg:space-y-52 lg:mb-32">
      <div class="flex flex-col max-w-5xl mx-auto space-y-5 mb-24 px-5 md:mb-0 md:flex-row md:items-center md:mt-20 lg:space-y-0 lg:space-x-10">
        <img
          v-fade-image
          alt="Profile picture"
          src="@/assets/images/profile_picture.png"
          class="bg-primary/20 shadow-inner mx-auto drop-shadow w-60 h-60 rounded-full aspect-square mt-10 md:mt-0
          lg:w-72 lg:h-72 xl:w-80 xl:h-80"
        />
        <div class="px-5 space-y-8 h-full">
          <p class="whitespace-pre-line">
            Je m'appelle Taïly Pierrick, je suis développeur frontend autodidacte et freelance, je suis passionné par le développement web et l'expérience utilisateur. 
            
            J'ai acquis une solide expérience grâce à ma pratique et mon expérience en tant qu'alternant pendant mes études, et j'ai consacré de nombreuses heures à apprendre et à mettre en pratique mes connaissances en développement web.

            Je suis spécialisé dans l'utilisation de Vue.js et Nuxt.js pour créer des applications web performantes et évolutives, et je suis également compétent en HTML, CSS et JavaScript. 
            
            En tant qu'autodidacte passionné, je suis toujours à la recherche de nouveaux challenges et de moyens d'améliorer mes compétences en développement frontend.
          </p>
          <div class="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5">
            <a
              href="https://drive.google.com/u/1/uc?id=1BTEhnAQ9rySOLdV2jAl7h0Q0GhsmaJAu&export=download"
              target="_blank"
              class="bg-primary px-5 py-2 text-center hover:bg-primary/20 transition-all ease-in-out duration-500"
            >
              Télécharger mon CV
            </a>
            <nuxt-link 
              class="border border-primary text-primary px-5 py-2 mx-auto text-sm w-full text-center transition-all ease-in-out duration-500 hover:bg-primary/20 hover:text-white hover:border-transparent lg:w-fit lg:text-base" 
              to="/contact"
            >
              Contactez-moi
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="bg-[#17202C]/50 md:bg-transparent w-full p-10 space-y-20 lg:space-y-40 rounded">
        <h2 class="bookman font-semibold text-2xl lg:text-4xl text-center">Mes services</h2>
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <article class="2xl:max-w-md space-y-5 p-5 2xl:-translate-y-10 rounded-xl bg-[#212F40]">
            <p class="text-center text-lg lg:text-xl bookman font-semibold">Développement web</p>
            <icon-webdesign class="mx-auto w-32 h-32 lg:w-60 lg:h-60"/>
            <p class="whitespace-pre-line text-sm leading-loose lg:text-base">
              Vous cherchez à lancer un nouveau site web ou une application web pour votre entreprise, mais vous ne savez pas comment vous y prendre ? 
              
              Je peux vous aider à concevoir et à développer une solution qui répond à vos besoins et à vos objectifs.
            </p>
          </article>
          <article class="2xl:max-w-md space-y-5 p-5 2xl:-translate-y-10 rounded-xl bg-[#212F40]">
            <p class="text-center text-lg lg:text-xl bookman font-semibold">Intégration API</p>
            <icon-dev class="mx-auto w-32 h-32 lg:w-60 lg:h-60"/>
            <p class="whitespace-pre-line text-sm leading-loose lg:text-base">
              Vous avez des données que vous souhaitez intégrer dans votre site web ou votre application web, mais vous ne savez pas comment y parvenir ? 
              
              En tant que développeur front-end expérimenté, je suis spécialisé dans l'intégration de données dynamiques et je peux vous aider à créer une expérience utilisateur fluide et intuitive grâce à l'utilisation de technologies telles qu'Axios et RESTful APIs.
            </p>
          </article>
          <article class="2xl:max-w-md space-y-5 p-5 2xl:-translate-y-10 rounded-xl bg-[#212F40]">
            <p class="text-center text-lg lg:text-xl bookman font-semibold">Optimisation de site web</p>
            <icon-maintenance class="mx-auto w-32 h-32 lg:w-60 lg:h-60"/>
            <p class="whitespace-pre-line text-sm leading-loose lg:text-base">
              Vous souhaitez améliorer la performance de votre site web ou de votre application web, mais vous ne savez pas comment y parvenir ? 
              
              En tant que développeur front-end professionnel, je m'appuie sur des techniques telles que le lazy loading et la minimisation du code pour optimiser la performance de mes applications web et garantir une expérience utilisateur rapide et agréable pour les utilisateurs.
            </p>
          </article>
        </div>
      </div>
    </div>
  </page-template>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      // Data
    }
  },
  methods: {
    // Methods
  },
  computed: {
    // Computed
  },
  watch: {
    // Watch
  },
  mounted() {
    // Mounted
  }
}
</script>