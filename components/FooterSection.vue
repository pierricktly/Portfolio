<template>
	<div class="bg-[#17202C] text-white">
		<div class="container mx-auto px-5 py-8">
			<div class="grid grid-cols-3 gap-5">
				<div class="space-y-1">
					<h2 class="font-bold text-5xl">Zokiasu.</h2>
					<p>Frontend Web Developer - Freelance</p>
					<p>© {{ new Date().getFullYear() }}, ZKS Development</p>
				</div>
				<div class="space-y-3">
					<h3 class="font-semibold text-xl">Navigation</h3>
					<div class="space-y-2 flex flex-col">
						<nuxt-link
							to="#"
							class="rounded hover:bg-primary px-2 py-1 transition-all ease-in-out duration-300"
							>Home</nuxt-link>
						<nuxt-link
							to="#"
							class="rounded hover:bg-primary px-2 py-1 transition-all ease-in-out duration-300"
							>Portfolio</nuxt-link>
						<nuxt-link
							to="#"
							class="rounded hover:bg-primary px-2 py-1 transition-all ease-in-out duration-300"
							>Contact</nuxt-link>
					</div>
				</div>
				<div class="space-y-3">
					<h3 class="font-semibold text-xl">Social</h3>
					<div class="space-y-2 flex flex-col">
						<a
							href="#"
							class="rounded hover:bg-primary px-2 py-1 transition-all ease-in-out duration-300">
							Linkedin
							</a>
						<a
							href="#"
							class="rounded hover:bg-primary px-2 py-1 transition-all ease-in-out duration-300">
							Github
							</a>
						<a
							href="#"
							class="rounded hover:bg-primary px-2 py-1 transition-all ease-in-out duration-300">
							Twitter
							</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FooterSection",
};
</script>