<template>
	<div class="text-white py-8">
		<div class="container mx-auto text-center space-y-8">
			<ul class="mx-auto flex items-center justify-center space-x-8">
				<li>
					<a href="">
						<icon-linkedin class="w-8 h-8 transition-all ease-in-out duration-300 hover:text-secondary"/>
					</a>
				</li>
				<li>
					<a href="">
						<icon-github class="w-8 h-8 transition-all ease-in-out duration-300 hover:text-secondary"/>
					</a>
				</li>
				<li>
					<a href="">
						<icon-malt class="w-8 h-8 transition-all ease-in-out duration-300 hover:text-secondary"/>
					</a>
				</li>
			</ul>
			<p class="text-xl">© {{ new Date().getFullYear() }} - Zokiasu - Développeur Web</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "FooterSection",
};
</script>