<template>
  <div class="min-h-screen">
    <div class="container mx-auto min-h-screen overflow-y-auto px-5">
      <h2 class="bookman font-bold text-5xl text-center mt-10 md:mt-20">{{ titlePage }}</h2>
      <slot />
    </div>
  </div>
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