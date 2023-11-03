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
  <div class="min-h-screen overflow-y-hidden bg-secondary p-5 text-tertiary md:p-0">
    <header
      class="slide-in-top container mx-auto flex items-center justify-between sm:px-5 md:py-5"
    >
      <NuxtLink to="/" class="text-xl font-bold uppercase">T.Pierrick</NuxtLink>

      <div class="flex items-center gap-8">
        <nav class="hidden gap-5 text-lg font-semibold md:flex">
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
        class="fixed bottom-5 left-3 flex gap-0.5 overflow-hidden rounded-full text-lg font-semibold text-secondary sm:left-5 md:hidden"
      >
        <NuxtLink
          to="/"
          :class="route.name == 'index' ? 'bg-primary' : 'bg-tertiary'"
          class="px-5 py-2 text-sm sm:px-5 sm:py-1 sm:text-base"
        >
          <IconHome class="h-4 w-4 sm:hidden" />
          <p class="hidden sm:block">{{ $t('nav.home') }}</p>
        </NuxtLink>
        <NuxtLink
          to="/about"
          :class="route.name == 'about' ? 'bg-primary' : 'bg-tertiary'"
          class="px-5 py-2 text-sm sm:px-5 sm:py-1 sm:text-base"
        >
          <IconAboutMe class="h-4 w-4 sm:hidden" />
          <p class="hidden sm:block">{{ $t('nav.about') }}</p>
        </NuxtLink>
        <NuxtLink
          to="/project"
          :class="route.name == 'project' ? 'bg-primary' : 'bg-tertiary'"
          class="px-5 py-2 text-sm sm:px-5 sm:py-1 sm:text-base"
        >
          <IconProject class="h-4 w-4 sm:hidden" />
          <p class="hidden sm:block">{{ $t('nav.projects') }}</p>
        </NuxtLink>
        <NuxtLink
          to="/contact"
          :class="route.name == 'contact' ? 'bg-primary' : 'bg-tertiary'"
          class="px-5 py-2 text-sm sm:px-5 sm:py-1 sm:text-base"
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
        class="fade-in fixed bottom-0 right-0 aspect-square w-32 md:w-40 lg:w-52 xl:w-60 2xl:w-72"
      />
    </footer>
  </div>
</template>
