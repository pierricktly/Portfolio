<template>
  <page-template titlePage="Projet">
    <div class="mb-28 space-y-28 px-5 lg:space-y-0">
      <section-project
        v-for="project in $options.projects()"
        :key="project.name"
        :name="project.name"
        :description="project.description"
        :image="project.image"
        :tags="project.tags"
        :github-link="project.githubLink"
        :online-link="project.onlineLink"
      />
    </div>
  </page-template>
</template>

<script>
export default {
  name: 'Project',

  projects() {
    return [
      {
        name:"Asia Exchange Finder",
        description: "Application communautaire en ligne en utilisant Vue.js, permettant aux étudiants de trouver facilement les universités proposant des échanges universitaires vers l'Asie.",
        image: "https://i.ibb.co/vLGYkj6/AEF.png",
        githubLink: "https://github.com/Zokiasu/asia-exchange-finder",
        onlineLink: "https://asiaexchangefinder.asiastudeler.com/",
        tags: [
          {
            name: 'VueJS',
            color: 'bg-green-500'
          },
          {
            name: 'Firebase',
            color: 'bg-orange-400'
          },
          {
            name: 'Tailwind',
            color: 'bg-cyan-500'
          },
        ],
      },
      {
        name:"Comeback",
        description: "Ce projet vous permet de suivre et de ne pas manquer les sorties d'albums de vos artistes préférés en utilisant les informations partagées par les communautés de fans et en informant automatiquement des sorties d'albums grâce à l'ajout facile de nouveaux artistes.",
        image: "https://i.ibb.co/Sw4ZkC8/Comeback.png",
        githubLink: "https://github.com/Zokiasu/Comeback",
        onlineLink: "https://come-back.netlify.app/",
        tags: [
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
        ],
      },
      {
        name:"Portfolio",
        description: "Ce projet est mon portfolio, où vous pouvez découvrir les derniers projets que j'ai réalisés avec les technologies que j'utilise. En tant que développeur web spécialisé en Vue.js et Nuxt.js, je partage mes réalisations afin de mettre en avant mes compétences en matière de développement web moderne et performant.",
        image: "https://i.ibb.co/SyMwxZq/Portfolio.png",
        githubLink: "https://github.com/Zokiasu/Portfolio",
        onlineLink: "https://zokiasu.com/",
        tags: [
          {
            name: 'VueJS',
            color: 'bg-green-500'
          }, 
          {
            name: 'NuxtJS',
            color: 'bg-green-700'
          },
          {
            name: 'Tailwind',
            color: 'bg-cyan-500'
          },
          {
            name: 'Figma',
            color: 'bg-red-600'
          },
        ],
      },
      {
        name:"Know It",
        description: "Cette application web dédiée aux appareils mobiles, réalisée en freelance pour BLUEPOPCORN PRODUCTION, vous permet de pratiquer l'anglais grâce à une sélection de mini-jeux amusants et divertissants. Optimisée pour une utilisation sur mobile, cette application regroupe tous les jeux nécessaires pour améliorer votre niveau d'anglais tout en vous divertissant.",
        image: "https://i.ibb.co/WGPtYZd/31d337ec-d0d6-41d6-a0df-ea4030746ad5.webp",
        onlineLink: "https://www.know-it.bluepopcorn.fun/",
        tags: [
          {
            name: 'ReactJS',
            color: 'bg-cyan-400'
          }, 
          {
            name: 'ChakraUI',
            color: 'bg-teal-400'
          },
          {
            name: 'Figma',
            color: 'bg-red-600'
          },
        ],
      },
    ];
  },
}
</script>