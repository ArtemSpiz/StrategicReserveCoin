<script setup>
import StrategnomicsCheckMark from '@/assets/svg/StrategnomicsCheckMark.vue'
import StrategnomicsDoc from '@/assets/svg/StrategnomicsDoc.vue'
import StrategnomicsCoin from '@/assets/img/StrategnomicsCoin.png'
import Button from '@/components/ui/Button.vue'

const StrategnomicsCards = [
	{
		title: 'Name',
		subtitle: 'Strategic Reserve Coin',
	},
	{
		title: 'Type',
		subtitle: 'ERC20',
	},
	{
		title: 'Supply',
		subtitle: '2 Billion $SRC Tokens',
	},
]

const address = '0XAC1D2486AAF3B5C0C3D868558B082A531B2B4'

function copyToClipboard() {
	try {
		navigator.clipboard.writeText(address)
	} catch (err) {
		console.error('Помилка копіювання:', err)
	}
}
</script>

<template>
	<div class="flex flex-col items-center justify-center gap-12">
		<div class="flex flex-col items-center text-center gap-4">
			<div
				class="text-white text-[48px] font-ibm-mono font-normal leading-[52px]"
			>
				Strategnomics
			</div>
			<div
				class="text-white w-[615px] font-ibm-sans text-[16px] font-medium text-center"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</div>
		</div>

		<div
			class="flex flex-col items-center text-center gap-[32px] w-full px-[64px]"
		>
			<div class="flex flex-col items-center text-center gap-6 w-full">
				<div class="flex justify-center gap-4 items-center self-stretch">
					<div
						v-for="(card, index) in StrategnomicsCards"
						:key="index"
						class="p-6 flex flex-col gap-2 border border-[#433C34] bg-gray-benefit w-[350px]"
						style="box-shadow: inset 0 0 14px 0 rgba(88, 54, 18, 0.3)"
					>
						<div
							class="text-[14px] font-ibm-sans text-gray-text font-medium leading-4"
						>
							{{ card.title }}
						</div>
						<div
							class="text-[24px] text-[#FFEA70] font-ibm-sans font-medium leading-[26px]"
						>
							{{ card.subtitle }}
						</div>
					</div>
				</div>

				<div class="flex flex-col justify-center items-center gap-2">
					<div
						class="text-[14px] font-ibm-sans text-gray-text font-medium leading-4"
					>
						Official contract address
					</div>
					<div
						class="p-4 flex items-center gap-2"
						style="border: 2px solid rgba(255, 255, 255, 0.2)"
					>
						<div class="text-white text-[16px] font-medium">
							{{ address }}
						</div>
						<component
							@click="copyToClipboard"
							:is="StrategnomicsDoc"
							class="cursor-pointer"
						/>
					</div>
				</div>
				<div class="flex justify-between items-center relative w-full">
					<div class="flex flex-col">
						<div
							class="bg-[url('@/assets/img/LeftUp.png')] bg-ggg w-[395px] bg-no-repeat flex flex-col gap-2 items-start p-[32px]"
						>
							<component :is="StrategnomicsCheckMark" />
							<div
								class="text-[14px] font-ibm-sans font-medium leading-4 text-gray-text pt-2"
							>
								Exchange Liquidity
							</div>
							<div
								class="text-[24px] font-ibm-sans font-medium leading-[36px] text-white"
							>
								400 Million
							</div>
							<div
								class="bg-btn-gradient w-[48px] p-[10px] flex justify-center font-ibm-sans text-18px font-medium leading-7 rounded-lg text-white"
							>
								20%
							</div>
						</div>

						<div
							class="bg-[url('@/assets/img/LeftDown.png')] bg-ggg w-[395px] bg-no-repeat flex flex-col gap-2 items-start p-[32px]"
						>
							<component :is="StrategnomicsCheckMark" />
							<div
								class="text-[14px] font-ibm-sans font-medium leading-4 text-gray-text pt-2"
							>
								Public Presale
							</div>
							<div
								class="text-[24px] font-ibm-sans font-medium leading-[36px] text-white"
							>
								660 Million
							</div>
							<div
								class="bg-[#FFEA70] w-[48px] p-[10px] flex justify-center font-ibm-sans text-18px font-medium leading-7 rounded-lg text-[#140B01]"
							>
								33%
							</div>
						</div>
					</div>

					<div
						class="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
					>
						<img
							:src="StrategnomicsCoin"
							alt="StrategnomicsCoin"
							class="w-[700px] h-[700px] max-w-none"
						/>
					</div>

					<div class="flex flex-col">
						<div
							class="bg-[url('@/assets/img/RigthUp.png')] bg-ggg w-[395px] bg-no-repeat flex flex-col gap-2 items-end p-[32px]"
						>
							<component :is="StrategnomicsCheckMark" />
							<div
								class="text-[14px] font-ibm-sans font-medium leading-4 text-gray-text pt-2"
							>
								Team
							</div>
							<div
								class="text-[24px] font-ibm-sans font-medium leading-[36px] text-white"
							>
								440 Million
							</div>
							<div
								class="bg-[#FFEA70] w-[48px] p-[10px] flex justify-center font-ibm-sans text-18px font-medium leading-7 rounded-lg text-[#140B01]"
							>
								22%
							</div>
						</div>

						<div
							class="bg-[url('@/assets/img/RigthDown.png')] bg-ggg w-[395px] bg-no-repeat flex flex-col gap-2 items-end p-[32px]"
						>
							<component :is="StrategnomicsCheckMark" />
							<div
								class="text-[14px] font-ibm-sans font-medium leading-4 text-gray-text pt-2"
							>
								Rewards
							</div>
							<div
								class="text-[24px] font-ibm-sans font-medium leading-[36px] text-white"
							>
								300 Million
							</div>
							<div
								class="bg-[#FFEA70] w-[48px] p-[10px] flex justify-center font-ibm-sans text-18px font-medium leading-7 rounded-lg text-[#140B01]"
							>
								15%
							</div>
						</div>
					</div>
				</div>
			</div>
			<Button customClass="leading-[21px] px-12 h-14 text-[16px] w-max " />
		</div>
	</div>
</template>

<style></style>
