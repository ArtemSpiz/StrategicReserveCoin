<script setup>
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'
import { Roadmap } from '@/data/RoadmapCardsData'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const roadmapWrapper = ref(null)
const roadmapSection = ref(null)
const roadmapInner = ref(null)

const screenWidth = ref(window.innerWidth)

const updateScreenWidth = () => {
	screenWidth.value = window.innerWidth
}

onMounted(() => {
	window.addEventListener('resize', updateScreenWidth)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', updateScreenWidth)
})

onMounted(() => {
	nextTick(() => {
		const screenWidth = window.innerWidth
		const isMobile = screenWidth < 640

		const ctx = gsap.context(() => {
			const cards = roadmapInner.value.children

			if (isMobile) {
				const totalCards = cards.length
				const maxHeight = 260
				const minHeight = 80
				const scrollSegment = 260

				ScrollTrigger.create({
					trigger: roadmapInner.value,
					start: 'top top',
					end: `+=${scrollSegment * totalCards}`,
					pin: roadmapSection.value,
					scrub: false,
					invalidateOnRefresh: true,
				})

				Array.from(cards).forEach((card, i) => {
					const content = card.querySelector('.card-content')

					if (i >= 3) {
						card.style.height = `${maxHeight}px`

						restTitle.style.visibility = 'visible'
						return
					}

					card.style.height = `${maxHeight}px`

					const start = i * scrollSegment
					const end = start + scrollSegment

					ScrollTrigger.create({
						trigger: roadmapWrapper.value,
						start: () => `${start}px`,
						end: () => `${end}px`,
						scrub: true,
						onUpdate: self => {
							const progress = self.progress
							const height = maxHeight - progress * (maxHeight - minHeight)
							card.style.height = `${height}px`

							content.style.visibility = height < 140 ? 'hidden' : 'visible'
						},
					})
				})
			} else {
				const cardWidth =
					screenWidth < 700 ? 350 : screenWidth < 1024 ? 400 : 520
				const collapsedWidth =
					screenWidth < 700 ? 130 : screenWidth < 1024 ? 140 : 180
				const scrollSegment =
					screenWidth < 700 ? 400 : screenWidth < 1024 ? 550 : 700

				const fourthCard = roadmapInner.value.children[2]
				const totalScrollWidth = fourthCard.offsetLeft + fourthCard.offsetWidth

				const scrollTriggerInstance = ScrollTrigger.create({
					trigger: roadmapInner.value,
					start: 'bottom bottom',
					end: () => `+=${totalScrollWidth}`,
					pin: roadmapSection.value,
					scrub: false,
					invalidateOnRefresh: true,
				})

				Array.from(cards).forEach((card, i) => {
					const restTitle = card.querySelector('.rest-title')
					const content = card.querySelector('.card-content')
					const number = card.querySelector('.card-num')

					const visibilityThresholds = {
						number: screenWidth < 700 ? 330 : screenWidth < 1024 ? 300 : 400,
						content: screenWidth < 700 ? 230 : screenWidth < 1024 ? 190 : 220,
						title: screenWidth < 700 ? 280 : screenWidth < 1024 ? 290 : 330,
					}

					const start = i * scrollSegment
					const end = start + scrollSegment

					card.style.width = `${cardWidth}px`

					let lastWidth = cardWidth

					ScrollTrigger.create({
						trigger: roadmapWrapper.value,
						start: () => `${start}px`,
						end: () => `${end}px`,
						scrub: true,
						onUpdate: self => {
							if (scrollTriggerInstance.progress === 1) {
								return
							}

							const progress = self.progress
							const width = cardWidth - progress * (cardWidth - collapsedWidth)
							card.style.width = `${width}px`
							lastWidth = width

							number.style.visibility =
								width < visibilityThresholds.number ? 'hidden' : 'visible'
							content.style.visibility =
								width < visibilityThresholds.content ? 'hidden' : 'visible'
							restTitle.style.visibility =
								width < visibilityThresholds.title ? 'hidden' : 'visible'
						},
					})
				})
			}
		}, roadmapWrapper)

		onBeforeUnmount(() => {
			ctx.revert()
			ScrollTrigger.getAll().forEach(trigger => trigger.kill())
		})
	})
})
</script>

<template>
	<div ref="roadmapWrapper" class="relative w-full h-[100%]">
		<section ref="roadmapSection" class="w-full overflow-hidden">
			<div
				class="flex flex-col items-center gap-[48px] max-xl:gap-10 max-md:gap-8 max-sm:gap-6"
			>
				<div
					class="flex flex-col items-center text-center gap-4 max-md:mx-[20px]"
				>
					<div
						class="text-white text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col items-center max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[35px] max-xs:text-[32px]"
					>
						Roadmap
					</div>
					<div
						class="text-white text-[16px] font-ibm-sans leading-[24px] font-normal w-[615px] text-center max-lg:w-[400px] max-md:text-[15px] max-xs:text-[14px] max-xs:w-full"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</div>
				</div>

				<div
					class="relative w-full h-[100%] max-w-[1600px]"
					style="scrollbar-width: none; -ms-overflow-style: none"
				>
					<div
						ref="roadmapInner"
						:class="
							screenWidth < 640 ? 'flex flex-col' : 'flex whitespace-nowrap'
						"
						class="transition-transform duration-300 h-[100%] relative max-sm:h-auto"
					>
						<div
							v-for="(plan, index) in Roadmap"
							:key="index"
							class="2xl:h-[500px] max-2xl:h-[390px] roadmap-card w-[520px] flex-shrink-0 px-8 pt-12 pb-4 flex-col items-start justify-between border-t border-[#564F48] bg-[#140B01] shadow-[0_-14px_14px_0_rgba(88,54,18,0.3)] flex max-lg:h-[320px] max-lg:w-[400px] max-lg:px-6 max-lg:pt-8 max-lg:pb-2 max-md:px-[20px] max-md:w-full max-sm:pb-[7px] max-sm:justify-between max-sm:border-t max-sm:border-[#564F48] max-sm:pt-[10px] max-sm:shadow-[0_-6.914px_6.914px_0_rgba(88,54,18,0.3)] max-sm:px-[15px] max-sm:h-full"
						>
							<div
								class="h-[67px] w-full justify-between flex max-lg:h-full max-sm:h-[72px]"
							>
								<div
									class="flex flex-col justify-between max-lg:justify-normal h-[67px] max-lg:h-full max-sm:h-max"
								>
									<div
										class="text-white font-ibm-sans text-[24px] font-medium leading-[25px] max-lg:text-[20px] max-sm:text-[18px] max-xs:whitespace-normal card-title gap-1 flex w-full"
									>
										<span class="first-word">{{
											plan.title.split(' ')[0]
										}}</span>
										<span class="rest-title">
											{{ plan.title.split(' ').slice(1).join(' ') }}
										</span>
									</div>
									<div
										class="text-gray-text text-[14px] font-ibm-sans font-medium left-4 max-sm:text-[12px] card-year"
									>
										{{ plan.year }}
									</div>
								</div>
								<div
									class="card-num text-right font-ibm-mono text-[56px] font-normal leading-[61px] max-lg:text-[45px] max-lg:leading-[100%] max-sm:text-32px"
									style="
										background: linear-gradient(
											96deg,
											#f78c2e 66.09%,
											#f64340 95.18%
										);
										background-clip: text;
										-webkit-background-clip: text;
										-webkit-text-fill-color: transparent;
									"
								>
									{{ plan.num }}
								</div>
							</div>
							<div
								class="w-full whitespace-normal text-gray-roadmap text-[14px] font-ibm-sans font-normal max-lg:w-full card-content"
							>
								<template v-if="Array.isArray(plan.text)">
									<ul class="list-disc list-inside max-xs:whitespace-normal">
										<li v-for="(line, i) in plan.text" :key="i">
											{{ line }}
										</li>
									</ul>
								</template>
								<template v-else>
									<div
										class="whitespace-pre-line max-lg:w-full max-lg:whitespace-normal"
									>
										{{ plan.text }}
									</div>
								</template>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style></style>
