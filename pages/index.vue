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
  <div class="container mx-auto p-5 lg:py-0 lg:px-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
    <section aria-label="Presentation's section" class="bg-secondary shadow shadow-tertiary col-span-full flex flex-col items-center gap-3 p-9 rounded-lg">
      <div class="text-center space-y-2">
        <p class="font-semibold text-lg lg:text-xl text-primary">{{ $t('hello') }}</p>
        <h1 class="font-bold text-2xl lg:text-4xl">Pierrick TAÏLY.</h1>
      </div>
      <p class="max-w-2xl font-semibold text-center lg:text-lg">{{ $t('description') }}</p>
    </section>
    <section class="col-span-full grid grid-cols-3 gap-5">
      <a href="https://www.linkedin.com/in/pierrick-taily/" target="_blank" class="bg-primary shadow shadow-tertiary text-secondary p-5 rounded-lg transition-all duration-300 ease-in-out focus:no-underline hover:text-tertiary">
        <IconLinkedin aria-label="Linkedin Link" class="mx-auto w-7 h-7 lg:w-8 lg:h-8" />
      </a>
      <a href="https://github.com/pierricktly/" target="_blank" class="bg-primary shadow shadow-tertiary text-secondary p-5 rounded-lg transition-all duration-300 ease-in-out focus:no-underline hover:text-tertiary">
        <IconGithub aria-label="Github Link" class="mx-auto w-7 h-7 lg:w-8 lg:h-8" />
      </a>
      <button @click="downloadCVFromFile" class="bg-primary shadow shadow-tertiary text-secondary p-5 rounded-lg transition-all duration-300 ease-in-out focus:no-underline hover:text-tertiary">
        <IconDownload aria-label="Download CV Button" class="mx-auto w-7 h-7 lg:w-8 lg:h-8" />
      </button>
    </section>
    <CardProject
      v-for="project in projects"
      :key="project.name"
      :name="project.name"
      :description="locale === 'en' ? project.description_en : project.description_fr"
      :image="project.img"
      :githubLink="project.github"
      :demoLink="project.demo"
      :tags="project.tags"
      class="bg-tertiary text-secondary shadow shadow-tertiary"
    />
    <section aria-label="Contact's section" class="bg-secondary shadow shadow-tertiary col-span-full flex flex-col items-center gap-3 p-9 rounded-lg">
      <p class="font-semibold text-xl text-center text-tertiary">
        {{ $t('contactMessage') }}
      </p>
      <button @click="copyEmail" class="flex gap-5 px-2 py-1 font-semibold transition-all ease-in-out duration-1000 text-primary hover:bg-primary hover:text-secondary">
        <IconEmail aria-label="Email Copy" class="w-6 h-6" />
        <p>{{ $t('contact') }}</p>
      </button>
    </section>
  </div>
</template>