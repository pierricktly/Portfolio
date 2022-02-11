<template>
  <a :href="workLink" class="rounded-lg overflow-hidden relative aspect-video group shadow-white drop-shadow">
    <img 
      :alt="workName" 
      :src="workImage"
      class="bg-gray-500 object-cover rounded-lg aspect-video w-full group-hover:blur-sm transition-all duration-300"
    />
    <div class="bg-black/30 absolute top-0 w-full group-hover:h-full transition-all transform ease-in-out duration-500">
      <h2 class="p-2 font-semibold text-xl">{{workName}}</h2>
      <p class="p-3 hidden group-hover:block transition-all transform ease-in-out duration-500">{{workDescription}}</p>
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
      }
    }
  }
</script>