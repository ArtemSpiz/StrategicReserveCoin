<script setup>
import Header from '@/components/layouts/Header.vue'
import Button from '../../ui/Button.vue'
</script>

<template>
	<div
		class="bg-hero-pattern h-screen w-full bg-no-repeat bg-ggg relative overflow-hidden max-2xl:bg-mascot max-2xl:bg-center max-lg:bg-[right_-200px_top_0] max-sm:bg-hero-pattern-mobil max-sm:bg-bottom max-sm:bg-ggg max-xs:bg-cover"
	>
		<Header />

		<div
			class="flex flex-col gap-14 px-16 w-[750px] py-[100px] max-2xl:p-16 max-2xl:w-[630px] max-lg:w-[520px] max-lg:px-[20px] max-lg:py-[45px] max-md:w-[450px] max-sm:w-full max-sm:items-center max-sm:text-center max-sm:gap-8 max-xs:py-[25px]"
		>
			<div class="flex flex-col gap-6 max-sm:w-[400px] max-xs:w-full">
				<div
					class="text-white font-ibm-mono text-[64px] leading-[64px] font-semibold max-2xl:text-[60px] max-lg:text-[50px] max-sm:text-[44px] max-sm:leading-[100%] max-xs:text-[40px]"
				>
					Meme Power Bitcoin <span class="text-[#F78730]">Roots</span>
				</div>
				<div
					class="text-white text-[20px] font-normal font-ibm-sans max-lg:text-[18px] max-sm:text-[16px] max-xs:text-[14px]"
				>
					Strategic Reserve Coin reimagines the crypto landscape—blending
					playful energy with secure, community-driven growth.
				</div>
			</div>

			<Button customClass="leading-[21px] px-12 h-14 text-[16px] w-max " />
		</div>
		<div class="absolute bottom-0 w-full overflow-hidden bg-[#B95312] py-4">
			<div
				class="whitespace-nowrap animate-marquee text-white font-ibm-mono text-[26px] leading-[30px] font-normal [text-shadow:0px_1.414px_0.354px_#291006] flex"
			>
				<span class="mx-8 items-center flex gap-2"
					>XXX
					<span class="font-ibm-sans text-[14px] leading-[21px]"
						>Potential TVL</span
					>
				</span>
				<span class="mx-8 items-center flex gap-2"
					>XXX
					<span class="font-ibm-sans text-[14px] leading-[21px]"
						>Transactions Per Second</span
					>
				</span>
				<span class="mx-8 items-center flex gap-2"
					>XXX
					<span class="font-ibm-sans text-[14px] leading-[21px]"
						>Average transaction cost</span
					>
				</span>
				<span class="mx-8 items-center flex gap-2"
					>XXX
					<span class="font-ibm-sans text-[14px] leading-[21px]"
						>Potential TVL</span
					>
				</span>
				<span class="mx-8 items-center flex gap-2"
					>XXX
					<span class="font-ibm-sans text-[14px] leading-[21px]"
						>Transactions Per Second</span
					>
				</span>
				<span class="mx-8 items-center flex gap-2"
					>XXX
					<span class="font-ibm-sans text-[14px] leading-[21px]"
						>Average transaction cost</span
					>
				</span>
				<span class="mx-8 items-center flex gap-2"
					>XXX
					<span class="font-ibm-sans text-[14px] leading-[21px]"
						>Potential TVL</span
					>
				</span>
				<span class="mx-8 items-center flex gap-2"
					>XXX
					<span class="font-ibm-sans text-[14px] leading-[21px]"
						>Transactions Per Second</span
					>
				</span>
				<span class="mx-8 items-center flex gap-2"
					>XXX
					<span class="font-ibm-sans text-[14px] leading-[21px]"
						>Average transaction cost</span
					>
				</span>
				<span class="mx-8 items-center flex gap-2"
					>XXX
					<span class="font-ibm-sans text-[14px] leading-[21px]"
						>Potential TVL</span
					>
				</span>
				<span class="mx-8 items-center flex gap-2"
					>XXX
					<span class="font-ibm-sans text-[14px] leading-[21px]"
						>Transactions Per Second</span
					>
				</span>
				<span class="mx-8 items-center flex gap-2"
					>XXX
					<span class="font-ibm-sans text-[14px] leading-[21px]"
						>Average transaction cost</span
					>
				</span>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
