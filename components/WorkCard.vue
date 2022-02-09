<template>
  <NuxtLink :to="`/work/${workName}`" class="rounded-lg relative aspect-video h-60">
    <img 
      :alt="workName" 
      :src="workImage"
      class="rounded-lg bg-gray-500 aspect-video w-full"
    />
    <h2 class="absolute top-0 left-0 p-2 font-semibold text-xl w-full bg-primary/10">{{workName}}</h2>
  </NuxtLink>
</template>

<script>
export default {
  name: 'WorkCard',
  props: {
    workName: {
      type: String,
      required: true
    },
    workImage: {
      type: String,
      required: true
    }
  }
}
</script>