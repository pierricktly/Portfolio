export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      hello: 'Hi, my name is',
      description:
        "I'm a front-end developer, helping companies turn their ideas into working applications so they can help their customers.",
      contact: "Let's Talk!",
      downloadCV: 'Take a look in my resume!',
      githubButton: 'See my projects',
      liveButton: 'See live',
      contactMessage: 'Tell me how I can help you<br>make the world a little<br>better',
    },
    fr: {
      hello: "Bonjour, je m'appelle",
      description:
        "Je suis développeur frontend, j'aide les entreprises à transformer leurs idées en application fonctionnel afin qu'ils puissent venir en aide à leurs clients.",
      contact: 'Discutons-en !',
      downloadCV: 'Jetez un oeil à mon CV !',
      githubButton: 'Voir mes projets',
      liveButton: 'Voir en ligne',
      contactMessage:
        'Dites-moi comment je peux vous aider<br>à rendre le monde un peu<br>meilleur',
    },
  },
}))
