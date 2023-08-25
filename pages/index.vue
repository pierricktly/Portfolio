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
  <div class="container mx-auto p-5 min-h-screen space-y-2">
    <section aria-label="Presentation's section" class="bg-secondary text-tertiary flex flex-col items-center gap-2 p-8 rounded-lg">
      <h1 class="font-bold text-3xl">Hello, I'm Pierrick TAÏLY.</h1>
      <p>I'm a front-end developer, mostly working with Vue & Nuxt</p>
      <button @click="copyEmail" class="flex gap-2 pt-3 font-semibold transition-all ease-in-out duration-300 hover:text-prim-800">
        <IconEmail aria-label="Linkedin Link" class="w-6 h-6" />
        <p>Contact Me</p>
      </button>
    </section>
    <section aria-label="Link's section" class="grid grid-cols-1 gap-2 md:grid-cols-3">
      <a href="https://www.linkedin.com/in/pierrick-taily/" target="_blank" class="bg-[#0E76A8] rounded-lg duration-300 transition-all ease-in-out flex gap-2 p-5 items-center justify-center md:p-8 md:flex-col md:gap-0 hover:bg-[#0c3045]">
        <IconLinkedin aria-label="Linkedin Link" class="w-6 h-6" />
        <p>Linkedin</p>
      </a>
      <a href="https://github.com/pierricktly/" target="_blank" class="bg-[#333333] rounded-lg duration-300 transition-all ease-in-out flex gap-2 p-5 items-center justify-center md:p-8 md:flex-col md:gap-0 hover:bg-[#262626]">
        <IconGithub aria-label="Github Link" class="w-6 h-6" />
        <p>Github</p>
      </a>
      <button @click="downloadCVFromFile" class="bg-prim-700 rounded-lg duration-300 transition-all ease-in-out flex gap-2 p-5 items-center justify-center md:p-8 md:flex-col md:gap-0 hover:bg-prim-900">
        <IconDownload aria-label="Download CV Button" class="w-6 h-6" />
        <p>Download CV</p>
      </button>
    </section>
    <section aria-label="Project's section" class="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
        <CardProject
          v-for="project in projects"
          :key="project.name"
          :name="project.name"
          :image="project.img"
          :githubLink="project.github"
          :demoLink="project.demo"
          :tags="project.tags"
        />
    </section>
  </div>
</template>