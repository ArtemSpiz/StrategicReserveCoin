<script setup>
import { Benefits } from '@/data/BenefitsData.js'
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
			class="grid grid-cols-2 custom-xl:grid-cols-5 gap-4 text-white custom-xl:p-12 w-full max-lg:flex max-lg:flex-col"
		>
			<div
				class="col-span-1 custom-xl:col-span-3 border border-benefits bg-gray-benefit h-[285px] p-6 flex flex-col gap-4 max-lg:col-span-full max-md:p-4"
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
			</div>

			<div
				class="col-span-1 custom-xl:col-span-2 border border-benefits bg-gray-benefit h-[285px] p-6 flex flex-col gap-4 max-lg:col-span-full max-md:p-4"
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
			</div>

			<div
				class="col-span-1 custom-xl:col-span-2 border border-benefits bg-gray-benefit h-[285px] p-6 flex flex-col gap-4 max-lg:col-span-full max-md:p-4"
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
			</div>

			<div
				class="col-span-1 custom-xl:col-span-3 border border-benefits bg-gray-benefit h-[285px] p-6 flex flex-col gap-4 max-lg:col-span-full max-md:p-4"
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
			</div>
		</div>
	</div>
</template>

<style></style>
