<script setup>
import Footer from '@/components/layouts/Footer.vue'
import Button from '@/components/ui/Button.vue'
</script>

<template>
	<div>
		<div
			class="pl-[158px] justify-center flex flex-col items-start text-start gap-12 bg-roadmap-pattern bg-no-repeat bg-cover h-screen"
		>
			<div class="flex flex-col gap-4 self-stretch max-w-[480px]">
				<div
					class="text-white text-[64px] font-ibm-mono font-normal leading-[70px]"
				>
					Roadmap
				</div>
				<div
					class="text-white text-[20px] font-ibm-sans font-normal leading-[30px]"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</div>
			</div>
			<Button customClass="leading-[21px] px-12 h-14 text-[16px] w-max " />
		</div>
		<Footer />
	</div>
</template>

<style></style>
