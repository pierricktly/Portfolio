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