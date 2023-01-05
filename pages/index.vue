<template>
  <section class="min-h-screen w-screen space-y-8 lg:space-y-16 px-5 flex flex-col items-center lg:justify-center lg:-mt-14">
    <img v-fade-image class="absolute top-0 right-0 h-72 -z-40 hidden lg:block" src="@/assets/images/RedPanda.svg" alt="redpanda mascot of zokiasu">
    <div class="text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-center mx-auto space-y-5">
      <p class="freestyle-script">bonjour, je m'appelle</p>
      <h2 class="bookman font-bold">TAÏLY Pierrick</h2>
      <p class="freestyle-script">je suis</p>
      <h2 class="bookman font-bold">développeur frontend</h2>
    </div>
    <img v-fade-image
      alt="Profile picture"
      src="@/assets/images/profile_picture.png"
      class="bg-primary/20 shadow-inner mx-auto drop-shadow w-52 h-52 rounded-full aspect-square lg:hidden"
    />
    <div class="container mx-auto flex flex-col space-y-8">
      <p class="text-center mx-auto text-sm md:text-base xl:text-lg">
        Spécialisé dans la création de sites et d'applications Web modernes et attrayants sous vue.js/nuxt.js. 
        Je travaille en étroite collaboration avec mes clients et les équipes de développement pour créer des solutions sur mesure qui répondent à leurs besoins et dépassent leurs attentes. Si vous cherchez un développeur front-end professionnel et fiable pour votre prochain projet, n'hésitez pas à me contacter.
      </p>
      <nuxt-link aria-label="button to go contact form" class="bg-primary px-5 py-2 mx-auto text-sm transition-all ease-in-out duration-500 hover:bg-primary/20 lg:text-base" to="/contact">Contactez-moi</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
}
</script>