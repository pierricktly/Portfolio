<template>
  <section class="min-h-screen w-screen space-y-8 lg:space-y-16 px-5 flex flex-col items-center lg:justify-center lg:-mt-14">
    <img v-fade-image class="absolute top-0 right-0 h-72 -z-40 hidden lg:block" src="@/assets/images/RedPanda.svg" alt="redpanda sleep on a branch">
    <div class="text-3xl md:text-6xl lg:text-7xl xl:text-8xl text-center mx-auto space-y-5">
      <p class="freestyle-script">bonjour, je m'appelle</p>
      <p class="bookman font-bold">TAÏLY Pierrick</p>
      <p class="freestyle-script">je suis</p>
      <p class="bookman font-bold">développeur frontend</p>
    </div>
    <img v-fade-image
      alt="Profile picture"
      src="@/assets/images/profile_picture.png"
      class="bg-primary/20 shadow-inner mx-auto drop-shadow w-60 h-60 rounded-full aspect-square lg:hidden"
    />
    <div class="flex flex-col space-y-8">
      <p class="text-center mx-auto text-sm md:text-lg">
        Mes compétences en Vue.js/Nuxt.js sont à votre disposition pour développer une solution web sur mesure répondant à vos besoins.
      </p>
      <nuxt-link class="bg-primary px-5 py-2 mx-auto text-sm transition-all ease-in-out duration-500 hover:bg-primary/20 lg:text-base" to="/contact">Contactez-moi</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
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