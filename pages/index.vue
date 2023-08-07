<script setup>
const projects = ref([])
projects.value = [
  {
    name: 'Comeback v2',
    img: 'https://i.ibb.co/D79yDcX/Sans-titre.png',
    github: 'https://github.com/pierricktly/comeback-nuxt3',
    demo: 'https://come-back-nuxt3.netlify.app/',
    tags: ['Nuxt 3', 'Vue 3', 'TailwindCSS', 'Firebase']
  },
  {
    name: 'Comeback v1',
    img: 'https://i.ibb.co/FW7P321/Comeback.png',
    github: 'https://github.com/pierricktly/comeback-nuxt2',
    demo: 'https://come-back.netlify.app/',
    tags: ['Nuxt 2', 'Vue 2', 'TailwindCSS', 'Firebase']
  },
  {
    name: 'Asia Exchange Finder',
    img: 'https://i.ibb.co/vLGYkj6/AEF.png',
    github: 'https://github.com/pierricktly/asia-exchange-finder',
    demo: 'https://asiastudeler.netlify.app/',
    tags: ['Nuxt 2', 'Vue 2', 'TailwindCSS']
  },
  {
    name: 'Zordle',
    img: 'https://i.ibb.co/ryyLLSf/zordle.jpg',
    github: 'https://github.com/pierricktly/zordle',
    demo: 'https://zordle.netlify.app/',
    tags: ['Nuxt 2', 'Vue 2', 'TailwindCSS']
  },
]

const copyEmail = () => {
  const email = 'pierrick.tly@gmail.com'
  navigator.clipboard.writeText(email)
}

const downloadCVFromFile = () => {
  const link = document.createElement('a')
  link.href = '/CV_FRONTEND_TAILY_PIERRICK.pdf'
  link.download = 'CV_FRONTEND_TAILY_PIERRICK.pdf'
  link.click()
}
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center p-5">
    <div class="container mx-auto space-y-5">
      <section class="shadow shadow-secondary p-5 rounded space-y-3">
        <h1 class="font-bold text-3xl">Hello, I'm Pierrick TAÏLY.</h1>
        <p>I'm a front-end developer, mostly working with Vue & Nuxt</p>
        <div class="space-x-2">
          <button @click="downloadCVFromFile" class="bg-primary text-tertiary rounded py-2 px-3 transition-all duration-300 ease-in-out hover:bg-primary/80">Download CV</button>
          <button @click="copyEmail" class="bg-primary text-tertiary rounded py-2 px-3 transition-all duration-300 ease-in-out hover:bg-primary/80">Copy Email</button>
        </div>
      </section>
      <section class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <NuxtLink to="https://www.linkedin.com/in/pierrick-taily/" target="_blank" class="shadow shadow-secondary hover:bg-secondary/10 flex items-center justify-between rounded p-3 transition-all duration-300 ease-in-out">
          <div class="flex items-center gap-3">
            <icon-linkedin class="w-5 h-5" />
            <p class="font-semibold uppercase">Linkedin</p>
          </div>
          <icon-arrowLeft class="w-5 h-5" />
        </NuxtLink>
        <NuxtLink to="https://github.com/pierricktly" target="_blank" class="shadow shadow-secondary hover:bg-secondary/10 flex items-center justify-between rounded p-3 transition-all duration-300 ease-in-out">
          <div class="flex items-center gap-3">
            <icon-github class="w-5 h-5" />
            <p class="font-semibold uppercase">Github</p>
          </div>
          <icon-arrowLeft class="w-5 h-5" />
        </NuxtLink>
      </section>
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5">
        <div v-for="project in projects" :key="project.name" class="shadow shadow-secondary p-2 space-y-2 rounded">
          <nuxt-img
            :src="project.img"
            class="shadow shadow-secondary rounded aspect-video"
          />
          <h2 class="font-semibold text-xl">{{ project.name }}</h2>
          <div class="flex flex-wrap gap-1">
            <p v-for="tag in project.tags" :key="tag" class="rounded uppercase text-xs font-semibold border border-secondary px-2 py-1">{{ tag }}</p>
          </div>
          <div class="grid grid-cols-2 gap-1">
            <NuxtLink :to="project.github" target="_blank" class="bg-primary text-tertiary text-center rounded uppercase text-sm font-semibold px-2 py-1 transition-all duration-300 ease-in-out hover:bg-primary/80">Github</NuxtLink>
            <NuxtLink :to="project.demo" target="_blank" class="bg-primary text-tertiary text-center rounded uppercase text-sm font-semibold px-2 py-1 transition-all duration-300 ease-in-out hover:bg-primary/80">Live Demo</NuxtLink>
          </div>
        </div>
      </section>
    </div>
    <div class="p-5">
      <p class="text-center font-semibold">©{{ new Date().getFullYear() }} - Pierrick TAÏLY</p>
    </div>
  </div>
</template>