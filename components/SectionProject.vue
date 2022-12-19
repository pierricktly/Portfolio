<template>
  <section 
    class="flex flex-col space-y-5 w-full lg:py-28 lg:space-y-0 lg:space-x-8" 
    :class="right ? 'lg:space-x-reverse lg:flex-row-reverse lg:text-right lg:justify-end' : 'lg:flex-row'"
  >
    <img v-fade-image :src="image" :alt="name" class="rounded object-cover aspect-video h-96 shadow-white/20 shadow-xl lg:h-72">
    <div class="space-y-5 w-full">
      <div class="space-y-3">
        <h3 class="font-bold text-3xl bookman"> {{ name }} </h3>
        <div class="text-xs space-x-1">
          <span 
            v-for="tag in tags" 
            :key="tag.name"
            class="px-2 py-1 rounded-lg"
            :class="tag.color"
          >
            {{ tag.name }}
          </span>
        </div>
      </div>
      <p> {{ description }} </p>
      <div v-if="githubLink || onlineLink" class="space-x-2">
        <a v-if="githubLink" :href="githubLink" class="bg-primary hover:bg-primary/30 transition-all ease-in-out duration-500 text-white font-bold py-2 px-4 rounded">
          Github
        </a>
        <a v-if="onlineLink" :href="onlineLink" class="bg-transparent border border-primary text-primary hover:text-white hover:border-transparent hover:bg-primary/30 transition-all ease-in-out duration-500 font-bold py-2 px-4 rounded">
          En Ligne
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: null
    },
    tags: {
      type: Array,
      default: () => []
    },
    githubLink: {
      type: String,
      default: null
    },
    onlineLink: {
      type: String,
      default: null
    },
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>