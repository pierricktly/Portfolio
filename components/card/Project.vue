<template>
  <div
    class="flex min-w-[19rem] max-w-[25rem] flex-1 flex-col overflow-hidden rounded-lg shadow shadow-tertiary sm:mx-5"
  >
    <div class="relative aspect-video w-full object-cover">
      <div
        :class="displayPicture ? 'opacity-0' : 'opacity-100'"
        class="absolute inset-0 aspect-video w-full bg-primary transition-all duration-700 ease-in-out"
      ></div>
      <NuxtImg
        format="webp"
        preload
        :alt="titleProject"
        :src="pictureLink"
        @load="displayPicture = true"
        class="aspect-video w-full object-cover"
      />
    </div>
    <div
      id="data"
      class="flex flex-grow flex-col justify-between space-y-8 bg-primary/50 p-5"
    >
      <div class="space-y-3 xl:space-y-5">
        <div class="space-y-1.5">
          <h2 class="text-2xl font-semibold">{{ titleProject }}</h2>
          <div class="flex flex-wrap gap-2 text-xs font-semibold uppercase">
            <p
              v-for="stack in stacks"
              :key="stack"
              class="rounded border border-tertiary px-2"
            >
              {{ stack }}
            </p>
          </div>
        </div>
        <p class="flex-grow text-sm">
          {{ description }}
        </p>
      </div>
      <div class="mt-auto flex flex-col gap-2 text-xs lg:flex-row">
        <NuxtLink
          :to="githubLink"
          target="_blank"
          class="flex items-center gap-2 bg-primary px-3 py-2 text-secondary hover:bg-primary/90"
        >
          <IconGithub class="h-4 w-4" />
          <p>{{ $t('githubProjectButton') }}</p>
        </NuxtLink>
        <NuxtLink
          :to="demoLink"
          target="_blank"
          class="flex items-center gap-2 border border-primary px-3 py-2 text-primary hover:bg-primary hover:text-secondary"
        >
          <IconLinkexternal class="h-4 w-4" />
          <p>{{ $t('liveButton') }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { titleProject, stacks, description, githubLink, demoLink, pictureLink } =
  defineProps<{
    titleProject: string
    stacks: string[]
    description: string
    githubLink: string
    demoLink: string
    pictureLink: string
  }>()
const displayPicture = ref(false)
</script>
