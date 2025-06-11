<script setup>
import MissionArrow from '@/assets/svg/MissionArrow.vue'
import MissionDiscord from '@/assets/svg/MissionDiscord.vue'
import MissionPeople from '@/assets/svg/MissionPeople.vue'
import MissionSquare from '@/assets/svg/MissionSquare.vue'
import MissionMascot from '@/assets/img/MissionMascot.png'
import MissionMascotMobil from '@/assets/img/MissionMascotMobil.png'

const Missions = [
	{
		title: 'Blend Playfulness',
		subtitle:
			'Combine meme culture’s excitement with real-world utility and secure, lasting value.',
		image: MissionDiscord,
	},
	{
		title: 'Fuel Growth & Adoption',
		subtitle:
			'Drive dynamic growth through fun, relatable experiences and innovative crypto solutions.',
		image: MissionArrow,
	},
	{
		title: 'Build Community',
		subtitle:
			'Foster a vibrant, engaged community that drives innovation and inclusivity in the meme coin world.',
		image: MissionPeople,
	},
	{
		title: 'Embrace Transparency',
		subtitle:
			'Champion open communication and fair governance to empower every holder.',
		image: MissionSquare,
	},
]
</script>

<template>
	<div
		class="flex flex-col items-center px-16 gap-[50px] max-xl:px-10 max-lg:px-8 max-md:px-[20px]"
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
			class="flex relative justify-between w-full max-lg:flex max-lg:flex-col-reverse max-lg:items-center"
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
				class="w-[850px] h-auto -mt-[75px] max-custom-xl:-mt-[25px] max-lg:w-[100%] max-lg:h-[610px] max-lg:-mt-[0px] max-md:w-[400px] max-md:h-[422px]"
			>
				<img
					:src="MissionMascot"
					alt="MissionMascot"
					class="max-w-noe w-full max-xl:h-[550px] max-lg:hidden"
				/>
				<img
					:src="MissionMascotMobil"
					alt="MissionMascotMobil"
					class="max-w-noe w-full hidden max-lg:flex h-full"
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
	</div>
</template>

<style></style>
