<template>
  <a :href="workLink" target="_blank" class="rounded-lg overflow-hidden relative aspect-video group shadow-white drop-shadow">
    <img 
      :alt="workName" 
      :src="workImage"
      class="bg-gray-500 object-cover rounded-lg aspect-video w-full group-hover:blur-sm transition-all duration-300"
    />
    <div class="bg-black/30 absolute top-0 w-full group-hover:h-full transition transform ease-in-out duration-1000 flex flex-col justify-between py-2">
      <h2 class="px-2 font-semibold text-xl">{{workName}}</h2>
      <p class="px-5 hidden group-hover:block transition-all transform ease-in-out duration-500">{{workDescription}}</p>
      <div class="px-5 pb-1 w-full group-hover:flex flex-row flex-wrap gap-1 text-sm hidden transition-all transform ease-in-out duration-500">
        <p v-for="tech in workTechnology" :key="tech" class="px-3 py-1 border rounded border-white bg-black/30">{{tech}}</p>
      </div>
    </div>
  </a>
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
      },
      workDescription: {
        type: String,
        required: true
      },
      workLink: {
        type: String,
        required: true
      },
      workTechnology: {
        type: Array,
        required: true
      }
    }
  }
</script>