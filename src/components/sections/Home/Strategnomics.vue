<script setup>
import StrategnomicsCheckMark from '@/assets/svg/StrategnomicsCheckMark.vue'
import StrategnomicsMoney from '@/assets/svg/StrategnomicsMoney.vue'
import StrategnomicsRewards from '@/assets/svg/StrategnomicsRewards.vue'
import StrategnomicsTeam from '@/assets/svg/StrategnomicsTeam.vue'
import StrategnomicsDoc from '@/assets/svg/StrategnomicsDoc.vue'
import StrategnomicsCoin from '@/assets/img/StrategnomicsCoin.png'
import Button from '@/components/ui/Button.vue'
import { StrategnomicsCards } from '@/data/StrategnomicsCardsData'

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
	<div
		class="flex flex-col items-center px-[64px] justify-center gap-12 max-xl:gap-10 max-xl:px-[40px] max-md:gap-8 max-md:px-[30px] max-sm:px-[20px] max-lg:gap-[32px]"
	>
		<div class="flex flex-col items-center text-center gap-4">
			<div
				class="text-white text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col items-center max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[35px] max-xs:text-[32px]"
			>
				Strategnomics
			</div>
			<div
				class="text-white text-[16px] font-ibm-sans leading-[24px] font-normal w-[615px] text-center max-lg:w-[400px] max-md:text-[15px] max-xs:text-[14px] max-xs:w-full"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</div>
		</div>

		<div class="flex flex-col items-center text-center gap-[32px] w-full">
			<Button
				customClass="leading-[21px] px-12 h-14 text-[16px] w-max hidden max-sm:block"
			/>

			<div
				class="flex flex-col items-center text-center gap-6 w-full max-lg:gap-[32px]"
			>
				<div
					class="flex gap-4 items-center justify-center self-stretch w-full max-lg:flex-col"
				>
					<div
						v-if="StrategnomicsCards[0]"
						class="p-6 flex flex-col gap-2 border border-[#433C34] bg-gray-benefit w-[350px] max-xl:w-[300px] max-lg:w-full"
						style="box-shadow: inset 0 0 14px 0 rgba(88, 54, 18, 0.3)"
					>
						<div
							class="text-[14px] font-ibm-sans text-gray-text font-medium leading-4"
						>
							{{ StrategnomicsCards[0].title }}
						</div>
						<div
							class="text-[24px] text-[#FFEA70] font-ibm-sans font-medium leading-[26px] max-lg:text-[22px] max-lg:leading-[120%] max-sm:text-[20px]"
						>
							{{ StrategnomicsCards[0].subtitle }}
						</div>
					</div>

					<div class="flex max-lg:flex-row gap-4 max-lg:w-full">
						<div
							v-if="StrategnomicsCards[1]"
							class="p-6 flex flex-col gap-2 border border-[#433C34] bg-gray-benefit w-[350px] max-xl:w-[300px] max-lg:w-[50%] max-sm:w-max max-xs:p-[12px] max-xs:justify-center"
							style="box-shadow: inset 0 0 14px 0 rgba(88, 54, 18, 0.3)"
						>
							<div
								class="text-[14px] font-ibm-sans text-gray-text font-medium leading-4"
							>
								{{ StrategnomicsCards[1].title }}
							</div>
							<div
								class="text-[24px] text-[#FFEA70] font-ibm-sans font-medium leading-[26px] max-lg:text-[22px] max-lg:leading-[120%] max-sm:text-[20px]"
							>
								{{ StrategnomicsCards[1].subtitle }}
							</div>
						</div>

						<div
							v-if="StrategnomicsCards[2]"
							class="p-6 flex flex-col gap-2 border border-[#433C34] bg-gray-benefit w-[350px] max-xl:w-[300px] max-lg:w-[50%] max-sm:w-full max-xs:px-0"
							style="box-shadow: inset 0 0 14px 0 rgba(88, 54, 18, 0.3)"
						>
							<div
								class="text-[14px] font-ibm-sans text-gray-text font-medium leading-4"
							>
								{{ StrategnomicsCards[2].title }}
							</div>
							<div
								class="text-[24px] text-[#FFEA70] font-ibm-sans font-medium leading-[26px] max-lg:text-[22px] max-lg:leading-[120%] max-sm:text-[20px]"
							>
								{{ StrategnomicsCards[2].subtitle }}
							</div>
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
						<div
							class="text-white text-[16px] font-medium max-lg:text-[14px] max-sm:text-[12px]"
						>
							{{ address }}
						</div>
						<component
							@click="copyToClipboard"
							:is="StrategnomicsDoc"
							class="cursor-pointer max-md:w-[25px] max-md:h-[25px] max-sm:w-16px max-sm:h-16px"
						/>
					</div>
				</div>
				<div
					class="flex justify-between items-center relative w-full max-md:flex-col max-md:h-[550px]"
				>
					<div class="flex flex-col max-md:flex-row">
						<div
							class="bg-[url('@/assets/img/LeftUp.png')] bg-ggg w-[395px] bg-no-repeat flex flex-col gap-2 items-start p-[32px] max-lg:w-full max-md:bg-[url('@/assets/img/LeftUpMobil.png')] max-md:p-[24px] max-md:gap-1 max-md:w-[175px] max-md:h-[230px]"
						>
							<component
								:is="StrategnomicsCheckMark"
								class="max-lg:w-[30px] max-md:w-[16px] max-md:h-[16px]"
							/>
							<div
								class="text-[14px] font-ibm-sans font-medium leading-4 text-gray-text pt-2 max-lg:text-[13px] max-md:pt-0"
							>
								Exchange Liquidity
							</div>
							<div
								class="text-[24px] font-ibm-sans font-medium leading-[36px] text-white max-lg:text-[22px] max-md:text-[18px]"
							>
								400 Million
							</div>
							<div
								class="bg-[#FFEA70] w-[48px] p-[10px] flex justify-center font-ibm-sans text-[18px] font-medium leading-7 rounded-lg text-black max-lg:text-[16px] max-lg:p-[7px] max-md:p-[3.5px] max-md:text-[14px] max-md:h-[16px] max-md:w-max max-md:rounded-[3px] max-md:items-center"
							>
								20%
							</div>
						</div>

						<div
							class="bg-[url('@/assets/img/LeftDown.png')] bg-ggg w-[395px] bg-no-repeat flex flex-col gap-2 items-start p-[32px] max-lg:w-full max-md:bg-[url('@/assets/img/RightUpMobil.png')] max-md:items-end max-md:p-[24px] max-md:gap-1 max-md:w-[175px] max-md:h-[230px]"
						>
							<component
								:is="StrategnomicsMoney"
								class="max-lg:w-[30px] max-md:w-[16px] max-md:h-[16px]"
							/>
							<div
								class="text-[14px] font-ibm-sans font-medium leading-4 text-gray-text pt-2 max-lg:text-[13px] max-md:pt-0"
							>
								Public Presale
							</div>
							<div
								class="text-[24px] font-ibm-sans font-medium leading-[36px] text-white max-lg:text-[22px] max-md:text-[18px]"
							>
								660 Million
							</div>
							<div
								class="bg-[#FFEA70] w-[48px] p-[10px] flex justify-center font-ibm-sans text-[18px] font-medium leading-7 rounded-lg text-[#140B01] max-lg:text-[16px] max-lg:p-[7px] max-md:p-[3.5px] max-md:text-[14px] max-md:h-[16px] max-md:w-max max-md:rounded-[3px] max-md:items-center"
							>
								33%
							</div>
						</div>
					</div>

					<div
						class="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 -z-[1]"
					>
						<img
							:src="StrategnomicsCoin"
							alt="StrategnomicsCoin"
							class="w-[700px] h-[700px] max-w-none max-xl:w-[600px] max-xl:h-[600px] max-lg:w-[550px] max-lg:h-[550px] max-md:w-[400px] max-md:h-[400px] max-sm:w-[350px] max-sm:h-[350px]"
						/>
					</div>

					<div class="flex flex-col max-md:flex-row">
						<div
							class="bg-[url('@/assets/img/RigthUp.png')] bg-ggg w-[395px] bg-no-repeat flex flex-col gap-2 items-end p-[32px] max-lg:w-full max-md:bg-[url('@/assets/img/LeftDownMobil.png')] max-md:items-start max-md:p-[24px] max-md:gap-1 max-md:justify-end max-md:w-[175px] max-md:h-[230px]"
						>
							<component
								:is="StrategnomicsTeam"
								class="max-lg:w-[30px] max-md:w-[16px] max-md:h-[16px]"
							/>
							<div
								class="text-[14px] font-ibm-sans font-medium leading-4 text-gray-text pt-2 max-lg:text-[13px] max-md:pt-0"
							>
								Team
							</div>
							<div
								class="text-[24px] font-ibm-sans font-medium leading-[36px] text-white max-lg:text-[22px] max-md:text-[18px]"
							>
								440 Million
							</div>
							<div
								class="bg-[#FFEA70] w-[48px] p-[10px] flex justify-center font-ibm-sans text-[18px] font-medium leading-7 rounded-lg text-[#140B01] max-lg:text-[16px] max-lg:p-[7px] max-md:p-[3.5px] max-md:text-[14px] max-md:h-[16px] max-md:w-max max-md:rounded-[3px] max-md:items-center"
							>
								22%
							</div>
						</div>

						<div
							class="bg-[url('@/assets/img/RigthDown.png')] bg-ggg w-[395px] bg-no-repeat flex flex-col gap-2 items-end p-[32px] max-lg:w-full max-md:bg-[url('@/assets/img/RightDownMobil.png')] max-md:p-[24px] max-md:gap-1 max-md:justify-end max-md:w-[175px] max-md:h-[230px]"
						>
							<component
								:is="StrategnomicsRewards"
								class="max-lg:w-[30px] max-md:w-[16px] max-md:h-[16px]"
							/>
							<div
								class="text-[14px] font-ibm-sans font-medium leading-4 text-gray-text pt-2 max-lg:text-[13px] max-md:pt-0"
							>
								Rewards
							</div>
							<div
								class="text-[24px] font-ibm-sans font-medium leading-[36px] text-white max-lg:text-[22px] max-md:text-[18px]"
							>
								300 Million
							</div>
							<div
								class="bg-[#FFEA70] w-[48px] p-[10px] flex justify-center font-ibm-sans text-[18px] font-medium leading-7 rounded-lg text-[#140B01] max-lg:text-[16px] max-lg:p-[7px] max-md:p-[3.5px] max-md:text-[14px] max-md:h-[16px] max-md:w-max max-md:rounded-[3px] max-md:items-center"
							>
								15%
							</div>
						</div>
					</div>
				</div>
			</div>
			<Button
				customClass="leading-[21px] px-12 h-14 text-[16px] w-max max-sm:hidden "
			/>
		</div>
	</div>
</template>

<style></style>
