<template>
  <page-template titlePage="Project">
    <div class="mt-10 mb-28 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <project-card v-for="i in 8" :key="i" />
    </div>
  </page-template>
</template>

<script>
export default {
  name: 'Project',
  data() {
    return {
      // Data
    }
  },
  methods: {
    // Methods
  },
  computed: {
    // Computed
  },
  watch: {
    // Watch
  },
  mounted() {
    // Mounted
  }
}
</script>