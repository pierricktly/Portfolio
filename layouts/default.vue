<template>
  <div>
    <header>
      <navigation />
    </header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
  export default {
    transition: 'page',
    // data() {
    //   return {
    //     scroll: 0,
    //   };
    // },
    // mounted() {
    //   window.addEventListener('scroll', this.handleScroll);
    // },
    // destroyed() {
    //   window.removeEventListener('scroll', this.handleScroll);
    // },
    // methods: {
    //   handleScroll() {
    //     this.scroll = window.scrollY;
    //     if (this.scroll > window.innerHeight * 0.05) {
    //       this.$el.querySelector('header').classList.add('bg-primary');
    //       this.$el.querySelector('header').classList.remove('md:pt-5');
    //     } else {
    //       this.$el.querySelector('header').classList.remove('bg-primary');
    //       this.$el.querySelector('header').classList.add('md:pt-5');
    //     }
    //   },
    // },
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Maven+Pro&family=Roboto+Flex:opsz,wght@8..144,300&display=swap');
  
  html {
    font-family: 'Maven Pro', sans-serif;
  }

  .page-enter-active, .page-leave-active { transition: opacity .5s; }
  .page-enter, .page-leave-active { opacity: 0; }
</style>