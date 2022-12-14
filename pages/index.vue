<template>
	<div class="text-white">
		<section class="relative min-h-screen flex flex-col items-center space-y-20 lg:hidden">
			<h2 class="text-center whitespace-pre-line leading-loose text-xl md:text-2xl lg:text-4xl">
				Hello, je m'appelle
				<span class="font-bold text-2xl md:text-5xl lg:text-7xl text-secondary" >Pierrick</span>
				Je suis développeur front-end
			</h2>
			<img
				alt="Profile picture"
				src="../assets/images/profile_picture.png"
				class="bg-secondary/20 shadow-inner mx-auto drop-shadow w-60 h-60 lg:w-80 lg:h-08 rounded-full aspect-square"
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
			<div class="absolute w-full bottom-20 md:bottom-28">
				<div class="mx-auto items-center text-center">
					<icon-mouse class="w-8 h-8 mx-auto animate-bounce" />
					<p>Scroll to see more</p>
				</div>
			</div>
		</section>

		<section id="home" class="hidden min-h-screen lg:flex -mt-20">
			<div class="container mx-auto flex my-auto">
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
						class="h-[20rem] xl:h-[35rem]"
					/>
				</div>
			</div>
			<div class="bottom-2 lg:bottom-5 w-full md:absolute">
				<div class="mx-auto items-center text-center">
					<icon-mouse class="w-8 h-8 mx-auto animate-bounce" />
					<p>Scroll to see more</p>
				</div>
			</div>
		</section>

		<page-section idSection="service" class="bg-[#17202C] py-14 2xl:py-20">
			<template #title>Mes services</template>
			<ul class="grid grid-cols-1 md:grid-cols-2 2xl:flex gap-5 2xl:gap-10 justify-evenly py-10 2xl:py-20">
				<li class="2xl:max-w-md space-y-5 p-5 2xl:-translate-y-10 rounded-xl bg-[#212F40]">
					<p class="text-center text-sm lg:text-xl font-semibold uppercase">Accompagnement</p>
					<icon-webdesign class="mx-auto w-32 h-32 lg:w-72 lg:h-72 py-5"/>
					<p class="text-center text-sm">
						Je vous accompagne dans la conception votre site web ou de votre application web de la maquette à l'intégration. Je vous aide à définir votre cible, vos besoins et vos objectifs. Je vous conseille sur les technologies à utiliser et je vous accompagne dans la réalisation de votre projet. Je vous propose des solutions adaptées à votre budget.
					</p>
				</li>
				<li class="2xl:max-w-md space-y-5 p-5 2xl:translate-y-10 rounded-xl bg-[#212F40]">
					<p class="text-center text-sm lg:text-xl font-semibold uppercase">Developpement / Integration</p>
					<icon-dev class="mx-auto w-32 h-32 lg:w-72 lg:h-72 py-5"/>
					<p class="text-center text-sm">
						Je développe et intègre les maquettes de vos sites web et vos applications web en fonction de vos besoins, de votre budget et de vos objectifs.
					</p>
				</li>
				<li class="2xl:max-w-md space-y-5 p-5 2xl:-translate-y-10 rounded-xl bg-[#212F40]">
					<p class="text-center text-sm lg:text-xl font-semibold uppercase">Landing</p>
					<icon-landing class="mx-auto w-32 h-32 lg:w-72 lg:h-72 py-5"/>
					<p class="text-center text-sm">
						Je vous propose de créer et d'intégrer vos landing pages pour vos campagnes de marketing digital ou pour améliorer votre présence numérique.
					</p>
				</li>
				<li class="2xl:max-w-md space-y-5 p-5 2xl:translate-y-10 rounded-xl bg-[#212F40]">
					<p class="text-center text-sm lg:text-xl font-semibold uppercase">Maintenance</p>
					<icon-maintenance class="mx-auto w-32 h-32 lg:w-72 lg:h-72 py-5"/>
					<p class="text-center text-sm">
						J'interviens sur vos projets web pour les maintenir et les faire évoluer. je vous aide à corriger les bugs et à améliorer les performances de vos sites web et applications web.
					</p>
				</li>
			</ul>
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
			<form class="w-full mx-auto max-w-7xl min-w-max space-y-10 z-40" @submit.prevent="sendEmail">
				<div class="flex flex-wrap">
					<div class="relative w-full appearance-none">
						<input
							id="name"
							name="name"
							type="text"
							v-model="name"
							placeholder="Enter your name"
							class="peer placeholder-transparent tracking-wide py-2 px-3 leading-relaxed appearance-none block w-full rounded
							bg-primary border border-white 
							focus:bg-white/30 focus:outline-none"
						/>
						<label 
							for="name" 
							class="
								absolute 
								left-0 -top-8
								transition-all
								peer-placeholder-shown:top-2
								peer-placeholder-shown:left-3
								peer-focus:-top-8
								peer-focus:left-0"
							>Enter your name</label>
					</div>
				</div>
				<div class="flex flex-wrap">
					<div class="relative w-full appearance-none">
						<input 
							id="email" 
							name="email" 
							type="email" 
							v-model="email" 
							placeholder="Enter your email address"
							class="peer placeholder-transparent tracking-wide py-2 px-3 leading-relaxed appearance-none block w-full rounded
							bg-primary border border-white 
							focus:bg-white/30 focus:outline-none"
						/>
						<label 
							for="email" 
							class="
								absolute 
								left-0 -top-8
								transition-all
								peer-placeholder-shown:top-2
								peer-placeholder-shown:left-3
								peer-focus:-top-8
								peer-focus:left-0"
							>Enter your email address</label>
					</div>
				</div>
				<div class="flex flex-wrap">
					<div class="relative w-full appearance-none">
						<textarea 
							id="message"
							name="message" 
							v-model="message" 
							placeholder="Enter your message"
							class="peer placeholder-transparent tracking-wide py-2 px-3 leading-relaxed appearance-none block w-full h-52 rounded
							bg-primary border border-white 
							focus:bg-white/30 focus:outline-none" 
						/>
						<label for="message" class="
							absolute 
							left-0 -top-8
							transition-all
							peer-placeholder-shown:top-2
							peer-placeholder-shown:left-3
							peer-focus:-top-8
							peer-focus:left-0"
						>Enter your message</label>
					</div>
				</div>
				<div class="w-full flex flex-col-reverse md:flex-row gap-3 justify-center items-center md:justify-between md:items-start">
					<div class="flex justify-center overflow-hidden">
						<button type="button" @click="copyEmail()" class="hover-underline-animation">Click here to copy my mail address</button>
					</div>
					<div class="appearance-none w-full md:w-auto">
						<input
							type="submit" 
							value="Send"
							class="cursor-pointer w-full md:w-auto tracking-wide leading-relaxed appearance-none block rounded
							bg-secondary
							hover:bg-secondary/70
							px-5 py-1"/>
					</div>
				</div>
			</form>
			<!-- <div class="py-28 md:py-36 space-y-10 text-center">
				<button @click="copyEmail()">
					<h3 class="text-5xl md:text-7xl lg:text-9xl hover-underline-animation">Copier mon mail</h3>
				</button>
			</div> -->
		</page-section>
	</div>
</template>

<script>
import 'animate.css';
import IconWebdesign from '~/components/Icon/IconWebdesign.vue';
import PageSection from '~/components/PageSection.vue';
import{ init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
init("user_LjdyAMDHMFXk6Or6Ffd5a");

export default {
	name: "Home",

	components: { PageSection, IconWebdesign },

	data() {
		return {
			name:"",
			email:"",
			message:"",
		};
	},

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
		sendEmail: function(e) {
				if(this.message != "" || this.message != undefined) {
						emailjs.sendForm('service_98p270n', 'template_0sow3ga', e.target, 'user_LjdyAMDHMFXk6Or6Ffd5a')
						.then((result) => {
								console.log('SUCCESS!', result.status, result.text);
								this.message = ""
								this.name = ""
								this.email = ""
						}, (error) => {
								console.log('FAILED...', error);
						});
				} else {
					//OK
				}
		},
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