<template>
	<div class="space-y-1">
		<component :is="`icon-${iconName}`" class="w-16 h-16 mx-auto"></component>
		<p class="uppercase font-medium text-center">{{text}}</p>
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