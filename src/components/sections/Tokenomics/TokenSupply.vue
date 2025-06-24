<script setup>
import gold from '@/assets/img/goldTraders.png'
import goldMobil from '@/assets/img/goldTraders.png'
import { tableContent } from '@/data/TokenomicsData'
</script>

<template>
	<div
		class="flex flex-col gap-[48px] items-center justify-center bg-[url('@/assets/img/tokenSupplyBg.png')] bg-ggg bg-no-repeat max-lg:bg-none max-sm:px-[20px]"
	>
		<div
			class="flex flex-col gap-[48px] items-center justify-center max-lg:gap-[40px] max-md:gap-[30px] max-sm:gap-[24px]"
		>
			<div
				class="text-white font-ibm-mono text-[48px] font-normal leading-[110%] max-lg:text-[45px] max-md:text-[40px] max-sm:text-[32px]"
			>
				Token Supply
			</div>
			<div class="flex flex-col justify-center">
				<div
					v-for="(table, index) in tableContent"
					:key="index"
					class="flex items-center"
				>
					<div
						class="text-white font-ibm-sans text-[18px] leading-[120%] font-medium py-[20px] pl-[48px] w-[335px] items-start border border-benefits max-xl:w-[300px] max-md:w-[250px] max-md:text-[16px] max-md:pl-0 max-sm:w-[211px] max-sm:py-[19px] max-sm:px-[8px]"
					>
						{{ table.title }}
					</div>
					<div
						class="text-white font-ibm-sans text-[18px] leading-[120%] font-medium py-[20px] pl-[40px] w-[335px] items-start border border-benefits max-xl:w-[300px] max-md:w-[250px] max-md:text-[16px] max-md:pl-0 max-sm:w-[130px] max-sm:py-[19px] max-sm:px-[8px]"
					>
						{{ table.price }}
					</div>
				</div>
			</div>
		</div>
		<div class="w-[350px] h-[83px] max-md:hidden">
			<img loading="lazy" decoding="async" :src="gold" alt="gold" />
		</div>
		<div class="w-[220px] h-[70px] hidden max-md:flex">
			<img loading="lazy" decoding="async" :src="goldMobil" alt="gold" />
		</div>
	</div>
</template>

<style></style>
