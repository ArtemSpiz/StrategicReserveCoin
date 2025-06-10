<script setup>
import { ref } from 'vue'

import LeftGold from '@/assets/img/LeftGold.png'
import RightGold from '@/assets/img/RightGold.png'
import Plus from '@/assets/svg/Plus.vue'
import Minus from '@/assets/svg/Minus.vue'

const FAQContent = [
	{
		title: 'Lorem ipsum?',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
	},
	{
		title: 'Lorem ipsum?',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
	},
	{
		title: 'Lorem ipsum?',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
	},
	{
		title: 'Lorem ipsum?',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
	},
	{
		title: 'Lorem ipsum?',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
	},
	{
		title: 'Lorem ipsum?',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
	},
]

const opened = ref(Array(FAQContent.length).fill(false))

function toggleFAQ(index) {
	opened.value[index] = !opened.value[index]
}
</script>

<template>
	<div class="flex items-end justify-between">
		<div><img :src="LeftGold" alt="LeftGold" /></div>

		<div class="flex flex-col gap-12 items-center justify-center">
			<div class="flex flex-col text-center gap-4">
				<div class="text-white text-[48px] font-ibm-mono leading-[52px]">
					FAQ
				</div>
				<div class="text-white w-[300px] font-ibm-sans text-[16px] font-medium">
					Trust Built on Transparency, Community, and Purposeful Parody.
				</div>
			</div>

			<div
				class="flex flex-col gap-6 items-center justify-center max-w-[800px] w-full"
			>
				<div
					v-for="(FAQ, index) in FAQContent"
					:key="index"
					class="flex flex-col gap-4 text-left w-full"
				>
					<div
						class="flex justify-between items-start gap-6 cursor-pointer"
						@click="toggleFAQ(index)"
					>
						<div class="flex flex-col gap-2">
							<div
								class="text-[#EAEAEA] font-ibm-sans text-[18px] leading-[28px] font-medium"
							>
								{{ FAQ.title }}
							</div>

							<div
								:class="[
									'transition-all duration-500 ease-in-out overflow-hidden',
									opened[index]
										? 'max-h-[500px] opacity-100 mt-2'
										: 'max-h-0 opacity-0',
								]"
							>
								<p
									class="text-gray-roadmap text-[16px] font-ibm-sans font-normal leading-6"
								>
									{{ FAQ.text }}
								</p>
							</div>
						</div>

						<component
							:is="opened[index] ? Minus : Plus"
							class="w-[50px] flex-shrink-0"
						/>
					</div>

					<hr class="border-[#E4E7EC80]" />
				</div>
			</div>
		</div>

		<div><img :src="RightGold" alt="RightGold" /></div>
	</div>
</template>

<style></style>
