<script setup>
import MissionArrow from '@/assets/svg/MissionArrow.vue'
import MissionDiscord from '@/assets/svg/MissionDiscord.vue'
import MissionPeople from '@/assets/svg/MissionPeople.vue'
import MissionSquare from '@/assets/svg/MissionSquare.vue'
import MissionMascot from '@/assets/img/MissionMascot.png'

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
	<div class="flex flex-col items-center px-16 gap-[50px]">
		<div class="flex flex-col text-center gap-4">
			<div
				class="text-white text-[48px] font-ibm-mono font-normal leading-[52px]"
			>
				Mission
			</div>
			<div
				class="text-white w-[615px] font-ibm-sans text-[16px] font-medium text-center"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</div>
		</div>
		<div class="flex relative justify-between w-full">
			<div class="flex flex-col items-center gap-[155px] pt-[60px]">
				<div class="flex flex-col gap-4 items-center">
					<component :is="Missions[0].image" />
					<div
						class="flex flex-col items-center text-center max-w-[283px] gap-2"
					>
						<h3
							class="text-white font-ibm-sans text-[24px] font-medium leading-[26px]"
						>
							{{ Missions[0].title }}
						</h3>
						<p
							class="text-gray-text font-ibm-sans text-[14px] font-medium leading-[16px]"
						>
							{{ Missions[0].subtitle }}
						</p>
					</div>
				</div>
				<div class="flex flex-col gap-4 items-center">
					<component :is="Missions[1].image" />
					<div
						class="flex flex-col items-center text-center max-w-[283px] gap-2"
					>
						<h3
							class="text-white font-ibm-sans text-[24px] font-medium leading-[26px]"
						>
							{{ Missions[1].title }}
						</h3>
						<p
							class="text-gray-text font-ibm-sans text-[14px] font-medium leading-[16px]"
						>
							{{ Missions[1].subtitle }}
						</p>
					</div>
				</div>
			</div>

			<div
				class="absolute top-[70%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 -z-20"
			>
				<img
					:src="MissionMascot"
					alt="MissionMascot"
					class="w-[850px] h-[724px] max-w-none"
				/>
			</div>

			<div class="flex flex-col items-center gap-[155px] pt-[60px]">
				<div class="flex flex-col gap-4 items-center">
					<component :is="Missions[2].image" />
					<div
						class="flex flex-col items-center text-center max-w-[283px] gap-2"
					>
						<h3
							class="text-white font-ibm-sans text-[24px] font-medium leading-[26px]"
						>
							{{ Missions[2].title }}
						</h3>
						<p
							class="text-gray-text font-ibm-sans text-[14px] font-medium leading-[16px]"
						>
							{{ Missions[2].subtitle }}
						</p>
					</div>
				</div>
				<div class="flex flex-col gap-4 items-center">
					<component :is="Missions[3].image" />
					<div
						class="flex flex-col items-center text-center max-w-[283px] gap-2"
					>
						<h3
							class="text-white font-ibm-sans text-[24px] font-medium leading-[26px]"
						>
							{{ Missions[3].title }}
						</h3>
						<p
							class="text-gray-text font-ibm-sans text-[14px] font-medium leading-[16px]"
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
