<template>
  <div class="fade-in flex min-h-[calc(100vh-70px)] flex-col items-center justify-center">
    <div
      class="z-10 mx-20 flex min-w-[25rem] max-w-[60rem] flex-col overflow-hidden rounded-lg shadow shadow-tertiary lg:flex-row"
    >
      <NuxtImg
        format="webp"
        preload
        alt="Redpanda"
        src="/about_picture.jpg"
        class="aspect-video w-full object-cover lg:aspect-square lg:min-w-[30rem]"
      />
      <div
        class="flex h-full flex-col space-y-10 bg-primary/50 p-8 sm:p-10 lg:aspect-square lg:h-fit"
      >
        <h2 class="text-2xl font-semibold">{{ $t('aboutMeTitle') }}</h2>
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
            @click="downloadCVFromFile()"
            class="border border-primary px-3 py-2 font-bold text-primary hover:bg-primary hover:text-secondary"
          >
            {{ $t('downloadCV') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { downloadCVFromFile } = useGeneralFunction()
</script>

<style scoped>
.fade-in {
  -webkit-animation: fade-in 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: fade-in 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
</style>
