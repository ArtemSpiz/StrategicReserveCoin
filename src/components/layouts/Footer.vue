<script setup>
import logo from '@/assets/img/logo.png'
import telegram from '@/assets/img/tg.png'
import inbuco from '@/assets/img/inbuco.png'
import twitter from '@/assets/img/twitter.png'
</script>

<template>
	<div>
		<div
			class="flex justify-between items-start self-stretch px-[140px] py-[24px]"
		>
			<div class="flex items-center gap-[10px] shrink-0">
				<div class="w-8 h-11">
					<img :src="logo" alt="logo" class="w-full h-full" />
				</div>
				<div
					class="text-white text-[17px] font-normal leading-[13px] flex flex-col items-start gap-[2px] title-logo"
				>
					Strategic
					<span class="text-[12.49px] leading-[13.243px] subtitle"
						>Reserve Coin</span
					>
				</div>
			</div>
			<div class="flex gap-[57px] items-start">
				<div class="flex gap-3 flex-col items-start">
					<div
						class="text-[#B1B0B7] font-ibm-sans text-[14px] font-bold leading-5"
					>
						Navigation
					</div>
					<div class="flex flex-col items-start">
						<div
							class="text-white text-[14px] font-ibm-sans font-normal leading-5"
						>
							Benefits
						</div>
					</div>
				</div>
				<div class="flex gap-3 flex-col items-start w-[135px]">
					<div
						class="text-[#B1B0B7] font-ibm-sans text-[14px] font-bold leading-5"
					>
						Contact
					</div>
					<div class="flex flex-col items-start">
						<div
							class="text-white text-[14px] font-ibm-sans font-normal leading-5 cursor-pointer"
						>
							info@email.io
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="flex justify-between items-start self-stretch px-[140px] py-[24px]"
		>
			<div
				class="text-[#B1B0B7] text-[14px] font-ibm-sans font-normal leading-5"
			>
				SRC. All right reserved. © 2025
			</div>
			<div class="flex items-center gap-2">
				<div
					class="text-[#B1B0B7] font-ibm-sans font-normal leading-5 text-[14px]"
				>
					Follow us on:
				</div>
				<div class="flex gap-3 items-center">
					<div class="w-[16px] cursor-pointer">
						<img :src="twitter" alt="twitter" />
					</div>
					<div class="w-[16px] cursor-pointer">
						<img :src="telegram" alt="telegram" />
					</div>
					<div class="w-[16px] cursor-pointer">
						<img :src="inbuco" alt="inbuco" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>
