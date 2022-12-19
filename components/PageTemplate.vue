<template>
  <section class="min-h-screen">
    <div class="container mx-auto min-h-screen overflow-y-auto">
      <p class="bookman font-bold text-5xl text-center mt-10 mb-10 md:mt-20">{{ titlePage }}</p>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    titlePage: {
      type: String,
      required: true
    }
  }
}
</script>