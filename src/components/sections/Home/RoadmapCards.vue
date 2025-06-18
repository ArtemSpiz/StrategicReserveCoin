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
		const activeIndex = ref(0)

		const ctx = gsap.context(() => {
			const cards = roadmapInner.value.children

			if (isMobile) {
				const cards = roadmapInner.value.children
				const spacing = window.innerHeight * 0.192
				const cardHeight = 260
				const totalScroll = (cards.length - 1) * spacing

				Array.from(cards).forEach((card, index) => {
					card.style.position = 'absolute'
					card.style.left = '50%'
					card.style.transform = 'translateX(-50%)'
					card.style.top = `${index * spacing}px`
					card.style.height = `${cardHeight}px`
					card.style.width = '100%'
					card.style.maxWidth = '100%'
					card.style.transition = 'all 0.3s ease'
					card.style.background = 'rgba(255, 255, 255, 0.2)'
					card.style.opacity = '0.4'
					card.style.zIndex = '1'
					card.style.display = 'flex'
					card.style.justifyContent = 'space-between'
					card.style.flexDirection = 'column'

					cards[0].style.opacity = '1'
					cards[0].style.background = '#140B01'
					cards[0].style.zIndex = '10'
					cards[0].style.transform = 'translateX(-50%) scale(1.05)'
				})

				ScrollTrigger.create({
					trigger: roadmapWrapper.value,
					start: 'center center',
					end: `+=${totalScroll}`,
					scrub: true,
					pin: roadmapSection.value,
					invalidateOnRefresh: true,
					snap: {
						snapTo: 1 / (cards.length - 1),
						duration: { min: 0.2, max: 0.4 },
						ease: 'power1.inOut',
					},
					onUpdate: self => {
						const progress = self.progress
						const activeIdx = Math.round(progress * (cards.length - 1))

						Array.from(cards).forEach((card, index) => {
							if (index === activeIdx) {
								card.style.opacity = '1'
								card.style.background = '#140B01'
								card.style.zIndex = '10'
								card.style.transform = 'translateX(-50%) scale(1.05)'
							} else {
								card.style.opacity = '0.4'
								card.style.background = 'rgba(255,255,255,0.2)'
								card.style.zIndex = '1'
								card.style.transform = 'translateX(-50%) scale(1)'
							}
						})

						const offsetY = -progress * ((cards.length - 1) * spacing)
						gsap.to(roadmapInner.value, {
							y: offsetY,
							duration: 0,
							ease: 'none',
						})
					},
				})
			} else {
				const cardWidth =
					screenWidth < 700 ? 350 : screenWidth < 1024 ? 400 : 520
				const collapsedWidth =
					screenWidth < 700 ? 130 : screenWidth < 1024 ? 140 : 180
				const scrollSegment =
					screenWidth < 700 ? 400 : screenWidth < 1024 ? 550 : 700

				ScrollTrigger.create({
					trigger: roadmapInner.value,
					start: 'bottom bottom',
					end: `+=${scrollSegment * cards.length}`,
					pin: roadmapSection.value,
					scrub: false,
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

					ScrollTrigger.create({
						trigger: roadmapWrapper.value,
						start: () => `${start}px`,
						end: () => `${end}px`,
						scrub: true,
						onUpdate: self => {
							const progress = self.progress
							const width = cardWidth - progress * (cardWidth - collapsedWidth)
							card.style.width = `${width}px`

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
					class="relative w-full overflow-hidden h-[100%] max-w-[1600px]"
					style="scrollbar-width: none; -ms-overflow-style: none"
				>
					<div
						ref="roadmapInner"
						:class="
							screenWidth < 640 ? 'flex flex-col' : 'flex whitespace-nowrap'
						"
						class="transition-transform duration-300 h-[100%] max-sm:h-[300px] max-sm:justify-center relative"
					>
						<div
							v-for="(plan, index) in Roadmap"
							:key="index"
							class="2xl:h-[500px] max-2xl:h-[390px] roadmap-card w-[520px] flex-shrink-0 px-8 pt-12 pb-4 flex-col items-start justify-between border-t border-[#564F48] bg-[#140B01] shadow-[0_-14px_14px_0_rgba(88,54,18,0.3)] flex max-lg:h-[320px] max-lg:w-[400px] max-lg:px-6 max-lg:pt-8 max-lg:pb-2 max-md:px-[20px] max-md:w-full max-sm:pt-[23px] max-sm:pb-[7px] max-sm:px-[15px] max-sm:justify-center max-sm:gap-[80px] max-sm:border-none max-sm:shadow-none"
						>
							<div
								class="h-[67px] w-full justify-between flex max-lg:h-full max-sm:h-[72px] max-sm:border-t max-sm:border-[#564F48] max-sm:pt-[10px] max-sm:shadow-[0_-6.914px_6.914px_0_rgba(88,54,18,0.3)] max-sm:px-[15px]"
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
								class="w-full whitespace-normal text-gray-roadmap text-[14px] font-ibm-sans font-normal max-lg:w-full card-content max-sm:px-[15px]"
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
