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
  <div class="bg-tertiary min-h-screen flex flex-col justify-between text-prim-50">
    <header>
      <nav>
        <div class="container mx-auto flex items-center justify-between p-5">
          <NuxtLink to="/" class="font-bold uppercase text-xl">Pierrick TAÏLY</NuxtLink>
          <div class="flex items-center gap-5">
            <div class="font-semibold">
              <button @click="changeLocal" class="px-2 rounded-l focus:outline-none" :class="locale === 'en' ? 'bg-white text-tertiary':'bg-transparent'">EN</button>
              <button @click="changeLocal" class="px-2 rounded-r focus:outline-none" :class="locale === 'fr' ? 'bg-white text-tertiary' : 'bg-transparent'">FR</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer class="p-5">
      <p class="text-center font-semibold">©{{ new Date().getFullYear() }} - Pierrick TAÏLY</p>
    </footer>
  </div>
</template>