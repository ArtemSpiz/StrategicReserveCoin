<script setup>
import { ref } from 'vue'
import logo from '@/assets/img/logo.png'
import Button from '../ui/Button.vue'
import BurgerMenu from '@/assets/svg/BurgerMenu.vue'
import goldHero from '@/assets/img/goldHero.png'

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
			<router-link to="/" class="flex items-center gap-[10px] shrink-0">
				<div class="w-8 h-11 max-xs:w-[30px] max-xs:h-[40px]">
					<img
						loading="lazy"
						decoding="async"
						:src="logo"
						alt="logo"
						class="w-full h-full"
					/>
				</div>
				<div
					class="text-white text-[17px] font-normal leading-[13px] flex flex-col items-start gap-[2px] max-xs:text-[15px]"
				>
					Strategic
					<span class="text-[12.49px] leading-[13.243px] max-xs:text-[11px]">
						Reserve Coin
					</span>
				</div>
			</router-link>

			<div class="flex items-center gap-6 max-lg:hidden">
				<div class="" v-for="(title, index) in titles" :key="index">
					<router-link
						v-if="title === 'Tokenomics'"
						:to="'/tokenomics'"
						class="text-white text-center text-[14px] font-medium leading-[21px] font-ibm-mono cursor-pointer max-xl:text-[13px]"
					>
						{{ title }}
					</router-link>
					<router-link
						v-else-if="title === 'Roadmap'"
						:to="'/roadmap'"
						class="text-white text-center text-[14px] font-medium leading-[21px] font-ibm-mono cursor-pointer max-xl:text-[13px]"
					>
						{{ title }}
					</router-link>
					<router-link
						v-else
						:to="{
							path: '/',
							query: { scrollTo: title.toLowerCase().replace(/\s+/g, '-') },
						}"
						class="text-white text-center text-[14px] font-medium leading-[21px] font-ibm-mono cursor-pointer max-xl:text-[13px]"
					>
						{{ title }}
					</router-link>
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
			class="lg:hidden absolute top-full left-[20px] right-[20px] mt-[24px] z-50 flex flex-col items-start gap-4 border-[#FFF] border rounded-[20px] p-[20px] items-center"
			style="background: rgba(20, 11, 1, 0.4); backdrop-filter: blur(10px)"
		>
			<div
				v-for="(title, index) in titles"
				:key="index"
				class="w-full items-start text-start gap-4"
			>
				<router-link
					v-if="title === 'Tokenomics'"
					:to="'/tokenomics'"
					class="text-white text-center text-[14px] font-medium leading-[21px] font-ibm-mono cursor-pointer max-xl:text-[13px]"
				>
					{{ title }}
				</router-link>
				<router-link
					v-else-if="title === 'Roadmap'"
					:to="'/roadmap'"
					class="text-white text-center text-[14px] font-medium leading-[21px] font-ibm-mono cursor-pointer max-xl:text-[13px]"
				>
					{{ title }}
				</router-link>
				<router-link
					v-else
					:to="{
						path: '/',
						query: { scrollTo: title.toLowerCase().replace(/\s+/g, '-') },
					}"
					class="text-white text-center text-[14px] font-medium leading-[21px] font-ibm-mono cursor-pointer max-xl:text-[13px]"
				>
					{{ title }}
				</router-link>
				<hr v-if="index !== titles.length - 1" class="border-[#E4E7EC80]" />
			</div>
			<div>
				<img loading="lazy" decoding="async" :src="goldHero" alt="gold" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
