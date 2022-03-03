<template>
  <div class="container mx-auto p-5 flex flex-col justify-center items-center h-screen text-white space-y-14">
    <img alt="Profile picture" src="../assets/images/profile_picture.png" class="bg-gray-500 w-48 md:w-60 lg:w-80 rounded-full aspect-square"/>
    <h2 class="text-5xl font-bold text-secondary">About Me</h2>
    <p class="text-center whitespace-pre-line md:text-xl lg:text-2xl">
      I’m a french frontend developer. 
      Passionate about development and travel, I am surrounded by a multitude of sources of inspiration for new ideas, new projects or just simple improvements.
    </p>
    <div class="flex space-x-5">
      <a href="https://www.linkedin.com/in/pierrick-taily/" target="_blank">
        <icon-linkedin class="w-10 h-10 text-white hover:text-secondary transition-all duration-500 ease-in-out"/>
      </a>
      <a href="https://github.com/Zokiasu" target="_blank">
        <icon-github class="w-10 h-10 text-white hover:text-secondary transition-all duration-500 ease-in-out"/>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "About",

    created(){
      this.$ga.page('/about')
    }
  }
</script>