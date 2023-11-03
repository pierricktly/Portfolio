<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

const { locale } = useI18n()
const changeLocal = () => {
  if (locale.value === 'en') {
    locale.value = 'fr'
  } else {
    locale.value = 'en'
  }
}
</script>

<template>
  <div class="min-h-screen bg-secondary p-5 text-tertiary md:p-0">
    <header class="slide-in-top container mx-auto flex items-center justify-between md:py-5">
      <NuxtLink to="/" class="text-xl font-bold uppercase">Pierrick TLY</NuxtLink>
      <nav class="flex gap-8 text-lg font-semibold">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/project">Project</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
      <div class="flex items-center gap-5">
        <div class="font-semibold">
          <button
            @click="changeLocal"
            class="rounded-l px-2 text-primary focus:outline-none"
            :class="locale === 'en' ? 'bg-primary text-secondary' : 'bg-transparent'"
          >
            EN
          </button>
          <button
            @click="changeLocal"
            class="rounded-r px-2 text-primary focus:outline-none"
            :class="locale === 'fr' ? 'bg-primary text-secondary' : 'bg-transparent'"
          >
            FR
          </button>
        </div>
      </div>
    </header>
    <main class="container mx-auto min-h-[calc(100vh-70px)]">
      <slot />
    </main>
    <footer>
      <NuxtImg
        src="/images/redpanda.png"
        alt="Nuxt Logo"
        class="redpanda absolute bottom-0 right-0 aspect-square w-32 md:w-40 lg:w-52 xl:w-60 2xl:w-72"
      />
    </footer>
  </div>
</template>

<style scoped>
.redpanda {
  -webkit-animation: redpanda 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: redpanda 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.slide-in-top {
	-webkit-animation: slide-in-top 1s ease-in-out both;
	        animation: slide-in-top 1s ease-in-out both;
}

@-webkit-keyframes redpanda {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes redpanda {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
</style>
