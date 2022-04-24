<template>
  <div class="scroll-smooth">
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