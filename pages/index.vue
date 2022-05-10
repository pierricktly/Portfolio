<template>
	<div class="text-white">
		<section
			id="home"
			class="w-full min-h-screen mx-auto p-5 flex flex-col space-y-20 items-center lg:hidden"
		>
			<div class="mx-auto">
				<h1
					class="text-center whitespace-pre-line leading-loose text-2xl lg:text-4xl"
				>
					Salut, je m'appelle
					<span class="font-bold text-5xl lg:text-7xl text-secondary"
						>Pierrick</span
					>
					Je suis développeur front-end
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
					<icon-mouse class="w-8 h-8 mx-auto animate-bounce" />
					<p class="font-semibold">Scroll to see more</p>
				</div>
			</div>
		</section>
		<section id="home" class="hidden min-h-screen lg:flex -mt-20">
			<div class="container flex my-auto mx-auto">
				<div class="my-auto space-y-10">
					<div class="space-y-10">
						<p
							class="text-4xl lg:text-[5rem] lg:whitespace-preline lg:leading-none leading-tight"
						>
							Salut, je m'appelle
							<span class="text-secondary font-semibold">Pierrick</span>
						</p>
						<p
							class="text-4xl lg:whitespace-preline lg:leading-none leading-tight"
						>
							Je suis développeur front-end
						</p>
					</div>
				</div>
				<div class="absolute hidden lg:block right-0 -translate-y-20 -z-10">
					<img
						src="../assets/images/redpanda.png"
						alt=""
						class="xl:h-[35rem]"
					/>
				</div>
			</div>
			<div class="bottom-2 lg:bottom-5 w-full md:absolute">
				<div class="mx-auto items-center text-center">
					<icon-mouse class="w-8 h-8 mx-auto animate-bounce" />
					<p class="font-semibold">Scroll</p>
				</div>
			</div>
		</section>
		<page-section idSection="work" class="py-20">
			<template #title> Mes projets </template>
			<template>
				<portfolio-section :projects="$options.projects()" />
			</template>
		</page-section>
		<page-section
			idSection="stack"
			class="bg-[#17202C] border-y border-primary/50 shadow-inner space-y-14 py-20"
		>
			<template #title>Mes technos</template>
			<ul class="flex flex-wrap gap-8 justify-evenly mx-auto">
				<li class="space-y-5">
					<icon-vue
						class="bg-gray-400/10 border border-gray-400/10 p-10 rounded-3xl w-40 h-40 mx-auto cursor-pointer transition ease-in-out hover:-translate-y-1 hover:bg-[#001D37]/30 hover:border-white/10 hover:scale-110 duration-500"
					/>
					<p class="text-xl font-semibold text-center">Vue</p>
				</li>
				<li class="space-y-5">
					<icon-nuxt
						class="bg-gray-400/10 border border-gray-400/10 p-10 rounded-3xl w-40 h-40 mx-auto cursor-pointer transition ease-in-out hover:-translate-y-1 hover:bg-[#001D37]/30 hover:border-white/10 hover:scale-110 duration-500"
					/>
					<p class="text-xl font-semibold text-center">Nuxt</p>
				</li>
				<li class="space-y-5">
					<icon-tailwind
						class="bg-gray-400/10 border border-gray-400/10 p-10 rounded-3xl w-40 h-40 mx-auto cursor-pointer transition ease-in-out hover:-translate-y-1 hover:bg-[#001D37]/30 hover:border-white/10 hover:scale-110 duration-500"
					/>
					<p class="text-xl font-semibold text-center">Tailwind</p>
				</li>
				<li class="space-y-5">
					<icon-firebase
						class="bg-gray-400/10 border border-gray-400/10 p-10 rounded-3xl w-40 h-40 mx-auto cursor-pointer transition ease-in-out hover:-translate-y-1 hover:bg-[#001D37]/30 hover:border-white/10 hover:scale-110 duration-500"
					/>
					<p class="text-xl font-semibold text-center">Firebase</p>
				</li>
			</ul>
		</page-section>
		<page-section idSection="contact" class="py-20">
			<template #title>Besoin d'un développeur ?</template>
			<div class="space-y-20 font-semibold mt-10">
				<div class="text-center text-xl space-y-20">
					<p>Une idée ? Un projet ? Vous souhaitez travaillez avec moi ?</p>
					<button @click="copyEmail()" class="hover-underline-animation">
						Envoyez moi un mail
					</button>
				</div>
				<p class="text-center text-xl">OU</p>
				<div class="mx-auto text-center">
					<a
						href="mailto:pierrick.tly@gmail.com"
						class="border border-secondary bg-secondary/10 py-6 px-4 rounded transition-all ease-in-out duration-500 hover:bg-secondary hover:-translate-y-1 inline-block"
					>
						Contactez-moi !
					</a>
				</div>
			</div>
		</page-section>
	</div>
</template>

<script>
import IconFirebase from "~/components/Icon/IconFirebase.vue";
import IconNuxt from "~/components/Icon/IconNuxt.vue";
import IconTailwind from "~/components/Icon/IconTailwind.vue";
import IconVue from "~/components/Icon/IconVue.vue";
export default {
	components: { IconFirebase, IconTailwind, IconNuxt, IconVue },
	name: "Home",

	data() {
		return {};
	},

	projects() {
		return [
			{
				name: "Project 1",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				image: "https://picsum.photos/500/300",
				link: "",
				stack: ["vue", "nuxt", "tailwind"],
				theme: ["design"],
			},
			{
				name: "Project 2",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				image: "https://picsum.photos/500/300",
				link: "",
				stack: ["vue", "nuxt", "tailwind"],
				theme: ["development"],
			},
			{
				name: "Project 3",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				image: "https://picsum.photos/500/300",
				link: "",
				stack: ["vue", "nuxt", "tailwind"],
				theme: ["development"],
			},
			{
				name: "Project 4",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				image: "https://picsum.photos/500/300",
				link: "",
				stack: ["vue", "nuxt", "tailwind"],
				theme: ["design"],
			},
		];
	},

	methods: {
		copyEmail() {
			navigator.clipboard.writeText("pierrick.tly@gmail.com");
			this.$toasted.show("Email copied!", {
				position: "bottom-center",
				duration: 5000,
			});
		},
	},
};
</script>