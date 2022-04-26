<template>
  <div class="scroll-smooth">
    <header class="absolute w-full top-0 transition-all transform duration-700 ease-out">
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
        if (this.scroll > window.innerHeight * 0.01) {
          this.$el.querySelector('header').classList.add('bg-black');
          this.$el.querySelector('header').classList.remove('absolute');
          this.$el.querySelector('header').classList.add('sticky');
          this.$el.querySelector('header').classList.add('z-10');
        } else {
          this.$el.querySelector('header').classList.remove('bg-black');
          this.$el.querySelector('header').classList.add('absolute');
          this.$el.querySelector('header').classList.remove('sticky');
          this.$el.querySelector('header').classList.remove('z-10');
        }
      },
    },
  };
</script>

<style>
  .page-enter-active, .page-leave-active { transition: opacity .5s; }
  .page-enter, .page-leave-active { opacity: 0; }
</style>