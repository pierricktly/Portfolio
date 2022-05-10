<template>
	<div class="space-y-1 aspect-square">
		<component :is="`icon-${iconName}`" class="w-12 h-12 lg:w-16 lg:h-16 mx-auto"></component>
		<p class="uppercase font-medium text-center text-sm lg:text-base">{{text}}</p>
	</div>
</template>

<script>
	export default {
		name: "Stack",
		
		props: {
			iconName: {
				type: String,
				required: true
			},
			text: {
				type: String,
				required: true
			}
		}
	}
</script>