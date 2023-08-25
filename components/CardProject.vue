<script setup lang="ts">
const { name, image, githubLink, demoLink, tags } = defineProps({
  name: {
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
  <div class="bg-secondary text-tertiary rounded-lg p-1.5 xl:p-2.5 space-y-1">
    <div class="rounded-lg relative overflow-hidden">
      <div ref="skeleton" class="absolute transition-all duration-1000 ease-in-out inset-0 bg-[#333333] h-full w-full md:min-h-[13rem] md:max-h-[20rem]"></div>
      <nuxt-img
        :src="image" :alt="name"
        quality="50" loading="lazy" @load="loadingDone"
        class="aspect-video rounded-lg md:min-h-[13rem] md:max-h-[20rem]"
      />
    </div>
    <div class="flex w-full items-center justify-between px-1.5">
      <div>
        <a :href="demoLink" target="_blank" class="text-lg font-semibold hover:text-primary">{{ name }}</a>
        <div class="flex gap-1.5 text-xs uppercase items-center">
          <p 
            v-for="(tag, index) in tags"
            :key="tag+'_'+index"
          >
            {{ tag }}
          </p>
        </div>
      </div>
      <a :href="githubLink" target="_blank" class="hover:text-primary">
        <IconGithub aria-label="Github Link" class="w-6 h-6" />
      </a>
    </div>
  </div>
</template>