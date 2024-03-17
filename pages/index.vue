<script setup lang="ts">
import gsap from 'gsap'
import { githubUrl, linkedinUrl } from '~/constant/data'
const { copyEmail } = useGeneralFunction()
const currentPageIndex = useCurrentPageIndex();
const name = ref(null)

onMounted(() => {
  nextTick(() => {
    name.value.style.opacity = 1
    gsap.from('#name', {
      duration: 2,
      y: 100,
      opacity: 0,
      ease: 'power4.out',
    })
  })
})
</script>

<template>
  <div class="flex min-h-[calc(100dvh-150px)] flex-col items-center justify-center">
    <section ref="name" id="name" class="test space-y-5 lg:w-3/4 xl:space-y-8 2xl:space-y-12">
      <div class="text-center md:text-left md:w-1/2 2xl:w-1/3 space-y-5">
        <h1 class="text-4xl font-bold text-primary">{{ $t('hello') }}</h1>

        <p
          class="text-lg"
        >
          {{ $t('description') }}
        </p>
      </div>

      <div class="flex justify-center md:justify-start">
        <NuxtLink
          to="/project"
          @click="currentPageIndex = 2"
          class="text-primary hover:text-secondary font-semibold px-3 py-1 md:px-5 md:py-2 border border-primary hover:bg-primary"
        >
          {{ $t('seeMyProjects') }}
        </NuxtLink>
      </div>

      <div class="flex gap-5 justify-center md:justify-start">
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
    </section>
  </div>
</template>

<style>
.test {
  opacity: 0;
}
</style>
