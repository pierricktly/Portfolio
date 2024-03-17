<template>
  <div
    id="contact"
    class="flex min-h-[calc(100vh-150px)] flex-col items-center justify-center space-y-8 text-center"
  >
    <p
      class="max-w-7xl text-[7vw] font-bold md:text-[5vw] lg:text-[3vw]"
      v-html="$t('contactMessage')"
    ></p>
    <div class="flex font-semibold">
      <NuxtLink
        to="mailto:pierrick.tly+portfolio@gmail.com"
        class="flex items-center gap-2 border border-primary w-full px-3 py-1 text-primary hover:bg-primary hover:text-secondary md:px-5 md:py-2"
      >
        <IconEmail class="h-5 w-5" />
        <p>{{ $t('workTogether') }}</p>
      </NuxtLink>
      <button
        @click="copyEmail()"
        class="border border-primary bg-primary px-3 py-1 text-secondary hover:bg-primary/90 md:px-5 md:py-2 active:border-primary"
      >
        <p>{{ $t('copy') }}</p>
      </button>
    </div>
    <div class="flex gap-8">
      <NuxtLink
        :to="githubUrl"
        target="_blank"
        class="transition-all duration-300 ease-in-out hover:text-primary"
      >
        <IconGithub class="h-6 w-6" />
      </NuxtLink>
      <NuxtLink
        :to="linkedinUrl"
        target="_blank"
        class="transition-all duration-300 ease-in-out hover:text-primary"
      >
        <IconLinkedin class="h-6 w-6" />
      </NuxtLink>
      <button
        @click="downloadCVFromFile()"
        class="transition-all duration-300 ease-in-out hover:text-primary"
      >
        <IconDownload class="h-7 w-7" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { githubUrl, linkedinUrl } from '~/constant/data'
const { downloadCVFromFile, copyEmail } = useGeneralFunction()

onMounted(() => {
  gsap.from('#contact', {
    duration: 2,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
  })
})
</script>
