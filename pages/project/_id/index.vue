<template>
  <div class="px-5 py-8 container mx-auto md:mt-20 lg:mt-10">
    <div class="flex flex-col lg:flex-row lg:justify-center space-y-5 lg:space-y-0 lg:space-x-10">
      <div class="flex space-x-2 md:space-x-8 snap-x snap-mandatory overflow-x-auto lg:flex-col lg:space-x-0 lg:space-y-5">
        <img
          src="https://picsum.photos/200" 
          alt=""
          class="rounded-lg aspect-video h-44 md:h-52 lg:h-60 object-cover snap-center shrink-0"
        />
        <img
          src="https://picsum.photos/200" 
          alt=""
          class="rounded-lg aspect-video h-44 md:h-52 lg:h-60 object-cover snap-center shrink-0"
        />
        <img
          src="https://picsum.photos/200" 
          alt=""
          class="rounded-lg aspect-video h-44 md:h-52 lg:h-60 object-cover snap-center shrink-0"
        />
      </div>
      <div class="space-y-8 lg:col-span-2">
        <div class="space-y-3">
          <h2 class="text-2xl md:text-5xl lg:text-7xl bookman font-bold">Project Name</h2>
          <div class="text-xs md:text-base font-semibold space-x-1">
            <span 
              v-for="tag in tags" 
              :key="tag.name"
              class="px-2 py-1 rounded"
              :class="tag.color"
            >
              {{ tag.name }}
            </span>
          </div>
        </div>
        <p class="text-sm md:text-base 2xl:text-lg lg:max-w-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, facilis maiores cumque facere nobis aliquam id sunt aliquid iure quidem modi laborum aspernatur debitis magnam repellat ex asperiores eos fuga.
        </p>
        <div>
          <nuxt-link 
            class="border border-primary text-primary px-5 py-2 mx-auto text-sm w-full text-center transition-all ease-in-out duration-500 hover:bg-primary/20 hover:text-white hover:border-transparent lg:w-fit lg:text-base" 
            to="/contact"
          >
            Contactez-moi
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
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
            color: 'bg-green-500'
          }, 
          {
            name: 'NuxtJS',
            color: 'bg-green-700'
          },
          {
            name: 'Firebase',
            color: 'bg-orange-400'
          },
          {
            name: 'Tailwind',
            color: 'bg-cyan-500'
          },
        ]
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