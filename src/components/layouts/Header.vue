<script setup>
import { ref } from 'vue'
import logo from '@/assets/img/logo.png'
import Button from '../ui/Button.vue'
import BurgerMenu from '@/assets/svg/BurgerMenu.vue'

const titles = [
	'About',
	'Benefits',
	'Mission',
	'How it works',
	'Tokenomics',
	'Roadmap',
	'FAQ',
	'Whitepaper',
]

const isMenuOpen = ref(false)
</script>

<template>
	<div class="relative">
		<div
			class="flex justify-between items-center px-12 py-4 max-xl:p-4 max-sm:pt-5 max-sm:pb-0"
		>
			<div class="flex items-center gap-[10px] shrink-0">
				<div class="w-8 h-11 max-xs:w-[30px] max-xs:h-[40px]">
					<img :src="logo" alt="logo" class="w-full h-full" />
				</div>
				<div
					class="text-white text-[17px] font-normal leading-[13px] flex flex-col items-start gap-[2px] max-xs:text-[15px]"
				>
					Strategic
					<span class="text-[12.49px] leading-[13.243px] max-xs:text-[11px]">
						Reserve Coin
					</span>
				</div>
			</div>

			<div class="flex items-center gap-6 max-lg:hidden">
				<div
					v-for="(title, index) in titles"
					:key="index"
					class="text-white text-center text-[14px] font-medium leading-[21px] font-ibm-mono cursor-pointer max-xl:text-[13px]"
				>
					{{ title }}
				</div>
			</div>

			<div class="max-lg:hidden">
				<Button class="leading-[21px] px-6 h-10 text-[14px]" />
			</div>

			<div class="hidden max-lg:block">
				<BurgerMenu
					class="w-6 h-6 text-white cursor-pointer"
					@click="isMenuOpen = !isMenuOpen"
				/>
			</div>
		</div>

		<div
			v-if="isMenuOpen"
			class="lg:hidden absolute top-full left-0 w-full bg-[#140B01] px-6 py-4 z-50 flex flex-col items-start gap-4"
		>
			<div
				v-for="(title, index) in titles"
				:key="index"
				class="text-white text-center text-[14px] font-medium leading-[21px] font-ibm-mono cursor-pointer max-xl:text-[13px]"
			>
				{{ title }}
			</div>
			<Button class="leading-[21px] px-6 h-10 text-[14px]" />
		</div>
	</div>
</template>

<style scoped></style>
