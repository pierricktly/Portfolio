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
})

const skeleton = ref(null)

const loadingDone = () => {
  // @ts-ignore
  skeleton.value.classList.add('opacity-0')
}
</script>

<template>
  <a :href="demoLink" target="_blank" class="rounded-lg p-3 space-y-1.5 flex flex-col justify-between gap-2 group">
    <div class="space-y-1">
      <div class="flex w-full items-center justify-between">
        <a :href="demoLink" target="_blank" class="flex items-center gap-1 text-lg font-semibold hover:text-primary group-hover:text-primary">
          <p>{{ name }}</p>
          <IconLinkexternal aria-label="Github Link" class="w-5 h-5" />
        </a>
        <a :href="githubLink" target="_blank" class="hover:text-primary">
          <IconGithub aria-label="Github Link" class="w-6 h-6" />
        </a>
      </div>
      <p class="pr-8">
        {{ description }}
      </p>
    </div>
    <div class="flex gap-1.5 text-xs uppercase items-center">
      <p 
        v-for="(tag, index) in tags"
        :key="tag+'_'+index"
        class="font-semibold rounded px-1.5"
      >
        {{ tag }}
      </p>
    </div>
  </a>
</template>