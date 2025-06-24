<script setup>
import Benefits from '@/components/sections/Home/Benefits.vue'
import Hero from '@/components/sections/Home/Hero.vue'
import Traders from '@/components/sections/Home/Traders.vue'
import Mission from '@/components/sections/Home/Mission.vue'
import RoadmapCards from '@/components/sections/Home/RoadmapCards.vue'
import Strategnomics from '@/components/sections/Home/Strategnomics.vue'
import FAQ from '@/components/sections/Home/FAQ.vue'
import Roadmap from '@/components/sections/Home/Roadmap.vue'

import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

function scrollToSection(section) {
	if (section) {
		setTimeout(() => {
			const el = document.getElementById(section)
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' })
			}
		}, 100)
	}
}

onMounted(() => {
	scrollToSection(route.query.scrollTo)
})

watch(
	() => route.query.scrollTo,
	newVal => {
		scrollToSection(newVal)
	}
)
</script>

<template>
	<div class="flex flex-col gap-[80px] max-md:gap-[65px] max-sm:gap-[56px]">
		<Hero />
		<Traders id="about" />
		<Benefits id="benefits" />
		<div
			class="flex flex-col gap-[160px] max-md:gap-[130px] max-sm:gap-[108px]"
		>
			<Mission id="mission" />
			<RoadmapCards id="how-it-works" />
			<Strategnomics />
			<FAQ id="faq" />
		</div>
		<Roadmap id="whitepaper" />
	</div>
</template>

<style scoped></style>
