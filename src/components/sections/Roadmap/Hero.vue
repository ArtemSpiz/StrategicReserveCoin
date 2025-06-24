<script setup>
import Header from '@/components/layouts/Header.vue'
import RoadmapHeroBgMob from '@/assets/img/RoadmapHeroBgMob.png'
import Button from '@/components/ui/Button.vue'
</script>

<template>
	<div>
		<Header />
		<div
			class="bg-[url('@/assets/img/RoadmapHeroBg.png')] bg-no-repeat bg-ggg bg-center w-full max-[1300px]:bg-[right_-180px_top_0px] max-xl:bg-cover max-lg:bg-none"
		>
			<div
				class="flex flex-col justify-center pl-[65px] items-start gap-[80px] pt-[112px] pb-[152px] max-xl:pl-[20px] max-lg:pt-[60px] max-lg:pb-0 max-lg:pl-0 max-lg:justify-center max-lg:items-center max-lg:gap-[60px] max-md:gap-[44px] max-md:px-[20px] max-md:pt-[45px]"
			>
				<div
					class="flex flex-col gap-[16px] items-start max-lg:items-center max-lg:text-center max-lg:gap-[24px]"
				>
					<div
						class="text-white text-[64px] font-ibm-mono font-semibold leading-[100%] max-xl:text-[60px] max-md:text-[50px] max-sm:text-[44px]"
					>
						What’s Coming
					</div>
					<div
						class="text-white text-[16px] font-ibm-sans leading-[150%] font-medium w-[615px] max-xl:w-[450px] max-xl:text-[14px] max-md:text-[12px] max-md:font-normal max-sm:w-full"
					>
						Here’s where we’ve been and where we’re headed. Our roadmap outlines
						each phase of growth — from launch and community-building to
						utility, governance, and long-term sustainability.
					</div>
				</div>

				<Button customClass="leading-[21px] px-12 h-14 text-[16px] w-max " />
			</div>

			<div
				class="hidden max-lg:flex justify-center w-full h-[400px] max-sm:h-auto"
			>
				<img
					loading="lazy"
					decoding="async"
					:src="RoadmapHeroBgMob"
					alt="clock"
				/>
			</div>
		</div>
	</div>
</template>

<style></style>
