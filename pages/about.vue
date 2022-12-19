<template>
  <page-template titlePage="A Propos">
    <div class="flex flex-col max-w-5xl mx-auto space-y-5 mb-24 md:mb-0 md:flex-row md:items-center md:mt-20 lg:space-y-0 lg:space-x-10">
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
          <button class="bg-primary px-5 py-2 hover:bg-primary/20 transition-all ease-in-out duration-500">
            Télécharger mon CV
          </button>
          <nuxt-link 
            class="border border-primary text-primary px-5 py-2 mx-auto text-sm w-full text-center transition-all ease-in-out duration-500 hover:bg-primary/20 hover:text-white hover:border-transparent lg:w-fit lg:text-base" 
            to="/contact"
          >
            Contactez-moi
          </nuxt-link>
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