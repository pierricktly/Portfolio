<template>
  <div class="flex min-h-[calc(100vh-150px)] flex-col items-center justify-center">
    <div
      class="z-10 mx-20 flex min-w-[25rem] max-w-[60rem] flex-col overflow-hidden rounded-lg shadow shadow-tertiary lg:flex-row"
    >
      <NuxtImg
        format="webp"
        preload
        alt="Lorem Picsum"
        src="/images/about_picture.jpg"
        class="aspect-video w-full object-cover lg:aspect-square lg:min-w-[30rem]"
      />
      <div
        class="flex h-full flex-col justify-between space-y-20 bg-primary/50 p-8 sm:p-10 lg:aspect-square lg:h-fit lg:space-y-0"
      >
        <div class="space-y-3">
          <h2 class="text-2xl font-semibold">Title Project</h2>
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque ipsa
            quibusdam voluptates asperiores, quisquam ab a veniam, minus, at obcaecati
            incidunt laboriosam praesentium ipsum dolorem soluta iste voluptate magnam.
          </p>
        </div>
        <div class="flex flex-col items-center justify-center gap-2 text-xs lg:flex-row">
          <button
            class="border border-primary px-3 py-2 font-bold text-primary hover:bg-primary hover:text-secondary"
          >
            {{ $t('downloadCV') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
