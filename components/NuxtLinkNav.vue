<template>
  <nuxt-link 
    :aria-label="label"
    :to="path"
    class="bg-tertiary text-secondary transition-all ease-in-out duration-500 px-5 py-2"
    :class="{
       'bg-primary text-tertiary' : $route.path === path,
       'hover:bg-primary/70 hover:text-tertiary' : $route.path !== path,
       'rounded-r-full' : right,
        'rounded-l-full' : left,
      }"
  >
    <component
      :is="icon"
      class="w-4 md:w-5 h-4 md:h-5 lg:hidden"
    />
    <p class="font-bold hidden lg:block">
      {{ text }}
    </p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      required: true,
    },
    right: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>