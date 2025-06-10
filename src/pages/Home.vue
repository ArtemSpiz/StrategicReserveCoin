<script setup>
import Benefits from '@/components/sections/Home/Benefits.vue'
import Hero from '@/components/sections/Home/Hero.vue'
import Traders from '@/components/sections/Home/Traders.vue'
import Mission from '@/components/sections/Home/Mission.vue'
import RoadmapCards from '@/components/sections/Home/RoadmapCards.vue'
import Strategnomics from '@/components/sections/Home/Strategnomics.vue'
import FAQ from '@/components/sections/Home/FAQ.vue'
import Roadmap from '@/components/sections/Home/Roadmap.vue'
</script>

<template>
	<div class="flex flex-col gap-[80px] max-md:gap-[65px] max-sm:gap-[56px]">
		<Hero />
		<Traders />
		<Benefits />
		<div
			class="flex flex-col gap-[160px] max-md:gap-[130px] max-sm:gap-[108px]"
		>
			<Mission />
			<RoadmapCards />
			<Strategnomics />
			<FAQ />
		</div>
		<Roadmap />
	</div>
</template>

<style scoped></style>
