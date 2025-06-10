<script setup>
import BenefitSvgArrowVue from '@/assets/svg/BenefitSvgArrow.vue'
import BenefitSquare from '@/assets/svg/BenefitSquare.vue'
import BenefitTwoArrows from '@/assets/svg/BenefitTwoArrows.vue'
import BenefitTraders from '@/assets/svg/BenefitTraders.vue'

const Benefits = [
	{
		title: 'Community Driven Growth',
		text: 'SRC empowers a vibrant community that drives engagement and adoption, ensuring that every holder can have a voice in shaping the project’s future while enjoying the culture and humor of meme coin spaces.',
		image: BenefitSvgArrowVue,
	},
	{
		title: 'Transparency',
		text: 'SRC leverages modern digital art, transparent blockchain mechanics, and innovative visuals to create a project that’s not only a meme but also a secure and well-designed investment tool.',
		image: BenefitSquare,
	},
	{
		title: 'Accessible & Inclusive',
		text: 'SRC’s design and narrative make crypto investing feel less intimidating and more inviting to newcomers, all while offering real potential for growth and community rewards.',
		image: BenefitTwoArrows,
	},
	{
		title: 'Sustainable Tokenomics',
		text: 'SRC isn’t just a meme—its carefully balanced tokenomics ensure long-term value and real utility within the crypto ecosystem, fostering sustainable growth and opportunities for holders.',
		image: BenefitTraders,
	},
]
</script>

<template>
	<div class="flex flex-col gap-12 items-center">
		<div class="flex flex-col gap-3 items-center">
			<div
				class="text-white text-[48px] font-ibm-mono font-normal leading-[52px]"
			>
				Benefits
			</div>
			<div
				class="text-white w-[615px] font-ibm-sans text-[16px] font-medium text-center"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</div>
		</div>

		<div
			class="grid grid-cols-2 custom-xl:grid-cols-5 gap-4 text-white p-4 custom-xl:p-12 w-full"
		>
			<div
				class="col-span-1 custom-xl:col-span-3 border border-benefits bg-gray-benefit h-[285px] p-6 flex flex-col gap-4"
				style="box-shadow: inset 0 0 14px rgba(88, 54, 18, 0.3)"
			>
				<component :is="Benefits[0].image" />
				<div class="flex flex-col gap-2 max-w-[320px]">
					<h3 class="text-[24px] font-ibm-sans font-medium leading-[26px]">
						{{ Benefits[0].title }}
					</h3>
					<p class="text-gray-text text-[14px]">
						{{ Benefits[0].text }}
					</p>
				</div>
			</div>

			<div
				class="col-span-1 custom-xl:col-span-2 border border-benefits bg-gray-benefit h-[285px] p-6 flex flex-col gap-4"
				style="box-shadow: inset 0 0 14px rgba(88, 54, 18, 0.3)"
			>
				<component :is="Benefits[1].image" />
				<div class="flex flex-col gap-2 max-w-[320px]">
					<h3 class="text-[24px] font-ibm-sans font-medium">
						{{ Benefits[1].title }}
					</h3>
					<p class="text-gray-text text-[14px]">
						{{ Benefits[1].text }}
					</p>
				</div>
			</div>

			<div
				class="col-span-1 custom-xl:col-span-2 border border-benefits bg-gray-benefit h-[285px] p-6 flex flex-col gap-4"
				style="box-shadow: inset 0 0 14px rgba(88, 54, 18, 0.3)"
			>
				<component :is="Benefits[2].image" />
				<div class="flex flex-col gap-2 max-w-[320px]">
					<h3 class="text-[24px] font-ibm-sans font-medium">
						{{ Benefits[2].title }}
					</h3>
					<p class="text-gray-text text-[14px]">
						{{ Benefits[2].text }}
					</p>
				</div>
			</div>

			<div
				class="col-span-1 custom-xl:col-span-3 border border-benefits bg-gray-benefit h-[285px] p-6 flex flex-col gap-4"
				style="box-shadow: inset 0 0 14px rgba(88, 54, 18, 0.3)"
			>
				<component :is="Benefits[3].image" />
				<div class="flex flex-col gap-2 max-w-[320px]">
					<h3 class="text-[24px] font-ibm-sans font-medium">
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
