<template>
  <div class="min-h-screen w-screen space-y-8 lg:space-y-14 px-5 flex flex-col items-center lg:justify-center">
    <img v-fade-image class="absolute top-0 right-0 h-72 -z-40 hidden lg:block" src="@/assets/images/RedPanda.svg" alt="redpanda sleep on a branch">
    <div class="text-3xl md:text-6xl lg:text-7xl xl:text-8xl text-center mx-auto space-y-5">
      <p class="freestyle-script">bonjour, je m'appelle</p>
      <p class="bookman font-bold">TAÏLY Pierrick</p>
      <p class="freestyle-script">et je suis</p>
      <p class="bookman font-bold">a frontend developper</p>
    </div>
    <img v-fade-image
      alt="Profile picture"
      src="@/assets/images/profile_picture.png"
      class="bg-primary/20 shadow-inner mx-auto drop-shadow w-60 h-60 rounded-full aspect-square lg:hidden"
    />
    <div class="flex flex-col space-y-8">
      <p class="text-center mx-auto text-sm md:text-lg">
        Avec ma maîtrise des dernières technologies de développement frontend, je suis en mesure de créer des sites web et des applications web attrayants et réactifs qui offrent une expérience fluide sur tous les appareils. 
        <br>Contactez-moi pour discuter de votre projet et découvrir comment je peux vous aider.
      </p>
      <nuxt-link class="bg-primary px-5 py-2 mx-auto text-sm transition-all ease-in-out duration-500 lg:text-base" to="/contact">Contactez-moi</nuxt-link>
    </div>
  </div>
</template>