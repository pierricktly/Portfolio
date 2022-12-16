import Vue from 'vue'

Vue.directive('fade-image', {
  bind(el, binding, vnode) {
    // Ajoute un écouteur d'événement "load" à l'image
    el.addEventListener('load', () => {
      // Lorsque l'image est chargée, ajoute une classe CSS qui ajoutera un effet de fondu
      el.classList.add('fade-in')
    })
  },
  inserted(el, binding, vnode) {
    // Ajoute une classe CSS qui rendra l'image floue jusqu'à ce qu'elle soit chargée
    el.classList.add('blur')
  }
})
