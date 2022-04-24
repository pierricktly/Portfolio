<template>
	<div class="container mx-auto space-y-10">
		<nuxt-link
			v-for="(project, index) in projects"
			:key="`project_${project.name}_${index}`"
			to="#"
			class="flex items-end rounded p-5 hover:bg-[#001D37] transition-all duration-500 ease-in-out cursor-pointer"
			:class="index%2 == 1 ? 'flex-row-reverse gap-x-8' : 'space-x-8'"
		>
			<img
				:src="project.image"
				:alt="project.name"
				class="rounded aspect-video"
			/>
			<div class="space-y-2 mb-3" :class="index%2 == 1 ? 'text-right' : ''">
				<h3 class="text-2xl font-semibold">
					{{ project.name }}
				</h3>
				<p class="text-lg max-w-4xl">
					{{ project.description }}
				</p>
				<ul class="flex space-x-3" :class="index%2 == 1 ? 'justify-end' : ''">
					<li
						v-for="stack in project.stack"
						:key="`${project.name}_${index}_${stack}`"
					>
						<component :is="`icon-${stack}`" class="w-6 h-6" />
					</li>
				</ul>
			</div>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	name: "PortfolioSection",

	props: {
		projects: {
			type: Array,
			default: () => [],
			required: true,
		},
	},
};
</script>