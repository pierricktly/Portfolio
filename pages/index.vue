<template>
	<div class="text-white">
		<div
			class="overflow-y-scroll flex flex-col lg:text-xl overflow-x-hidden mx-auto"
		>
			<section
				id="home"
				data-scroll-section
				class="w-full min-h-screen mx-auto p-5 lg:p-0 flex flex-col justify-between md:justify-center items-center gap-14"
			>
				<div class="w-full flex justify-center">
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
				<div class="w-full flex justify-center">
					<img
						alt="Profile picture"
						src="../assets/images/profile_picture.png"
						class="bg-gray-500 w-48 lg:w-80 xl:w-96 rounded-full aspect-square"
					/>
				</div>
				<div data-scroll class="space-x-5 text-xfl w-full flex justify-center">
					<a
						data-scroll-to
						href="#about"
						class="border border-secondary px-5 py-2 text-secondary rounded hover:bg-secondary/10"
						>About</a
					>
					<a
						data-scroll-to
						href="#contact"
						class="bg-secondary px-5 py-2 rounded hover:bg-secondary/70"
						>Contact</a
					>
				</div>
				<div class="md:absolute bottom-2 md:bottom-5 w-full">
					<div class="flex justify-center items-center">
						<div class="flex justify-center items-center gap-2">
							<icon-long-arrow-down class="w-5 h-5" />
							<p class="font-semibold">Scroll to see more</p>
						</div>
					</div>
				</div>
			</section>
			<section
				id="about"
				data-scroll-section
				class="w-full min-h-screen mx-auto relative flex flex-col justify-center items-center"
			>
				<div
					class="flex flex-col items-center gap-10 md:space-y-0"
				>
					<div>
						<img
							alt="Profile picture"
							src="../assets/images/profile_picture.png"
							class="bg-gray-500 w-48 lg:w-80 rounded-full aspect-square"
						/>
					</div>
					<div class="px-5 lg:px-0">
						<p class="text-center whitespace-normal text-xl lg:text-2xl max-w-2xl z-10" >
							I’m a french frontend developer, based in Paris. 
							Passionate about development and travel, I am surrounded by a multitude of sources of inspiration for new ideas, new projects or just simple improvements.
						</p>
					</div>
					<div class="flex space-x-5 md:hidden">
						<a
							href="https://www.linkedin.com/in/pierrick-taily/"
							target="_blank"
						>
							<icon-linkedin class="w-8 h-8" />
						</a>
						<a href="https://github.com/Zokiasu" target="_blank">
							<icon-github class="w-8 h-8" />
						</a>
					</div>
					<div class="flex overflow-hidden absolute bottom-10 md:bottom-0 w-full text-2xl md:text-7xl font-semibold bg-white text-primary py-2">
						<span class="infiniteScroll whitespace-nowrap">- HTML - CSS - JAVASCRIPT - VUEJS - NUXTJS - TAILWINDCSS - SASS - NODEJS - FIREBASE - SQL&nbsp;</span>
						<span class="infiniteScroll whitespace-nowrap">- HTML - CSS - JAVASCRIPT - VUEJS - NUXTJS - TAILWINDCSS - SASS - NODEJS - FIREBASE - SQL&nbsp;</span>
					</div>
					<div class="flex overflow-hidden absolute top-10 md:top-14 w-full text-2xl md:text-7xl font-semibold bg-white text-primary py-2">
						<span class="infiniteScrollInvert whitespace-nowrap">- HTML - CSS - JAVASCRIPT - VUEJS - NUXTJS - TAILWINDCSS - SASS - NODEJS - FIREBASE - SQL&nbsp;</span>
						<span class="infiniteScrollInvert whitespace-nowrap">- HTML - CSS - JAVASCRIPT - VUEJS - NUXTJS - TAILWINDCSS - SASS - NODEJS - FIREBASE - SQL&nbsp;</span>
					</div>
				</div>
			</section>
			<section
				id="work"
				data-scroll-section
				class="w-full min-h-screen mx-auto p-5 lg:p-0 flex flex-col justify-center items-center space-y-10 z-10"
			>
				<h2 class="text-5xl font-bold text-secondary">My work</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
					<work-card
						v-for="(work, index) in works"
						:key="index"
						:work-name="work.name"
						:work-image="work.image"
						:work-description="work.description"
						:work-link="work.link"
						:work-technology="work.technology"
						class="max-h-80"
					/>
				</div>
			</section>
			<section
				id="contact"
				data-scroll-section
				class="w-full container min-h-screen mx-auto p-5 lg:p-0 flex flex-col justify-center items-center space-y-10 z-10"
			>
				<h2 class="text-5xl font-bold text-secondary">Contact Me</h2>
				<p>
					You want to work with me? Tell me about your project and let's work
					together!
				</p>
				<form
					class="w-full max-w-7xl min-w-max space-y-10 z-40"
					@submit.prevent="sendEmail"
				>
					<div class="flex flex-wrap">
						<div class="relative w-full appearance-none">
							<input
								id="name"
								name="name"
								type="text"
								v-model="name"
								placeholder="Enter your name"
								class="peer placeholder-transparent tracking-wide py-2 px-3 leading-relaxed appearance-none block w-full rounded bg-primary border border-white focus:bg-white/30 focus:outline-none"
							/>
							<label
								for="name"
								class="absolute left-0 -top-8 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-8 peer-focus:left-0"
								>Enter your name</label
							>
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
								class="peer placeholder-transparent tracking-wide py-2 px-3 leading-relaxed appearance-none block w-full rounded bg-primary border border-white focus:bg-white/30 focus:outline-none"
							/>
							<label
								for="email"
								class="absolute left-0 -top-8 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-8 peer-focus:left-0"
								>Enter your email address</label
							>
						</div>
					</div>
					<div class="flex flex-wrap">
						<div class="relative w-full appearance-none">
							<textarea
								id="message"
								name="message"
								v-model="message"
								placeholder="Enter your message"
								class="peer placeholder-transparent tracking-wide py-2 px-3 leading-relaxed appearance-none block w-full h-52 rounded bg-primary border border-white focus:bg-white/30 focus:outline-none"
							/>
							<label
								for="message"
								class="absolute left-0 -top-8 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-8 peer-focus:left-0"
								>Enter your message</label
							>
						</div>
					</div>
					<div
						class="w-full flex flex-col-reverse md:flex-row gap-3 justify-center items-center md:justify-between md:items-start"
					>
						<div class="flex justify-center overflow-hidden">
							<button
								type="button"
								@click="copyEmail()"
								class="hover-underline-animation"
							>
								Prefer to use a mail service ?
							</button>
						</div>
						<div class="appearance-none w-full md:w-auto">
							<input
								type="submit"
								value="Send"
								class="cursor-pointer w-full md:w-auto tracking-wide leading-relaxed appearance-none block rounded bg-secondary hover:bg-secondary/70 px-5 py-1"
							/>
						</div>
					</div>
				</form>
			</section>
		</div>
		<div
			class="hidden absolute space-x-5 top-10 right-0 md:flex-row-reverse md:space-x-reverse md:bottom-24 md:left-0 md:top-auto md:right-auto md:flex items-center justify-center z-10"
		>
			<a href="https://www.linkedin.com/in/pierrick-taily/" target="_blank">
				<icon-linkedin
					class="w-8 h-8 hover:text-secondary transition-all duration-500 ease-in-out"
				/>
			</a>
			<a href="https://github.com/Zokiasu" target="_blank">
				<icon-github
					class="w-8 h-8 hover:text-secondary transition-all duration-500 ease-in-out"
				/>
			</a>
			<div>
				<div class="border-b-2 border-white bg-red-500 w-10 lg:w-20"></div>
			</div>
		</div>
	</div>
</template>

<script>
import data from "~/project.json";
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";
init("user_LjdyAMDHMFXk6Or6Ffd5a");

export default {
	name: "app",

	data() {
		return {
			works: data,
			name: "",
			email: "",
			message: "",
			scroll: null,
			scrollpx: 0,
		};
	},

	methods: {
		sendEmail: function (e) {
			if (this.message != "" || this.message != undefined) {
				emailjs
					.sendForm(
						"service_98p270n",
						"template_0sow3ga",
						e.target,
						"user_LjdyAMDHMFXk6Or6Ffd5a"
					)
					.then(
						(result) => {
							console.log("SUCCESS!", result.status, result.text);
							this.message = "";
							this.name = "";
							this.email = "";
						},
						(error) => {
							console.log("FAILED...", error);
						}
					);
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

<style scoped>
.hide-picture {
	opacity: 0;
	transition: opacity 1s;
}
.scroll-class-opacity {
	opacity: 1;
}

.infiniteScroll {
	animation: scrollInfinit 25s linear infinite;
}

@keyframes scrollInfinit {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-100%);
	}
}

.infiniteScrollInvert {
	animation: scrollInfinitInvert 25s linear infinite;
}

@keyframes scrollInfinitInvert {
	0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(0);
	}
}
</style>