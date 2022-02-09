<template>
  <div>
    <header class="absolute w-full top-0 bg-primary z-50">
      <navigation/>
    </header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
  export default {
    transition: 'page',  
  }
</script>

<style>
  .page-enter-active, .page-leave-active { transition: opacity .5s; }
  .page-enter, .page-leave-active { opacity: 0; }
</style>