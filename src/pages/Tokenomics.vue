<script setup>
import Roadmap from '@/components/sections/Home/Roadmap.vue'
import TokenomicsHero from '@/components/sections/Tokenomics/TokenomicsHero.vue'
import TokenSupply from '@/components/sections/Tokenomics/TokenSupply.vue'
import TokenomicsSection from '@/components/sections/Tokenomics/TokenomicsSection.vue'
</script>

<template>
	<div class="flex flex-col gap-[100px] max-md:gap-[80px]">
		<TokenomicsHero />
		<TokenSupply />
		<TokenomicsSection />
	</div>
	<Roadmap />
</template>

<style scoped></style>
