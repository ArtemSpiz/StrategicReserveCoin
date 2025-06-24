<script setup>
import { Benefits } from '@/data/BenefitsData.js'

import BenefitsVideoMobil3 from '@/assets/img/BenefitsVideoMobil3.MOV'
</script>

<template>
	<div
		class="flex flex-col gap-12 items-center px-[64px] max-xl:gap-10 max-xl:px-[40px] max-md:gap-8 max-md:px-[30px] max-sm:gap-6 max-sm:px-[20px]"
	>
		<div class="flex flex-col gap-3 items-center">
			<div
				class="text-white text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col items-center max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[35px] max-xs:text-[32px]"
			>
				Benefits
			</div>
			<div
				class="text-white text-[16px] font-ibm-sans leading-[24px] font-normal w-[615px] text-center max-lg:w-[400px] max-md:text-[15px] max-xs:text-[14px] max-xs:w-full"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</div>
		</div>

		<div
			class="max-w-[1600px] grid grid-cols-2 custom-xl:grid-cols-9 gap-4 text-white custom-xl:p-12 w-full max-lg:flex max-lg:flex-col"
		>
			<div
				class="col-span-1 overflow-hidden relative custom-xl:col-span-5 border border-benefits bg-[#150F02] h-[285px] p-6 flex flex-col gap-4 max-lg:col-span-full max-md:p-4"
				style="box-shadow: inset 0 0 14px rgba(88, 54, 18, 0.3)"
			>
				<component
					:is="Benefits[0].image"
					class="max-md:w-[32px] max-md:h-[32px]"
				/>
				<div class="flex flex-col gap-2 max-w-[320px] max-xl:max-w-[292px]">
					<h3
						class="text-[24px] font-ibm-sans font-medium leading-[26px] max-md:text-[22px] max-md:leading-[110%]"
					>
						{{ Benefits[0].title }}
					</h3>
					<p class="text-gray-text text-[14px]">
						{{ Benefits[0].text }}
					</p>
				</div>

				<div
					class="absolute right-0 top-0 h-full -z-[0] object-contain pointer-events-none max-[1300px]:w-[200px] max-[1300px]:top-[45px] max-[1300px]:right-[-10px] max-xl:right-[-40px] max-xl:top-[150px] max-lg:top-0 max-lg:w-auto max-lg:right-0 max-md:right-[-45px] max-sm:right-[-90px] max-sm:top-[200px]"
				>
					<video
						v-if="Benefits[0].video"
						:src="Benefits[0].video"
						class="w-full h-full"
						autoplay
						muted
						loop
						playsinline
					/>
				</div>
			</div>

			<div
				class="relative overflow-hidden col-span-1 custom-xl:col-span-4 border border-benefits bg-[#150F02] h-[285px] p-6 flex flex-col gap-4 max-lg:col-span-full max-md:p-4"
				style="box-shadow: inset 0 0 14px rgba(88, 54, 18, 0.3)"
			>
				<component
					:is="Benefits[1].image"
					class="max-md:w-[32px] max-md:h-[32px]"
				/>
				<div class="flex flex-col gap-2 max-w-[320px] max-xl:max-w-[292px]">
					<h3
						class="text-[24px] font-ibm-sans font-medium max-md:text-[22px] max-md:leading-[110%]"
					>
						{{ Benefits[1].title }}
					</h3>
					<p class="text-gray-text text-[14px]">
						{{ Benefits[1].text }}
					</p>
				</div>

				<div
					class="absolute right-0 top-0 w- h-full -z-[0] object-contain pointer-events-none max-xl:right-[-90px] max-lg:top-0 max-lg:w-auto max-lg:right-0 max-sm:rotate-[82.386deg] max-sm:top-[165px]"
				>
					<video
						v-if="Benefits[1].video"
						:src="Benefits[1].video"
						class="w-full h-full"
						autoplay
						muted
						loop
						playsinline
					/>
				</div>
			</div>

			<div
				class="relative overflow-hidden col-span-1 custom-xl:col-span-4 border border-benefits bg-[#150F02] h-[285px] p-6 flex flex-col gap-4 max-lg:col-span-full max-md:p-4"
				style="box-shadow: inset 0 0 14px rgba(88, 54, 18, 0.3)"
			>
				<component
					:is="Benefits[2].image"
					class="max-md:w-[32px] max-md:h-[32px]"
				/>
				<div class="flex flex-col gap-2 max-w-[320px] max-xl:max-w-[292px]">
					<h3
						class="text-[24px] font-ibm-sans font-medium max-md:text-[22px] max-md:leading-[110%]"
					>
						{{ Benefits[2].title }}
					</h3>
					<p class="text-gray-text text-[14px]">
						{{ Benefits[2].text }}
					</p>
				</div>
				<div
					class="absolute right-0 top-0 w- h-full -z-[0] object-contain pointer-events-none max-xl:right-[-40px] max-lg:top-0 max-lg:w-auto max-lg:right-0 max-sm:top-[0px] max-[525px]:top-auto max-[525px]:bottom-[-5%] max-[525px]:h-auto"
				>
					<video
						v-if="Benefits[2].video"
						:src="Benefits[2].video"
						class="w-full h-full max-[525px]:hidden"
						autoplay
						muted
						loop
						playsinline
					/>
					<video
						:src="BenefitsVideoMobil3"
						class="w-full h-full hidden max-[525px]:flex"
						autoplay
						muted
						loop
						playsinline
					/>
				</div>
			</div>

			<div
				class="relative overflow-hidden col-span-1 custom-xl:col-span-5 border border-benefits bg-[#150F02] h-[285px] p-6 flex flex-col gap-4 max-lg:col-span-full max-md:p-4"
				style="box-shadow: inset 0 0 14px rgba(88, 54, 18, 0.3)"
			>
				<component
					:is="Benefits[3].image"
					class="max-md:w-[32px] max-md:h-[32px]"
				/>
				<div class="flex flex-col gap-2 max-w-[320px] max-xl:max-w-[292px]">
					<h3
						class="text-[24px] font-ibm-sans font-medium max-md:text-[22px] max-md:leading-[110%]"
					>
						{{ Benefits[3].title }}
					</h3>
					<p class="text-gray-text text-[14px]">
						{{ Benefits[3].text }}
					</p>
				</div>
				<div
					class="absolute right-0 top-0 w- h-full -z-[0] object-contain pointer-events-none max-[1300px]:w-[200px] max-[1300px]:top-[54px] max-xl:top-[170px] max-xl:w-[250px] max-lg:top-0 max-lg:w-auto max-lg:right-0 max-md:w-[250px] max-md:top-[50px] max-sm:w-[250px] max-sm:top-[150px] max-sm:right-[40px]"
				>
					<video
						v-if="Benefits[3].video"
						:src="Benefits[3].video"
						class="w-full h-full"
						autoplay
						muted
						loop
						playsinline
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>
