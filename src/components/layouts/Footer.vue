<script setup>
import logo from '@/assets/img/logo.png'
import telegram from '@/assets/img/tg.png'
import inbuco from '@/assets/img/inbuco.png'
import twitter from '@/assets/img/twitter.png'
</script>

<template>
	<div>
		<div
			class="flex justify-between items-start self-stretch px-[140px] py-[24px] max-xl:px-[100px] max-lg:px-[60px] max-md:px-[40px] max-sm:px-[20px] max-sm:flex-col max-sm:gap-4 max-sm:justify-center max-sm:items-center"
		>
			<div class="flex items-center gap-[10px] shrink-0">
				<div class="w-8 h-11 max-xs:w-[35px] max-xs:h-[48px]">
					<img
						loading="lazy"
						decoding="async"
						:src="logo"
						alt="logo"
						class="w-full h-full"
					/>
				</div>
				<div
					class="text-white text-[21px] font-normal leading-[76.635%] flex flex-col items-start gap-[2px] max-xs:text-[18px]"
				>
					Strategic
					<span class="text-[15px] max-xs:text-[13px]"> Reserve Coin </span>
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
			class="flex justify-between items-start self-stretch px-[140px] py-[24px] max-xl:px-[100px] max-lg:px-[60px] max-md:px-[40px] max-sm:px-[20px] max-sm:flex-col max-sm:gap-[8px] max-sm:items-center max-sm:justify-center"
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
						<img loading="lazy" decoding="async" :src="twitter" alt="twitter" />
					</div>
					<div class="w-[16px] cursor-pointer">
						<img
							loading="lazy"
							decoding="async"
							:src="telegram"
							alt="telegram"
						/>
					</div>
					<div class="w-[16px] cursor-pointer">
						<img loading="lazy" decoding="async" :src="inbuco" alt="inbuco" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>
