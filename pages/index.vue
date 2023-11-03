<template>
  <div class="flex min-h-[calc(100vh-150px)] flex-col justify-center">
    <div id="name" class="space-y-5 font-bold lg:w-3/4 lg:space-y-8 2xl:space-y-12">
      <p class="text-primary md:text-xl xl:text-[1.4vw]">{{ $t('hello') }}</p>
      <h1 class="text-4xl font-bold xl:text-[4vw]">Pierrick Taïly</h1>
      <p
        class="text-lg font-semibold leading-10 md:text-xl lg:w-3/4 lg:leading-10 xl:text-[1.3vw]"
      >
        {{ $t('description') }}
      </p>

      <div class="flex gap-5 text-xs font-semibold lg:text-[1vw]">
        <button
          @click="copyEmail()"
          class="bg-primary px-5 py-2 text-secondary hover:bg-primary/90"
        >
          <p>{{ $t('contact') }}</p>
        </button>
        <NuxtLink
          to="/project"
          class="border border-primary px-5 py-2 text-primary hover:bg-primary hover:text-secondary"
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
