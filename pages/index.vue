<template>
	<div class="text-white">
		<section class="w-full min-h-screen mx-auto p-5 flex flex-col space-y-20 items-center lg:hidden">
			<div class="mx-auto">
				<h1
					class="text-center whitespace-pre-line leading-loose text-3xl lg:text-4xl"
				>
					Hello, I'm
					<span class="font-bold text-5xl lg:text-7xl text-secondary"
						>Pierrick</span
					>
					a Frontend Developer
				</h1>
			</div>
			<div class="mx-auto">
				<img
					alt="Profile picture"
					src="../assets/images/profile_picture.png"
					class="bg-gray-500 w-48 rounded-full aspect-square"
				/>
			</div>
			<div class="text-xl mx-auto">
				<a
					data-scroll-to
					href="#contact"
					class="bg-secondary px-5 py-2 rounded hover:bg-secondary/70"
					>Contact</a
				>
			</div>
			<div class="bottom-2 w-full md:absolute">
				<div class="mx-auto items-center text-center">
					<icon-mouse class="w-8 h-8 mx-auto animate-bounce"/>
					<p class="font-semibold">Scroll to see more</p>
				</div>
			</div>
		</section>
		<section class="hidden min-h-screen lg:flex">
			<div class="container flex my-auto mx-auto">
				<div class="my-auto space-y-10">
					<div>
						<p class="text-4xl lg:text-[5rem] lg:whitespace-preline lg:leading-none leading-tight">
							Hi,<br />I'm
							<span class="text-secondary font-semibold">Pierrick</span>,<br />a
							frontend developer
						</p>
					</div>
					<div>
						<nuxt-link
							to="/contact"
							class="bg-secondary px-5 py-2 rounded hover:bg-secondary/70"
							>
							Contact me
						</nuxt-link>
					</div>
				</div>
				<div class="absolute hidden lg:block right-0 -translate-y-20 -z-10">
					<img src="../assets/images/redpanda.png" alt="" class="xl:h-[35rem]" />
				</div>
			</div>
			<div class="bottom-2 lg:bottom-5 w-full md:absolute">
				<div class="mx-auto items-center text-center">
					<icon-mouse class="w-8 h-8 mx-auto animate-bounce"/>
					<p class="font-semibold">Scroll to see more</p>
				</div>
			</div>
		</section>
		<page-section class="bg-[#17202C] border-y border-primary/50 shadow-inner mt-14">
			<template #title>
				My Stack
			</template>
			<template>
				<div class="space-y-10">
					<category-stack 
						v-for="(category, index) in categoryStack"
						:key="index"
						:category-name="category.name"
						:stack-list="category.stacks"
					/>
				</div>
			</template>
		</page-section>
		<div class="container mx-auto divide-y divide-slate-700/90">
			<page-section>
				<template #title>
					Portfolio
				</template>
				<template>
					<portfolio-section :projects="projects"/>
				</template>
			</page-section>
			<page-section>
				<template #title>
					Contact Me
				</template>
				<template #subtitle>
					You want to work with me? Tell me about your project and let's work together!
				</template>
				<div class="my-72">
					<p class="font-bold text-9xl text-center">Click here to copy</p>
				</div>
			</page-section>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",

	data() {
		return {
			categoryStack: [
				{
					name: "Front",
					stacks: [{
						name: "HTML",
						icon: "html"
					}, {
						name: "CSS",
						icon: "css"
					}, {
						name: "JavaScript",
						icon: "javascript"
					}, {
						name: "VueJS",
						icon: "vue"
					}, {
						name: "NuxtJS",
						icon: "nuxt"
					}, {
						name: "TailwindCss",
						icon: "tailwind"
					}]
				},
				{
					name: "Tool",
					stacks: [{
						name: "Github",
						icon: "github"
					}]
				},
				{
					name: "Back",
					stacks: [{
						name: "Firebase",
						icon: "firebase"
					}]
				},
			],
			projects: [
				{
					name: "Project 1",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: "https://picsum.photos/500/300",
					link: "",
					stack: ['vue', 'nuxt', 'tailwind']
				},
				{
					name: "Project 2",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: "https://picsum.photos/500/300",
					link: "",
					stack: ['vue', 'nuxt', 'tailwind']
				},
				{
					name: "Project 3",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: "https://picsum.photos/500/300",
					link: "",
					stack: ['vue', 'nuxt', 'tailwind']
				},
				{
					name: "Project 4",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
					image: "https://picsum.photos/500/300",
					link: "",
					stack: ['vue', 'nuxt', 'tailwind']
				},
			]
		}
	}
}
</script>