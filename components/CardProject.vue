<script setup>
const { link, image, name } = defineProps({
  link: String,
  image: String,
  name: String
})

const skeleton = ref(null)

const loadingDone = () => {
  skeleton.value.classList.add('hidden')
}
</script>

<template>
  <NuxtLink :href="link" target="_blank">
    <div class="relative overflow-hidden">
      <div ref="skeleton" class="absolute z-10 inset-0 bg-zinc-500 object-cover transition-all duration-300 ease-in-out animate-pulse"></div>
      <nuxt-img
        :src="image" :alt="name"
        quality="50" loading="lazy" @load="loadingDone"
        class="aspect-video"
      />
    </div>
  </NuxtLink>
</template>