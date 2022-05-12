<template>
	<div class="w-full mx-auto space-y-5">
		<p class="text-center font-semibold text-xl lg:text-3xl">{{ categoryName }}</p>
		<ul class="flex flex-wrap justify-center gap-x-20 gap-y-8">
			<li v-for="stack in stackList" :key="stack.name">
				<stack :icon-name="stack.icon" :text="stack.name" />
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "CategoryStack",
		
		props: {
			categoryName: {
				type: String,
				required: true
			},
			stackList: {
				type: Array,
				required: true
			}
		}
	}
</script>