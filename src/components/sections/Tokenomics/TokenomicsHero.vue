<script setup>
import Header from '@/components/layouts/Header.vue'
import Button from '@/components/ui/Button.vue'
import HeroTokenomicsMob from '@/assets/img/HeroTokenomicsMob.png'
</script>

<template>
	<div>
		<Header />
		<div
			class="bg-[url('@/assets/img/bgHeroTocenomics.png')] bg-no-repeat bg-ggg bg-[right_-70px_top_0px] w-full max-xl:bg-cover max-lg:bg-none"
		>
			<div
				class="flex flex-col justify-center pl-[65px] items-start gap-[80px] pt-[88px] pb-[128px] max-xl:pl-[20px] max-lg:pt-[60px] max-lg:pb-0 max-lg:pl-0 max-lg:justify-center max-lg:items-center max-lg:gap-[60px] max-md:gap-[44px] max-md:px-[20px] max-md:pt-[45px]"
			>
				<div
					class="flex flex-col gap-[16px] items-start max-lg:items-center max-lg:text-center max-lg:gap-[24px]"
				>
					<div
						class="text-white text-[64px] font-ibm-mono font-semibold leading-[100%] max-xl:text-[60px] max-md:text-[50px] max-sm:text-[44px]"
					>
						Strategnomics
					</div>
					<div
						class="text-white text-[16px] font-ibm-sans leading-[150%] font-medium w-[615px] max-xl:w-[450px] max-xl:text-[14px] max-md:text-[12px] max-md:font-normal max-sm:w-full"
					>
						SRC’s tokenomics model is structured to support network security,
						incentivize participation, and sustain long-term value through
						controlled issuance and strategic allocation. The total initial
						supply of SRC tokens is 2,150,000,000, distributed across various
						categories, including early-stage investment rounds, ecosystem
						incentives, staking rewards, and liquidity provisioning.
					</div>
				</div>

				<Button customClass="leading-[21px] px-12 h-14 text-[16px] w-max " />
			</div>

			<div class="hidden max-lg:flex w-full justify-center">
				<img :src="HeroTokenomicsMob" alt="gold" />
			</div>
		</div>
	</div>
</template>

<style></style>
