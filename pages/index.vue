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
					Hello, je m'appelle
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
							Hello, je m'appelle
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
			<template #subtitle><p>Une idée ? Un projet ? N'hésitez pas contactez-moi !</p></template>
			<div class="py-40 space-y-10 lg:space-y-0 lg:flex lg:space-x-10 lg:justify-center lg:items-center">
				<div class="text-center lg:text-xl space-y-20">
					<button @click="copyEmail()" class="bg-secondary py-3 lg:py-6 px-4 rounded 
					transition-all ease-in-out duration-500 hover:bg-secondary/80 hover:-translate-y-1 inline-block">
						Copier mon mail
					</button>
				</div>
				<p class="text-center text-xl">OU</p>
				<div class="mx-auto text-center">
					<a
						href="mailto:pierrick.tly@gmail.com"
						class="border border-secondary bg-secondary/10 py-3 lg:py-6 px-4 rounded transition-all ease-in-out duration-500 hover:bg-secondary hover:-translate-y-1 inline-block"
					>
						Contactez-moi !
					</a>
				</div>
			</div>
		</page-section>
	</div>
</template>

<script>
export default {
	name: "Home",

	projects() {
		return [
			{
				name:"Asia Exchange Finder",
				image: "https://i.ibb.co/vLGYkj6/AEF.png",
				link: "https://asiaexchangefinder.asiastudeler.com/",
				description: "Asia Exchange Finder est une application web communautaire. C'est une application pour trouver tous les établissements offrant des échanges d'universités dans les pays asiatiques.",
				stack: ["vue", "tailwind", "firebase"],
				theme: ["development"],
			},
			{
    		name:"Comeback v1",
    		image: "https://i.ibb.co/Sw4ZkC8/Comeback.png",
    		link: "https://come-back-v1.netlify.app/",
    		description: "Ce projet est une web app dédié à suivre les nouveaux albums, singles, EPs et annonces de nouveaux albums par les artistes. Backend par CozyCodeur.",
				stack: ["vue", "nuxt", "tailwind", "heroku", "postgre", "firebase"],
				theme: ["development"],
			},
			{
				name:"Portfolio",
				image: "https://i.ibb.co/SyMwxZq/Portfolio.png",
				link: "https://zokiasu.com/",
				description: "Mon portfolio regroupe les derniers projets que j'ai pu réaliser et les technologies que j'utilise.",
				stack: ["vue", "nuxt", "tailwind"],
				theme: ["development", "design"],
			},
			{
				name:"Know It",
				image: "https://i.ibb.co/WGPtYZd/31d337ec-d0d6-41d6-a0df-ea4030746ad5.webp",
				link: "https://www.know-it.bluepopcorn.fun/",
				description: "Projet réalisé en freelance pour BLUEPOPCORN PRODUCTION, il s'agit d'une application web dédiée aux appareils mobiles. C'est une application regroupant des mini-jeux avec pour objectif de pratiquer l'anglais.",
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