<template>
  <div class="flex min-h-[calc(100vh-150px)] flex-col justify-center">
    <p class="text-center text-2xl font-bold lg:text-4xl">
      {{ $t('projectTitle') }}
    </p>
    <div
      class="remove-scrollbar flex gap-5 overflow-hidden overflow-x-scroll scroll-smooth py-5 sm:p-10 sm:px-5 md:px-0 lg:justify-between lg:gap-10"
    >
      <CardProject
        v-for="i in projects"
        :key="i.name"
        :titleProject="i.name"
        :stacks="i.tags"
        :description="locale === 'en' ? i.description_en : i.description_fr"
        :githubLink="i.github"
        :demoLink="i.demo"
        :pictureLink="i.img"
        class="fade-in"
      />
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const projects = ref([
  {
    name: 'Comeback',
    description_en:
      'Community web app for music release tracking. This app allows users to report on upcoming releases by their favorite artists, and to track upcoming releases shared by the community.',
    description_fr:
      'Application web communautaire de suivis de sortie musicale. Cette application permet aux utilisateurs de reporter les prochaines sorties de leurs artistes favoris et de suivre les prochaines partager par la communauté.',
    img: `/comeback.webp`,
    github: 'https://github.com/pierricktly/comeback-nuxt3',
    demo: 'https://come-back.netlify.app/',
    tags: ['Nuxt 3', 'Vue 3', 'TailwindCSS', 'Firebase'],
  },
  {
    name: 'Asia Exchange Finder',
    description_en:
      'Community web app, enabling students to find and easily reference universities or schools offering university exchanges to Asia.',
    description_fr:
      "Application communautaire, permettant aux étudiants de trouver et référencer simplement les universités ou écoles proposant des échanges universitaires vers l'Asie.",
    img: `/asianExchangeFinder.webp`,
    github: 'https://github.com/pierricktly/asia-exchange-finder',
    demo: 'https://asiastudeler.netlify.app/',
    tags: ['Vue 2', 'TailwindCSS', 'Firebase'],
  },
  {
    name: 'Zordle',
    description_en: 'Simplified copy of the famous wordle game.',
    description_fr: 'Copie simplifié du célèbre jeu wordle.',
    img: `/zordle.webp`,
    github: 'https://github.com/pierricktly/zordle',
    demo: 'https://zordle.netlify.app/',
    tags: ['Nuxt 2', 'Vue 2', 'TailwindCSS'],
  },
])
</script>
