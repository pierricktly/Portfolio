export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      hello: 'Hi, my name is',
      description: 'I\'m a front-end developer, helping companies turn their ideas into working applications so they can help their customers.',
      contact: 'Contact Me',
      downloadCV: 'Download CV',
      contactMessage: 'Tell me how I can help you make the world a little better'
    },
    fr: {
      hello: 'Bonjour, je m\'appelle',
      description: 'Je suis développeur frontend, j\'aide les entreprises à transformer leurs idées en application fonctionnel afin qu\'ils puissent venir en aide à leurs clients.',
      contact: 'Contactez-moi',
      downloadCV: 'Télécharger mon CV',
      contactMessage: 'Dites-moi comment je peux vous aider à rendre le monde un peu meilleur'
    }
  }
}))
