<template>
  <div
    class="fade-in flex min-h-[calc(100vh-70px)] flex-col items-center justify-center px-3 py-10 sm:px-5"
  >
    <div
      class="z-50 mx-20 flex w-full max-w-[60rem] flex-col overflow-hidden rounded-lg shadow shadow-tertiary lg:flex-row"
    >
      <div
        class="relative aspect-video w-full bg-green-500 lg:aspect-square lg:min-w-[30rem]"
      >
        <div
          :class="displayPicture ? 'opacity-0' : 'opacity-100'"
          class="absolute inset-0 aspect-video h-full w-full bg-primary transition-all duration-700 ease-in-out lg:aspect-square lg:min-w-[30rem]"
        />
        <NuxtImg
          format="webp"
          preload
          alt="Redpanda"
          src="/about_picture.jpg"
          @load="displayPicture = true"
          class="aspect-video h-full w-full object-cover lg:aspect-square lg:min-w-[30rem]"
        />
      </div>
      <div
        class="flex h-full flex-col space-y-5 bg-primary/50 p-5 sm:p-10 md:space-y-10 lg:aspect-square lg:h-fit"
      >
        <h2 class="text-xl font-semibold lg:text-2xl">{{ $t('aboutMeTitle') }}</h2>
        <div class="space-y-3 lg:space-y-8">
          <p class="text-sm">
            {{ $t('aboutMe_1') }}
          </p>
          <p class="text-sm">
            {{ $t('aboutMe_2') }}
          </p>
          <p class="text-sm">
            {{ $t('aboutMe_3') }}
          </p>
        </div>
        <div class="flex flex-col items-center justify-center gap-2 text-xs lg:flex-row">
          <button
            @click="copyEmail()"
            class="flex items-center gap-2 bg-primary px-3 py-1 text-secondary hover:bg-primary/90 md:px-5 md:py-2"
          >
            {{ $t('contact') }}
          </button>
          <button
            @click="downloadCVFromFile()"
            class="border border-primary px-3 py-1 text-sm font-semibold text-primary hover:bg-primary hover:text-secondary md:py-2 lg:text-base"
          >
            {{ $t('downloadCV') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { downloadCVFromFile, copyEmail } = useGeneralFunction()
const displayPicture = ref(false)
</script>

<style scoped>
.fade-in {
  -webkit-animation: fade-in 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: fade-in 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
</style>
