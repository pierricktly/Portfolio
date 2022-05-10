<template>
  <div class="text-white">
    <div class="container mx-auto flex justify-between py-5 px-5 lg:px-0">
      <div>
        <a href="/">
          <h1 class="font-bold text-2xl select-none">Zokiasu.</h1>
        </a>
      </div>
      <div>
        <button @click="navMenu = !navMenu" type="button" class="md:hidden">
          <icon-burger class="w-5 h-5"/>
        </button>
        <ul class="hidden md:flex space-x-20 text-xl">
          <li>
            <nuxt-link to="#work" class="hover-underline-animation">Portfolio</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#contact" class="hover-underline-animation">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div
      v-if="navMenu"
      class="animate__animated animate__fadeInDown animate__faster top-16 origin-top absolute bg-primary w-full md:hidden"
      id="mobile-menu"
    >
      <div class="px-2 pt-2 pb-3 space-y-1" @click="navMenu = false">
        <nuxt-link
          :to="`/`"
          class="block px-3 py-2 rounded-md font-medium hover:bg-white/10"
        >
          Home
        </nuxt-link>
        <nuxt-link
          to="#work"
          class="block px-3 py-2 rounded-md font-medium hover:bg-white/10"
        >
          Portfolio
        </nuxt-link>
        <nuxt-link 
          to="#contact"
          class="block px-3 py-2 rounded-md font-medium hover:bg-white/10"
        >
          Contact
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navMenu: false,
    };
  },
}
</script>