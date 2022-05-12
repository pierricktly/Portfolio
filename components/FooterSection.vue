<template>
	<div class="bg-[#17202C] text-white">
		<div class="container mx-auto px-5 py-8 space-y-10 lg:space-y-0">
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5">
				<div class="space-y-1">
					<h2 class="font-bold text-5xl">Zokiasu.</h2>
					<p>Développeur Web Frontend - Freelance</p>
				</div>
				<div class="space-y-3">
					<h3 class="font-semibold lg:px-2 text-xl">Navigation</h3>
					<div class="space-y-2 flex flex-col">
						<nuxt-link
							to="/"
							class="rounded hover:bg-primary lg:px-2 py-1 transition-all ease-in-out duration-300"
							>Home</nuxt-link>
						<nuxt-link
							to="#work"
							class="rounded hover:bg-primary lg:px-2 py-1 transition-all ease-in-out duration-300"
							>Portfolio</nuxt-link>
						<nuxt-link
							to="#contact"
							class="rounded hover:bg-primary lg:px-2 py-1 transition-all ease-in-out duration-300"
							>Contact</nuxt-link>
					</div>
				</div>
				<div class="space-y-3">
					<h3 class="font-semibold lg:px-2 text-xl">Social</h3>
					<div class="space-y-2 flex flex-col">
						<a
							href="https://www.linkedin.com/in/pierrick-taily/"
							target="_blank"
							class="rounded hover:bg-primary lg:px-2 py-1 transition-all ease-in-out duration-300">
							Linkedin
							</a>
						<a
							href="https://github.com/Zokiasu"
							target="_blank"
							class="rounded hover:bg-primary lg:px-2 py-1 transition-all ease-in-out duration-300">
							Github
							</a>
						<a
							href="https://twitter.com/zokiasu"
							target="_blank"
							class="rounded hover:bg-primary lg:px-2 py-1 transition-all ease-in-out duration-300">
							Twitter
							</a>
					</div>
				</div>
			</div>
			<p>© {{ new Date().getFullYear() }}, ZKS Development</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "FooterSection",
};
</script>