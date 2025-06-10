<script setup>
import gold from '@/assets/img/goldTraders.png'
import goldMobil from '@/assets/img/goldTradersMobil.png'
</script>

<template>
	<div class="flex flex-col justify-center items-center">
		<div
			class="bg-traders-pattern w-full bg-no-repeat bg-ggg flex flex-col justify-center items-center gap-[70px] max-md:gap-[45px] max-xs:bg-traders-pattern-mobil"
		>
			<div
				class="flex flex-col gap-6 justify-center items-center max-sm:px-[20px]"
			>
				<div class="flex flex-col gap-4">
					<div
						class="text-white text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col items-center max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[35px] max-xs:text-[32px]"
					>
						Made by traders <span>for traders</span>
					</div>
					<div
						class="text-white text-[16px] font-ibm-sans leading-[24px] font-normal w-[615px] text-center max-lg:w-[400px] max-md:text-[15px] max-xs:text-[14px] max-xs:w-full"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</div>
				</div>
				<button
					class="h-10 px-6 py-[10px] border-white border-[1px] w-max rounded-full text-[14px] font-ibm-sans font-normal text-white"
				>
					Explore all Features
				</button>
			</div>
			<div class="w-[350px] h-[82px]">
				<img :src="gold" alt="gold" class="w-full h-full max-md:h-0" />
				<img
					:src="goldMobil"
					alt="goldMobil"
					class="w-full h-0 max-md:h-full"
				/>
			</div>
		</div>
	</div>
</template>

<style></style>
