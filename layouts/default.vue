<template>
  <div class="scroll-smooth">
    <header class="sticky top-0 pt-5 z-10 transition-all transform duration-700 ease-out">
      <navigation />
    </header>
    <main>
      <Nuxt />
    </main>
    <footer>
      <footer-section />
    </footer>
  </div>
</template>

<script>
  export default {
    transition: 'page',
    data() {
      return {
        scroll: 0,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.scroll = window.scrollY;
        if (this.scroll > window.innerHeight * 0.05) {
          this.$el.querySelector('header').classList.add('bg-primary');
          this.$el.querySelector('header').classList.remove('pt-5');
        } else {
          this.$el.querySelector('header').classList.remove('bg-primary');
          this.$el.querySelector('header').classList.add('pt-5');
        }
      },
    },
  };
</script>

<style>
  .page-enter-active, .page-leave-active { transition: opacity .5s; }
  .page-enter, .page-leave-active { opacity: 0; }
</style>