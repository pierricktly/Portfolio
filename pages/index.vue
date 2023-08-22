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
  alert('Email copied to clipboard')
}

const downloadCVFromFile = () => {
  const link = document.createElement('a')
  link.href = '/CV_FRONTEND_TAILY_PIERRICK.pdf'
  link.download = 'CV_FRONTEND_TAILY_PIERRICK.pdf'
  link.click()
}
</script>

<template>
  <div class="container mx-auto p-5 min-h-screen space-y-10">
      <div class="flex flex-col justify-center p-10 space-y-3 xl:col-span-2 bg-tertiary text-secondary">
      <h1 class="font-bold text-3xl">Hello, I'm Pierrick TAÏLY.</h1>
      <p>I'm a front-end developer, mostly working with Vue & Nuxt</p>
      <div class="flex gap-3">
        <button @click="copyEmail" class="max-w-fit uppercase font-semibold drop-shadow bg-tertiary px-2 py-1 rounded transition-all ease-in-out duration-300 hover:bg-primary hover:text-tertiary">
          Copy Email
        </button>
        <button @click="downloadCVFromFile" class="max-w-fit uppercase font-semibold drop-shadow bg-tertiary px-2 py-1 rounded transition-all ease-in-out duration-300 hover:bg-primary hover:text-tertiary">
          Download CV
        </button>
      </div>
    </div>
    <section aria-label="Section projets" class="flex flex-wrap gap-10 justify-between">
      <div v-for="project in projects" :key="project.name" class="space-y-2">
        <CardProject
          :link="project.demo"
          :image="project.img"
          :name="project.name"
        />
        <div class="flex justify-between items-end">
          <h2 class="uppercase text-lg font-semibold pr-2">
            {{ project.name }}
          </h2>
          <a
            :href="project.github"
            target="_blank"
            class="uppercase px-2 hover:text-primary transition-all duration-300 ease-in-out"
          >
            <IconGithub aria-label="Github Link" class="w-6 h-6" />
          </a>
        </div>
        <div class="flex divide-x-2 text-sm uppercase items-center -ml-2">
          <p v-for="tag in project.tags" :key="tag" class="px-2">
            {{ tag }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>