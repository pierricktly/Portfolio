<template>
  <nuxt-link
    :to="'/project/'+projectId"
    class="block h-48 rounded-lg relative bg-cover overflow-hidden bg-gray-300 transition-all ease-in-out duration-500 hover:shadow-lg hover:shadow-gray-50/20"
    :style="{
      'background-image': 'url('+bgImageLink+')'
    }"
  >
    <div class="bg-black/60 w-full absolute bottom-0 z-10 px-3 py-4 pt-2 space-y-2">
      <h3>{{ title }}</h3>
      <div class="text-xs space-x-1">
        <span 
          v-for="tag in tags" 
          :key="tag.name"
          class="bg-green-500 px-2 py-1 rounded-lg"
          :class="'bg-'+tag.color"
        >
          {{ tag.name }}
        </span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'ProjectCard',
    props: {
      bgImageLink: {
        type: String,
        default: 'https://picsum.photos/200'
      },
      title: {
        type: String,
        default: 'Project Name H'
      },
      tags: {
        type: Array,
        default: () => [
          {
            name: 'VueJS',
            color: 'green-500'
          }, 
          {
            name: 'NuxtJS',
            color: 'green-700'
          },
          {
            name: 'Firebase',
            color: 'orange-400'
          },
          {
            name: 'Tailwind',
            color: 'cyan-500'
          },
        ]
      },
      projectId: {
        type: String,
        default: '1'
      }
    },
    data() {
      return {
        // Data
      }
    },
    methods: {
      // Methods
    },
    computed: {
      // Computed
    },
    watch: {
      // Watch
    },
    mounted() {
      // Mounted
    }
  }
</script>