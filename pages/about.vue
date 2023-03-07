<template>
  <page-template titlePage="A Propos">
    <div class="pb-16 lg:pb-0 lg:pt-16 space-y-20 lg:space-y-52">
      <div class="flex flex-col max-w-5xl mx-auto space-y-5 mb-24 px-5 lg:mb-0 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-10">
        <img
          v-fade-image
          alt="Profile picture"
          src="@/assets/images/about_picture.jpg"
          class="bg-primary/20 shadow-inner mx-auto drop-shadow w-60 h-60 rounded-full aspect-square mt-10 lg:mt-0
          lg:w-72 lg:h-72 xl:w-80 xl:h-80"
        />
        <div class="px-5 space-y-8 h-full">
          <p class="whitespace-pre-line">
            Bonjour ! 🖐

            Je m'appelle Pierrick TAÏLY et je suis développeur web spécialisé dans le Front-end.

            Je développe principalement en Nuxt.JS et Vue.JS, je possède également des connaissances solides sur le framework React.JS et je continue à me former en continu.

            Suite à divers projets ambitieux sur lesquels j'ai eu la chance de travailler, je connais les bonnes pratiques à adopter pour construire un site scalable et robuste.

            D'un naturel curieux, ambitieux et attentif, je saurais répondre à vos besoins en termes de développement et ainsi mener à bien les projets que vous me confierez.

            Au plaisir de vous accompagner sur vos prochains projets 👊
          </p>
          <div class="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5">
            <a
              href="https://drive.google.com/u/1/uc?id=1Ef5K0RHW5Fx5XY6kYigVVjBM0je02c3x&export=download"
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
    </div>
  </page-template>
</template>

<script>
export default {
  name: 'About',
}
</script>