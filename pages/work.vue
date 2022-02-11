<template>
  <div class="container mx-auto p-5 flex flex-col justify-center items-center min-h-screen text-white space-y-14">
    <h2 class="text-5xl font-bold text-secondary">My Portfolio</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <work-card
        v-for="(work, index) in works"
        :key="index"
        :work-name="work.name"
        :work-image="work.image"
        :work-description="work.description"
        :work-link="work.link"
        :work-technology="work.technology"
        class="max-h-80"
      />
    </div>
  </div>
</template>

<script>
  import data from '~/project.json'
  export default {
    name: "Work",
    data() {
      return {
        works: data
      };
    },
  }
</script>