<template>
  <div class="z-10 mx-5 min-w-[25rem] overflow-hidden rounded-lg shadow shadow-tertiary">
    <NuxtImg
      format="webp"
      preload
      alt="Lorem Picsum"
      src="https://picsum.photos/200"
      class="aspect-video w-full object-cover"
    />
    <div class="flex flex-col justify-between space-y-5 bg-primary/50 p-5 xl:space-y-8">
      <div class="space-y-3 xl:space-y-5">
        <div class="space-y-1.5">
          <h2 class="text-2xl font-semibold">Title Project</h2>
          <div class="flex gap-2 text-xs font-semibold uppercase">
            <p class="rounded border border-tertiary px-2">Stack</p>
            <p class="rounded border border-tertiary px-2">Stack</p>
            <p class="rounded border border-tertiary px-2">Stack</p>
          </div>
        </div>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque ipsa
          quibusdam voluptates asperiores, quisquam ab a veniam, minus, at obcaecati
          incidunt laboriosam praesentium ipsum dolorem soluta iste voluptate magnam.
        </p>
      </div>
      <div class="flex flex-col gap-2 text-xs lg:flex-row">
        <button
          class="flex items-center gap-2 bg-primary px-3 py-2 text-secondary hover:bg-primary/90"
        >
          <IconGithub class="h-4 w-4" />
          <p>See my code</p>
        </button>
        <button
          class="flex items-center gap-2 border border-primary px-3 py-2 text-primary hover:bg-primary hover:text-secondary"
        >
          <IconLinkexternal class="h-4 w-4" />
          <p>Live Version</p>
        </button>
      </div>
    </div>
  </div>
</template>
