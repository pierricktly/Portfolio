<template>
  <page-template titlePage="A Propos">
    <div class="flex flex-col max-w-5xl mx-auto space-y-5 mb-24 md:mb-0 md:flex-row md:items-center md:mt-20 lg:space-y-0 lg:space-x-10 lg:mt-52">
      <img
        alt="Profile picture"
        src="@/assets/images/profile_picture.png"
        class="bg-primary/20 shadow-inner mx-auto drop-shadow w-60 h-60 rounded-full aspect-square mt-10 md:mt-0
        lg:w-72 lg:h-72 xl:w-80 xl:h-80"
      />
      <div class="px-5 space-y-8 h-full">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et ex magna. Integer volutpat vehicula lorem tincidunt interdum. 
            Sed feugiat, orci sit amet accumsan dignissim, nisi eros vehicula tellus, sit amet convallis leo turpis quis neque. In magna nulla, rutrum et accumsan nec, bibendum pretium elit. Nulla iaculis purus a dictum elementum. Maecenas commodo maximus tincidunt. 
            Praesent accumsan dolor erat, vitae venenatis quam fringilla ut. Suspendisse ac ipsum et risus sollicitudin gravida. Suspendisse consequat non sapien sed mollis. Aliquam condimentum, mauris a egestas ornare, sapien metus fermentum felis, id viverra nisl lorem eget dolor. 
            Integer at iaculis ex. In eget gravida erat.
        </p>
        <div class="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5">
          <button class="bg-primary px-5 py-2 hover:bg-primary/20 transition-all ease-in-out duration-500">
            Télécharger mon CV
          </button>
          <nuxt-link 
            class="border border-primary text-primary px-5 py-2 mx-auto text-sm w-full text-center transition-all ease-in-out duration-500 hover:bg-primary/20 hover:text-white hover:border-transparent lg:w-fit lg:text-base" 
            to="/contact"
          >
            Contactez-moi
          </nuxt-link>
        </div>
      </div>
    </div>
  </page-template>
</template>

<script>
  export default {

  }
</script>