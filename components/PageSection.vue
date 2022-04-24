<template>
	<section class="mx-auto space-y-8 p-8">
		<h2 class="text-center text-secondary font-bold text-4xl">
			<slot name="title"/>
		</h2>
		<p class="text-center text-xl">
			<slot name="subtitle"/>
		</p>
		<div>
			<slot name="default"/>
		</div>
	</section>
</template>

<script>
export default {
	name: 'StackSection'
}
</script>