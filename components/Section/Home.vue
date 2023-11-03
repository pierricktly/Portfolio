<template>
  <div class="flex min-h-[calc(100vh-150px)] flex-col justify-center">
    <div class="space-y-5 font-bold lg:w-3/4 lg:space-y-8 2xl:space-y-12">
      <p class="text-primary lg:text-[1.4vw]">{{ $t('hello') }}</p>
      <h1 class="text-4xl font-bold lg:text-[4vw]">Pierrick TAÏLY</h1>
      <p class="text-lg font-semibold leading-10 lg:w-3/4 lg:text-[1.3vw]">
        {{ $t('description') }}
      </p>
      <div class="flex gap-5 font-semibold lg:text-[1vw]">
        <button class="bg-primary px-5 py-2 text-secondary hover:bg-primary/90">
          <p>{{ $t('contact') }}</p>
        </button>
        <button
          class="border border-primary px-5 py-2 text-primary hover:bg-primary hover:text-secondary"
        >
          <p>{{ $t('downloadCV') }}</p>
        </button>
      </div>
      <div class="flex gap-5">
        <NuxtLink
          to="/"
          class="transition-all duration-300 ease-in-out hover:text-primary"
        >
          <IconGithub class="h-6 w-6" />
        </NuxtLink>
        <NuxtLink
          to="/"
          class="transition-all duration-300 ease-in-out hover:text-primary"
        >
          <IconLinkedin class="h-6 w-6" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
onBeforeRouteLeave(() => {
  console.log('onBeforeRouteLeave')
})

// called before the element is inserted into the DOM.
// use this to set the "enter-from" state of the element
function onBeforeEnter(el: any) {
  console.log('onBeforeEnter')
}

// called one frame after the element is inserted.
// use this to start the entering animation.
function onEnter(el: any, done: () => void) {
  // call the done callback to indicate transition end
  // optional if used in combination with CSS
  console.log('onEnter')
  done()
}

// called when the enter transition has finished.
function onAfterEnter(el: any) {
  console.log('onAfterEnter')
}

// called when the enter transition is cancelled before completion.
function onEnterCancelled(el: any) {
  console.log('onEnterCancelled')
}

// called before the leave hook.
// Most of the time, you should just use the leave hook
function onBeforeLeave(el: any) {
  console.log('onBeforeLeave')
}

// called when the leave transition starts.
// use this to start the leaving animation.
function onLeave(el: any, done: () => void) {
  // call the done callback to indicate transition end
  // optional if used in combination with CSS
  console.log('onLeave')
  done()
}

// called when the leave transition has finished and the
// element has been removed from the DOM.
function onAfterLeave(el: any) {
  console.log('onAfterLeave')
}

// only available with v-show transitions
function onLeaveCancelled(el: any) {
  console.log('onLeaveCancelled')
}
</script>
