<template>
  <div class="flex min-h-[calc(100dvh-150px)] flex-col justify-center">
    <p class="text-center text-2xl font-bold lg:text-4xl">
      {{ $t('projectTitle') }}
    </p>
    <div
      class="remove-scrollbar flex gap-10 overflow-hidden overflow-x-scroll scroll-smooth py-5 sm:p-10 sm:px-5 md:px-0 lg:justify-between"
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
      'A web application that provides a platform for users to keep track of and report on music releases, integrating community contributions for a curated feed of musical updates.',
    description_fr:
      "Une application web qui offre une plateforme aux utilisateurs pour suivre et signaler les sorties musicales, intégrant les contributions communautaires pour un fil d'actualités musicales organisé.",
    img: `/comeback.webp`,
    github: 'https://github.com/pierricktly/comeback-nuxt3',
    demo: 'https://come-back.netlify.app/',
    tags: ['Nuxt 3', 'Vue 3', 'TailwindCSS', 'Firebase'],
  },
  {
    name: 'YG Corporate Website',
    description_en:
      'Fictional redesign of the YG Entertainment website: modernized, simplified homepage with a clear interface and user-friendly menu.',
    description_fr:
      "Refonte fictive du site YG Entertainment : une page d'accueil modernisée et simplifiée, offrant une interface claire et un menu facilitant la navigation.",
    img: `/ygCorporate.png`,
    github: 'https://github.com/pierricktly/yg-corporate-website',
    demo: 'https://yg-corporate.netlify.app/',
    tags: ['Nuxt 3', 'Vue 3', 'TailwindCSS'],
  },
  {
    name: 'Asia Exchange Finder',
    description_en:
      'A web application designed to help students find university exchange programs to Asia, providing a platform for easy access to and sharing of program information.',
    description_fr:
      "Application web destinée à aider les étudiants à trouver des programmes d'échange universitaire vers l'Asie, offrant une plateforme pour un accès et partage facile des informations de programme.",
    img: `/asianExchangeFinder.webp`,
    github: 'https://github.com/pierricktly/asia-exchange-finder',
    demo: 'https://asiastudeler.netlify.app/',
    tags: ['Vue 2', 'TailwindCSS', 'Firebase'],
  },
  {
    name: 'Zordle',
    description_en:
      'A web-based word game inspired by Wordle, simplified for ease of use, providing daily word puzzles for language practice and entertainment.',
    description_fr:
      'Un jeu de mots basé sur le web, inspiré par Wordle et simplifié pour une utilisation facile, offrant des énigmes aléatoire en anglais pour la pratique linguistique et le divertissement.',
    img: `/zordle.webp`,
    github: 'https://github.com/pierricktly/zordle',
    demo: 'https://zordle.netlify.app/',
    tags: ['Nuxt 2', 'Vue 2', 'TailwindCSS'],
  },
])
</script>
