<template>
  <div
    id="contact"
    class="flex min-h-[calc(100vh-150px)] flex-col items-center justify-center space-y-8 text-center"
  >
    <p
      class="max-w-7xl text-[5vw] font-bold 2xl:text-[3vw]"
      v-html="$t('contactMessage')"
    ></p>
    <button
      @click="copyEmail()"
      class="flex items-center gap-2 bg-primary px-5 py-2 font-semibold text-secondary"
    >
      <IconEmail class="h-4 w-4" />
      <p>{{ $t('contact') }}</p>
    </button>
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
