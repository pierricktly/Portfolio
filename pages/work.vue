<template>
  <div class="lg:container mx-auto p-5 flex flex-col lg:justify-center lg:items-center lg:h-screen text-white space-y-14">
    <h2 class="text-5xl font-bold text-secondary">My Portfolio</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <work-card
        v-for="(work, index) in works"
        :key="index"
        :work-name="work.name"
        :work-image="work.image"
        class=" shadow"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "Work",
    data() {
      return {
        works: [
          {
            name: "Project 1",
            image: "https://picsum.photos/400/200"
          },
          {
            name: "Project 2",
            image: "https://picsum.photos/400/200"
          },
          {
            name: "Project 3",
            image: "https://picsum.photos/400/200"
          },
          {
            name: "Project 4",
            image: "https://picsum.photos/400/200"
          },
        ],
      };
    },
  }
</script>