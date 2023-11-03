<template>
  <div
    class="flex min-h-[calc(100vh-150px)] flex-col items-center justify-center space-y-8 text-center"
  >
    <p
      class="max-w-7xl text-[5vw] font-bold 2xl:text-[3vw]"
      v-html="$t('contactMessage')"
    ></p>
    <button class="bg-primary px-5 py-2 font-semibold text-secondary">
      {{ $t('contact') }}
    </button>
    <div class="flex gap-8">
      <NuxtLink to="/" class="transition-all duration-300 ease-in-out hover:text-primary">
        <IconGithub class="h-6 w-6" />
      </NuxtLink>
      <NuxtLink to="/" class="transition-all duration-300 ease-in-out hover:text-primary">
        <IconLinkedin class="h-6 w-6" />
      </NuxtLink>
      <NuxtLink to="/" class="transition-all duration-300 ease-in-out hover:text-primary">
        <IconDownload class="h-7 w-7" />
      </NuxtLink>
    </div>
  </div>
</template>
