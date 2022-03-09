<template>
  <div  data-scroll-container>
    <header class="absolute w-full top-0 bg-primary z-50">
      <navigation/>
    </header>
    <main>
      <Nuxt />
    </main>
    <footer>
      <div id="copyright" data-scroll-section class="w-full container mx-auto text-base p-5 text-white">
        <p class="text-center">©2022 Zokiasu - Portfolio</p>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    transition: 'page',  

    mounted() {
      this.scroll = new this.locomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
      });
    },
  }
</script>

<style>
  .page-enter-active, .page-leave-active { transition: opacity .5s; }
  .page-enter, .page-leave-active { opacity: 0; }
</style>