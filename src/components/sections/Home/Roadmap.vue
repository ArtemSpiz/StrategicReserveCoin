<script setup>
import Footer from '@/components/layouts/Footer.vue'
import Button from '@/components/ui/Button.vue'
</script>

<template>
	<div>
		<div
			class="2xl:h-[80vh] max-2xl:h-full bg-roadmap-pattern bg-no-repeat bg-ggg max-[1350px]:bg-[right_-200px_top_0] max-md:bg-[url('@/assets/img/roadmapBgMobil.png')] max-md:bg-center max-md:h-screen"
		>
			<div
				class="pl-[158px] pb-[230px] justify-center flex flex-col items-start text-start gap-12 max-[1300px]:pl-[100px] max-xl:px-[40px] max-md:gap-8 max-md:px-[30px] max-md:pb-0 max-sm:px-[20px] max-md:justify-start max-md:items-center max-md:text-center max-xs:bg-contain"
			>
				<div
					class="flex flex-col gap-4 self-stretch max-w-[480px] max-md:w-full max-md:self-auto pt-[140px] max-md:pt-0"
				>
					<div
						class="text-white text-[64px] font-ibm-mono font-normal leading-[70px] max-2xl:text-[60px] max-lg:text-[50px] max-sm:text-[44px] max-sm:leading-[100%] max-xs:text-[44px] max-md:font-semibold"
					>
						Roadmap
					</div>
					<div
						class="text-white text-[20px] font-ibm-sans font-normal leading-[30px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px]"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</div>
				</div>
				<Button customClass="leading-[21px] px-12 h-14 text-[16px] w-max" />
			</div>
		</div>
		<Footer />
	</div>
</template>

<style></style>
