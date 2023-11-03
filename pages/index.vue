<template>
  <div class="flex min-h-[calc(100vh-150px)] flex-col justify-center">
    <div id="name" class="space-y-3 md:space-y-5 lg:w-3/4 xl:space-y-8 2xl:space-y-12">
      <p
        class="text-sm font-semibold text-primary md:text-base lg:text-lg xl:text-[1.2vw] 2xl:text-[1.5vw]"
      >
        {{ $t('hello') }}
      </p>

      <h1 class="text-2xl font-bold md:text-4xl xl:text-[3vw]">Pierrick Taïly</h1>

      <p
        class="text-sm font-semibold leading-10 md:text-base lg:text-lg lg:leading-10 xl:text-[1.2vw] xl:leading-[2.75rem] 2xl:text-[1.5vw]"
      >
        {{ $t('description') }}
      </p>

      <div
        class="flex flex-col gap-2 text-sm font-semibold md:flex-row md:gap-5 lg:text-base"
      >
        <button
          @click="copyEmail()"
          class="flex items-center gap-2 bg-primary px-3 py-1 text-secondary hover:bg-primary/90 md:px-5 md:py-2"
        >
          <IconEmail class="h-3 w-3" />
          <p>{{ $t('contact') }}</p>
        </button>
        <NuxtLink
          to="/project"
          class="border border-primary px-3 py-1 text-primary hover:bg-primary hover:text-secondary md:px-5 md:py-2"
        >
          <p>{{ $t('seeMyProjects') }}</p>
        </NuxtLink>
      </div>

      <div class="flex gap-5">
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { githubUrl, linkedinUrl } from '~/constant/data'
const { copyEmail } = useGeneralFunction()

onMounted(() => {
  gsap.from('#name', {
    duration: 2,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
  })
})
</script>
