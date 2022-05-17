<template>
	<div class="container mx-auto space-y-10">
		<div>
			<ul class="flex justify-center gap-5">
				<li>
					<button @click="theme='all'" class="uppercase font-semibold lg:text-xl" :class="theme == 'all' ? 'text-secondary underline underline-offset-8':'text-white'">Tout</button>
				</li>
				<li>
					<button @click="theme='development'" class="uppercase font-semibold lg:text-xl" :class="theme == 'development' ? 'text-secondary underline underline-offset-8':'text-white'">Developpement</button>
				</li>
				<li>
					<button @click="theme='design'" class="uppercase font-semibold lg:text-xl" :class="theme == 'design' ? 'text-secondary underline underline-offset-8':'text-white'">Design</button>
				</li>
			</ul>
		</div>
		<transition-group name="list-complete" tag="div" class="w-full space-y-10">
			<a
				v-for="(project, index) in projectListFilter"
				:key="`project_${project.name}_${index}`"
				:href="project.link"
				target="_blank"
				class="flex flex-col space-y-3 rounded-md p-8 bg-[#17202C] hover:bg-[#222e3f] transition-all ease-in-out duration-500 lg:space-y-0 lg:flex-row lg:items-end lg:space-x-8"
				>
				<img
					:src="project.image"
					:alt="project.name"
					class="rounded aspect-video h-[17rem] object-cover drop-shadow border border-white/30"
				/>
				<div class="space-y-3 mb-5" >
					<h3 class="text-2xl font-semibold">
						{{ project.name }}
					</h3>
					<p class="lg:text-lg xl:max-w-4xl">
						{{ project.description }}
					</p>
					<ul class="flex lg:space-x-3" >
						<li
							v-for="stack in project.stack"
							:key="`${project.name}_${index}_${stack}`"
						>
							<component :is="`icon-${stack}`" class="w-6 h-6" />
						</li>
					</ul>
					<ul class="flex gap-2" >
						<li
							v-for="theme in project.theme"
							:key="`${project.name}_${index}_${theme}`"
							class="uppercase"
						>
							{{ theme }}
						</li>
					</ul>
				</div>
			</a>
		</transition-group>
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

	data() {
		return {
			theme: "all",
		};
	},

	computed: {
		projectListFilter() {
			return this.projects.filter(project => {
				if(project.theme.includes(this.theme) || this.theme == "all") {
					return project;
				}
			});
		},
	}
};
</script>

<style scoped>
	.list-complete-item {
		transition: all 0.7s;
	}
	.list-complete-enter-active {
		opacity: 0;
		transform: translateY(50px);
	}
	.list-complete-leave-active {
		opacity: 0;
		transform: translateY(-50px);
	}
</style>