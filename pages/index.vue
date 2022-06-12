<template>
	<div class="text-white">
		<section class="min-h-screen flex flex-col space-y-20 items-center lg:hidden">
			<h2 class="text-center whitespace-pre-line -mt-10 leading-loose text-2xl lg:text-4xl">
				Hello, je m'appelle
				<span class="font-bold text-5xl lg:text-7xl text-secondary" >Pierrick</span>
				Je suis développeur front-end
			</h2>
			<img
				alt="Profile picture"
				src="../assets/images/profile_picture.png"
				class="bg-secondary/20 shadow-inner drop-shadow w-60 h-60 lg:w-80 lg:h-08 rounded-full aspect-square"
			/>
			<ul class="mx-auto flex items-center justify-center space-x-8">
				<li>
					<a href="https://www.linkedin.com/in/pierrick-taily/" target="_blank">
						<icon-linkedin class="w-10 h-10 transition-all ease-in-out duration-300 hover:text-secondary"/>
					</a>
				</li>
				<li>
					<a href="https://github.com/Zokiasu" target="_blank">
						<icon-github class="w-10 h-10 transition-all ease-in-out duration-300 hover:text-secondary"/>
					</a>
				</li>
				<li>
					<a href="https://www.malt.fr/profile/zokiasu" target="_blank">
						<icon-malt class="w-10 h-10 transition-all ease-in-out duration-300 hover:text-secondary"/>
					</a>
				</li>
			</ul>
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
							class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[5rem] lg:whitespace-preline lg:leading-none leading-tight"
						>
							Hello, je m'appelle
							<span class="text-secondary font-semibold">Pierrick</span>
						</p>
						<p class="text-xl md:text-2xl lg:text-3xl xl:text-4xl lg:whitespace-preline lg:leading-none leading-tight">
							Je suis développeur front-end
						</p>
					</div>
					<ul class="mx-auto flex items-center space-x-8">
						<li>
							<a href="https://www.linkedin.com/in/pierrick-taily/" target="_blank">
								<icon-linkedin class="w-10 h-10 transition-all ease-in-out duration-300 hover:text-secondary"/>
							</a>
						</li>
						<li>
							<a href="https://github.com/Zokiasu" target="_blank">
								<icon-github class="w-10 h-10 transition-all ease-in-out duration-300 hover:text-secondary"/>
							</a>
						</li>
						<li>
							<a href="https://www.malt.fr/profile/zokiasu" target="_blank">
								<icon-malt class="w-10 h-10 transition-all ease-in-out duration-300 hover:text-secondary"/>
							</a>
						</li>
					</ul>
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

		<page-section idSection="service" class="bg-[#17202C] py-14 lg:py-24">
			<template #title>Mes services</template>
			<ul class="flex flex-wrap gap-10 justify-evenly py-10 lg:py-20">
				<li class="space-y-2 lg:-translate-y-10">
					<icon-webdesign class="w-80 h-80 p-10 rounded-xl bg-[#212F40]"/>
					<p class="text-center text-xl font-semibold uppercase">webdesign</p>
				</li>
				<li class="space-y-2 lg:translate-y-10">
					<icon-dev class="w-80 h-80 p-10 rounded-xl bg-[#212F40]"/>
					<p class="text-center text-xl font-semibold uppercase">Developpement / <br>Integration</p>
				</li>
				<li class="space-y-2 lg:-translate-y-10">
					<icon-landing class="w-80 h-80 p-10 rounded-xl bg-[#212F40]"/>
					<p class="text-center text-xl font-semibold uppercase">Landing</p>
				</li>
				<li class="space-y-2 lg:translate-y-10">
					<icon-maintenance class="w-80 h-80 p-10 rounded-xl bg-[#212F40]"/>
					<p class="text-center text-xl font-semibold uppercase">Maintenance</p>
				</li>
			</ul>
			
			<p class="text-center font-medium text-md">Pour plus d'information concernant mes prix consulter mon profil <a href="https://www.malt.fr/profile/zokiasu" target="_blank" class="hover-underline-animation">malt</a> ou me <nuxt-link to="#contact" class="hover-underline-animation">contacter</nuxt-link> directement</p>
		</page-section>

		<page-section idSection="work" class="py-20">
			<template #title>Mes projets</template>
			<portfolio-section :projects="$options.projects()" />
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
			<div class="py-36 space-y-10 text-center">
				<button @click="copyEmail()">
					<h3 class="text-5xl md:text-7xl lg:text-9xl hover-underline-animation">Copier mon mail</h3>
				</button>
			</div>
		</page-section>
	</div>
</template>

<script>
import IconWebdesign from '~/components/Icon/IconWebdesign.vue';
import PageSection from '~/components/PageSection.vue';
export default {
	components: { PageSection, IconWebdesign },
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