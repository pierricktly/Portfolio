<template>
  <div class="bg-tertiary text-prim-50">
    <header>
      <nav>
        <div class="container mx-auto flex items-center justify-between p-5">
          <NuxtLink to="/" class="font-bold uppercase text-xl">Pierrick TAÏLY</NuxtLink>
          <div class="flex items-center gap-5">
            <NuxtLink to="https://www.linkedin.com/in/pierrick-taily/" target="_blank" class="hover:text-prim-700 transition-all duration-300 ease-in-out">
              <IconLinkedin aria-label="Linkedin Link" class="w-5 h-5" />
            </NuxtLink>
            <NuxtLink to="https://github.com/pierricktly/" target="_blank" class="hover:text-prim-700 transition-all duration-300 ease-in-out">
              <IconGithub aria-label="Github Link" class="w-5 h-5" />
            </NuxtLink>
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