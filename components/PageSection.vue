<template>
	<section :id="idSection" class="mx-auto space-y-8 p-8">
		<h2 class="text-center text-secondary font-bold text-2xl lg:text-4xl">
			<slot name="title"/>
		</h2>
		<p v-if="$slots.subtitle" class="text-center text-xl">
			<slot name="subtitle"/>
		</p>
		<slot name="default"/>
	</section>
</template>

<script>
export default {
	name: 'StackSection',

	props: {
		idSection: {
			type: String,
			default: '',
		},
	},
}
</script>