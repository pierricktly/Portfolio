<script setup>
const projects = ref([])
const { locale } = useI18n()

projects.value = [
  {
    name: 'Comeback',
    description_en:'Community web app for music release tracking. This app allows users to report on upcoming releases by their favorite artists, and to track upcoming releases shared by the community.',
    description_fr: 'Application web communautaire de suivis de sortie musicale. Cette application permet aux utilisateurs de reporter les prochaines sorties de leurs artistes favoris et de suivre les prochaines partager par la communauté.',
    img: 'https://i.ibb.co/D79yDcX/Sans-titre.png',
    github: 'https://github.com/pierricktly/comeback-nuxt3',
    demo: 'https://come-back-nuxt3.netlify.app/',
    tags: ['Nuxt 3', 'Vue 3', 'TailwindCSS', 'Firebase']
  },
  {
    name: 'Asia Exchange Finder',
    description_en: 'Community web app, enabling students to find and easily reference universities or schools offering university exchanges to Asia.',
    description_fr: 'Application communautaire, permettant aux étudiants de trouver et référencer simplement les universités ou écoles proposant des échanges universitaires vers l\'Asie.',
    img: 'https://i.ibb.co/vLGYkj6/AEF.png',
    github: 'https://github.com/pierricktly/asia-exchange-finder',
    demo: 'https://asiastudeler.netlify.app/',
    tags: ['Vue 2', 'TailwindCSS', 'Firebase']
  },
  {
    name: 'Zordle',
    description_en: 'Simplified copy of the famous wordle game.',
    description_fr: 'Copie simplifié du célèbre jeu wordle.',
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
  <div class="container mx-auto p-5 space-y-2">
    <section aria-label="Presentation's section" class="bg-secondary text-tertiary flex flex-col items-center gap-3 p-9 rounded-lg">
      <div class="text-center space-y-2">
        <p class="font-semibold text-xl text-primary">{{ $t('hello') }}</p>
        <h1 class="font-bold text-4xl text-tertiary">Pierrick TAÏLY.</h1>
      </div>
      <p class="max-w-xl font-semibold text-center text-lg">{{ $t('description') }}</p>
    </section>
    <section aria-label="Link's section" class="font-semibold grid grid-cols-1 gap-2 md:grid-cols-3">
      <a href="https://www.linkedin.com/in/pierrick-taily/" target="_blank" class="bg-[#0E76A8] rounded-lg duration-300 transition-all ease-in-out flex gap-2 p-5 items-center justify-center md:p-8 md:flex-col hover:bg-[#0c3045]">
        <IconLinkedin aria-label="Linkedin Link" class="w-7 h-7 md:w-8 md:h-8" />
        <p>Linkedin</p>
      </a>
      <a href="https://github.com/pierricktly/" target="_blank" class="bg-[#333333] rounded-lg duration-300 transition-all ease-in-out flex gap-2 p-5 items-center justify-center md:p-8 md:flex-col hover:bg-[#262626]">
        <IconGithub aria-label="Github Link" class="w-7 h-7 md:w-8 md:h-8" />
        <p>Github</p>
      </a>
      <button @click="downloadCVFromFile" class="bg-prim-700 rounded-lg duration-300 transition-all ease-in-out flex gap-2 p-5 items-center justify-center md:p-8 md:flex-col hover:bg-prim-900">
        <IconDownload aria-label="Download CV Button" class="w-7 h-7 md:w-8 md:h-8" />
        <p>{{ $t('downloadCV') }}</p>
      </button>
    </section>
    <section aria-label="Project's section" class="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
        <CardProject
          v-for="project in projects"
          :key="project.name"
          :name="project.name"
          :description="locale === 'en' ? project.description_en : project.description_fr"
          :image="project.img"
          :githubLink="project.github"
          :demoLink="project.demo"
          :tags="project.tags"
        />
    </section>
    <section aria-label="Contact's section" class="bg-secondary text-tertiary flex flex-col items-center gap-5 p-9 rounded-lg">
      <p class="font-semibold text-2xl text-tertiary">
        {{ $t('contactMessage') }}
      </p>
      <button @click="copyEmail" class="flex gap-2 px-2 py-1 font-semibold transition-all ease-in-out duration-1000 text-primary hover:bg-primary hover:text-secondary">
        <IconEmail aria-label="Email Copy" class="w-6 h-6" />
        <p>{{ $t('contact') }}</p>
      </button>
    </section>
  </div>
</template>