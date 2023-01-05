<template>
  <div>
    <header>
      <navigation />
    </header>
    <main class="mb-20 xl:mb-10">
      <Nuxt />
    </main>
  </div>
</template>

<script>
  export default {
    transition: 'page',
  };
</script>

<style>

.page-enter-active,
.page-leave-active {
  transition: all 0.7s;
}
.page-enter {
  transform: translateY(100%);
  opacity: 100;
}
.page-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>