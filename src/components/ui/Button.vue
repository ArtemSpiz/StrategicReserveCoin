<script setup>
defineProps({
	customClass: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<button
		class="rounded-full text-white font-medium font-ibm-sans bg-btn-gradient py-2.5"
		:class="customClass"
	>
		Trade Now
	</button>
</template>

<style></style>
