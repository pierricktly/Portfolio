<script setup>
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
  <div class="bg-secondary dark:bg-tertiary text-tertiary dark:text-secondary min-h-screen flex flex-col justify-between space-y-3 md:space-y-5">
    <header>
      <nav>
        <div class="container mx-auto flex items-center justify-between p-5">
          <NuxtLink to="/" class="font-bold uppercase text-xl">Pierrick TAÏLY</NuxtLink>
          <div class="flex items-center gap-5">
            <div class="font-semibold">
              <button @click="changeLocal" class="px-2 rounded-l text-primary focus:outline-none" :class="locale === 'en' ? 'bg-primary text-secondary':'bg-transparent'">EN</button>
              <button @click="changeLocal" class="px-2 rounded-r text-primary focus:outline-none" :class="locale === 'fr' ? 'bg-primary text-secondary' : 'bg-transparent'">FR</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer class="bg-tertiary text-secondary p-5">
      <p class="text-center font-semibold">©{{ new Date().getFullYear() }} - Pierrick TAÏLY</p>
    </footer>
  </div>
</template>