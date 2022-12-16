<template>
  <div>
    <div class="fixed top-0 w-full justify-between p-10 hidden md:flex z-50">
      <nuxt-link to="/">
        <p class="text-2xl font-bold uppercase bookman hover:fill-text">Zokiasu</p>
      </nuxt-link>
      <ul class="flex space-x-5">
				<li>
					<a href="https://www.linkedin.com/in/pierrick-taily/" target="_blank">
						<icon-linkedin class="w-6 h-6 transition-all ease-in-out duration-300 hover:text-primary"/>
					</a>
				</li>
				<li>
					<a href="https://github.com/Zokiasu" target="_blank">
						<icon-github class="w-6 h-6 transition-all ease-in-out duration-300 hover:text-primary"/>
					</a>
				</li>
				<li>
					<a href="https://www.malt.fr/profile/zokiasu" target="_blank">
						<icon-malt class="w-6 h-6 transition-all ease-in-out duration-300 hover:text-primary"/>
					</a>
				</li>
			</ul>
    </div>
    <div class="fixed font-bold pb-10 bottom-0 left-0 right-0 bg-gradient-to-t from-secondary to-transparent z-50">
      <div 
        class="flex items-center justify-center space-x-0.5"
      >
        <nuxt-link-nav
          icon="icon-house"
          text="Accueil"
          label="acceuil"
          path="/"
          left
        />
        <!-- <nuxt-link-nav
          icon="icon-house"
          text="Services"
          label="services"
          path="/services"
        /> -->
        <nuxt-link-nav
          icon="icon-profile"
          text="A Propos"
          label="a propos"
          path="/about"
        />
        <nuxt-link-nav
          icon="icon-project"
          text="Projet"
          label="projet"
          path="/project"
        />
        <nuxt-link-nav
          icon="icon-contact"
          text="Contact"
          label="contact"
          path="/contact"
          right
        />
      </div>
    </div>
  </div>
</template>

<script>
import NuxtLinkNav from './NuxtLinkNav.vue';
export default {
  components: { NuxtLinkNav },
  data() {
    return {
      navMenu: false,
    };
  },
}
</script>

<style scoped>
  .fill-text {
    /* Add a linear gradient as the text color, going from transparent to the desired color */
    color: linear-gradient(to right, white, #0000FF);

    /* Add an animation to gradually change the color of the text */
    animation: fill-text-animation 1s ease-in-out;
  }

  /* Create the animation keyframes */
  @keyframes fill-text-animation {
    /* At the start of the animation, the text is transparent */
    0% {
      color: linear-gradient(to right, white, white);
    }
    /* At the end of the animation, the text is fully colored */
    100% {
      color: linear-gradient(to right, #0000FF, #0000FF);
    }
  }
</style>