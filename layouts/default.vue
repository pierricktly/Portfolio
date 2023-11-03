<script setup>
const { locale } = useI18n()
const route = useRoute()
const changeLocal = () => {
  if (locale.value === 'en') {
    locale.value = 'fr'
  } else {
    locale.value = 'en'
  }
}
</script>

<template>
  <div class="min-h-screen overflow-y-hidden p-5 text-tertiary md:p-0">
    <header
      class="slide-in-top container mx-auto flex items-center justify-between sm:px-5 md:py-5 xl:text-lg"
    >
      <NuxtLink to="/" class="font-bold uppercase">T.Pierrick</NuxtLink>

      <div class="flex items-center gap-8">
        <nav class="hidden gap-5 font-semibold md:flex">
          <NuxtLink to="/">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink to="/about">{{ $t('nav.about') }}</NuxtLink>
          <NuxtLink to="/project">{{ $t('nav.projects') }}</NuxtLink>
          <NuxtLink to="/contact">{{ $t('nav.contact') }}</NuxtLink>
        </nav>
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
    <main class="container mx-auto min-h-[calc(100vh-70px)] sm:px-5">
      <slot />
    </main>
    <footer>
      <nav
        class="fixed bottom-3 left-3 flex gap-0.5 overflow-hidden rounded-full text-lg font-semibold text-secondary sm:bottom-5 sm:left-5 md:hidden"
      >
        <NuxtLink
          to="/"
          :class="route.name == 'index' ? 'bg-primary' : 'bg-tertiary'"
          class="px-3 py-1 text-sm sm:px-5 sm:py-1 sm:text-base md:px-5 md:py-2"
        >
          <IconHome class="h-4 w-4 sm:hidden" />
          <p class="hidden sm:block">{{ $t('nav.home') }}</p>
        </NuxtLink>
        <NuxtLink
          to="/about"
          :class="route.name == 'about' ? 'bg-primary' : 'bg-tertiary'"
          class="px-3 py-1 text-sm sm:px-5 sm:py-1 sm:text-base md:px-5 md:py-2"
        >
          <IconAboutMe class="h-4 w-4 sm:hidden" />
          <p class="hidden sm:block">{{ $t('nav.about') }}</p>
        </NuxtLink>
        <NuxtLink
          to="/project"
          :class="route.name == 'project' ? 'bg-primary' : 'bg-tertiary'"
          class="px-3 py-1 text-sm sm:px-5 sm:py-1 sm:text-base md:px-5 md:py-2"
        >
          <IconProject class="h-4 w-4 sm:hidden" />
          <p class="hidden sm:block">{{ $t('nav.projects') }}</p>
        </NuxtLink>
        <NuxtLink
          to="/contact"
          :class="route.name == 'contact' ? 'bg-primary' : 'bg-tertiary'"
          class="px-3 py-1 text-sm sm:px-5 sm:py-1 sm:text-base md:px-5 md:py-2"
        >
          <IconContact class="h-4 w-4 sm:hidden" />
          <p class="hidden sm:block">{{ $t('nav.contact') }}</p>
        </NuxtLink>
      </nav>
      <NuxtImg
        format="webp"
        preload
        src="/redpanda.png"
        alt="Nuxt Logo"
        class="fade-in fixed bottom-0 right-0 -z-10 aspect-square w-32 md:w-40 lg:w-52 xl:w-60 2xl:w-72"
      />
    </footer>
  </div>
</template>
