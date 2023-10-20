<script setup lang="ts">
const { name, image, description, githubLink, demoLink, tags } = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  demoLink: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
});

const skeleton = ref(null);
const imageLoad = ref(null);

const loadingDone = () => {
  // @ts-ignore
  skeleton.value.classList.add("opacity-0");
};
</script>

<template>
  <div class="rounded-lg p-3 space-y-1 flex flex-col justify-between gap-2">
    <div class="space-y-1">
      <div class="relative">
        <img
          :src="image"
          alt="Project's image"
          class="w-full rounded shadow shadow-tertiary aspect-video transition-all duration-150 ease-in-out"
          @load="loadingDone" />
      </div>
      <div class="flex w-full items-center justify-between">
        <a :href="demoLink" target="_blank" class="flex items-center gap-1 text-lg font-semibold hover:text-primary">
          <p>{{ name }}</p>
          <IconLinkexternal aria-label="Github Link" class="w-5 h-5" />
        </a>
        <a :href="githubLink" target="_blank" class="hover:text-primary">
          <IconGithub aria-label="Github Link" class="w-6 h-6" />
        </a>
      </div>
      <p class="pr-8 text-sm">
        {{ description }}
      </p>
    </div>
    <div class="flex flex-wrap gap-2.5 text-xs uppercase items-center">
      <p v-for="(tag, index) in tags" :key="tag + '_' + index" class="font-semibold">
        {{ tag }}
      </p>
    </div>
  </div>
</template>
