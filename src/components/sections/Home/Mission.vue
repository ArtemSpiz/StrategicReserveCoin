<script setup>
import MissionMascot from '@/assets/img/MissionMascot.png'
import MissionMascotMobil from '@/assets/img/MissionMascotMobil.png'

import { Missions } from '@/data/MissionData'
</script>

<template>
	<div
		class="flex flex-col relative items-center px-16 gap-[50px] max-xl:px-10 max-lg:px-8 max-md:px-[20px]"
	>
		<div class="flex flex-col text-center gap-4">
			<div
				class="text-white text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col items-center max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[35px] max-xs:text-[32px]"
			>
				Mission
			</div>
			<div
				class="text-white text-[16px] font-ibm-sans leading-[24px] font-normal w-[615px] text-center max-lg:w-[400px] max-md:text-[15px] max-xs:text-[14px] max-xs:w-full"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</div>
		</div>
		<div
			class="max-w-[1600px] flex relative justify-between w-full max-xl:items-center max-lg:flex max-lg:flex-col-reverse max-lg:items-center"
		>
			<div
				class="flex flex-col items-center gap-[200px] max-xl:gap-[180px] max-lg:flex-row max-md:gap-[41px]"
			>
				<div class="flex flex-col gap-4 items-center max-md:gap-2">
					<component
						:is="Missions[0].image"
						class="max-md:w-[32px] max-md:h-[32px]"
					/>
					<div
						class="flex flex-col items-center text-center max-w-[342px] gap-2 max-md:max-w-[170px]"
					>
						<h3
							class="text-white font-ibm-sans text-[24px] font-medium leading-[26px] max-xl:text-[22px] text-nowrap max-md:text-wrap"
						>
							{{ Missions[0].title }}
						</h3>
						<p
							class="text-gray-text font-ibm-sans text-[14px] font-medium leading-[16px] max-md:text-[12px]"
						>
							{{ Missions[0].subtitle }}
						</p>
					</div>
				</div>
				<div class="flex flex-col gap-4 items-center max-md:gap-2">
					<component
						:is="Missions[1].image"
						class="max-md:w-[32px] max-md:h-[32px]"
					/>
					<div
						class="flex flex-col items-center text-center max-w-[342px] gap-2 max-md:max-w-[170px]"
					>
						<h3
							class="text-white font-ibm-sans text-[24px] font-medium leading-[26px] max-xl:text-[22px] text-nowrap max-md:text-wrap"
						>
							{{ Missions[1].title }}
						</h3>
						<p
							class="text-gray-text font-ibm-sans text-[14px] font-medium leading-[16px] max-md:text-[12px] max-xs:w-[150px]"
						>
							{{ Missions[1].subtitle }}
						</p>
					</div>
				</div>
			</div>

			<div
				class="w-[850px] h-auto -mt-[75px] max-custom-xl:-mt-[0px] max-xl:w-[750px] max-xl:justify-center max-xl:h-auto max-lg:w-[650px] max-lg:h-auto max-lg:-mt-[0px] max-md:w-[400px] max-md:h-[422px] max-sm:h-full max-sm:w-full"
			>
				<img
					loading="lazy"
					decoding="async"
					:src="MissionMascot"
					alt="MissionMascot"
					class="max-w-noe w-full max-lg:hidden"
				/>
				<img
					loading="lazy"
					decoding="async"
					:src="MissionMascotMobil"
					alt="MissionMascotMobil"
					class="max-w-noe w-full hidden max-lg:flex h-auto max-h-[600px] max-md:max-h-[400px] max-sm:max-h-full object-contain"
				/>
			</div>

			<div
				class="flex flex-col items-center gap-[200px] max-xl:gap-[180px] max-lg:flex-row max-md:gap-[41px]"
			>
				<div class="flex flex-col gap-4 items-center max-md:gap-2">
					<component
						:is="Missions[2].image"
						class="max-md:w-[32px] max-md:h-[32px]"
					/>
					<div
						class="flex flex-col items-center text-center max-w-[342px] gap-2 max-md:max-w-[170px]"
					>
						<h3
							class="text-white font-ibm-sans text-[24px] font-medium leading-[26px] max-xl:text-[22px] text-nowrap max-md:text-wrap"
						>
							{{ Missions[2].title }}
						</h3>
						<p
							class="text-gray-text font-ibm-sans text-[14px] font-medium leading-[16px] max-md:text-[12px]"
						>
							{{ Missions[2].subtitle }}
						</p>
					</div>
				</div>
				<div class="flex flex-col gap-4 items-center max-md:gap-2">
					<component
						:is="Missions[3].image"
						class="max-md:w-[32px] max-md:h-[32px]"
					/>
					<div
						class="flex flex-col items-center text-center max-w-[342px] gap-2 max-md:max-w-[170px]"
					>
						<h3
							class="text-white font-ibm-sans text-[24px] font-medium leading-[26px] max-xl:text-[22px] text-nowrap max-md:text-wrap"
						>
							{{ Missions[3].title }}
						</h3>
						<p
							class="text-gray-text font-ibm-sans text-[14px] font-medium leading-[16px] max-md:text-[12px]"
						>
							{{ Missions[3].subtitle }}
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="max-md:hidden">
			<div
				class="absolute w-[5px] h-[5px] top-[8%] left-[10%] dot rounded-full bg-white opacity-[0.2] animate-float"
				style="filter: drop-shadow(0px 0px 6px #fff)"
			></div>
			<div
				class="absolute w-[5px] h-[5px] top-[45%] left-[8%] dot rounded-full bg-white opacity-[0.2] animate-wave-sway"
				style="filter: drop-shadow(0px 0px 6px #fff)"
			></div>
			<div
				class="absolute w-[5px] h-[5px] top-[30%] left-[4%] dot rounded-full bg-white opacity-[0.2] animate-float"
				style="filter: drop-shadow(0px 0px 6px #fff)"
			></div>
			<div
				class="absolute w-[5px] h-[5px] top-[20%] right-[25%] dot rounded-full bg-white opacity-[0.2] animate-float"
				style="filter: drop-shadow(0px 0px 6px #fff)"
			></div>
			<div
				class="absolute w-[5px] h-[5px] top-[45%] right-[4%] dot rounded-full bg-white opacity-[0.2] animate-float"
				style="filter: drop-shadow(0px 0px 6px #fff)"
			></div>
		</div>
	</div>
</template>

<style></style>
