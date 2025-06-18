<script setup>
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { DiagramData } from '@/data/DiagramData'
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
		const isMobile = window.innerWidth < 740

		const cardsScroll = gsap.context(() => {
			const cards = roadmapInner.value.children

			if (isMobile) {
				const spacing = window.innerHeight * 0.05
				const cardHeight = 410
				const totalScroll = (cards.length - 1) * spacing + cardHeight / 2

				Array.from(cards).forEach((card, index) => {
					card.style.position = 'absolute'
					card.style.left = '50%'
					card.style.transform = 'translateX(-50%)'
					card.style.top = `${index * spacing}px`
					card.style.height = `${cardHeight}px`
					card.style.width = '330px'
					card.style.maxWidth = '330px'
					card.style.transition = 'all 0.4s ease'
					card.style.background = 'rgba(255, 255, 255, 0.2)'
					card.style.filter = 'brightness(0.6)'
					card.style.zIndex = '1'
					const content = card.querySelector('.card-content')
					if (content) content.style.display = 'none'
					card.style.display = 'flex'
					card.style.flexDirection = 'column'
				})

				const first = cards[0]
				if (first) {
					const content = first.querySelector('.card-content')
					if (content) content.style.display = 'flex'
					first.style.filter = 'brightness(1)'
					first.style.background =
						'linear-gradient(217deg, rgba(23, 9, 21, 0.00) 60.09%, rgba(247, 124, 50, 0.20) 150.05%), #140B01'
					first.style.zIndex = '10'
				}

				ScrollTrigger.create({
					trigger: roadmapWrapper.value,
					start: 'center center',
					end: `+=${totalScroll}`,
					scrub: 0.8,
					pin: roadmapSection.value,
					invalidateOnRefresh: true,
					snap: {
						snapTo: 1 / (cards.length - 1),
						duration: { min: 0.6, max: 0.8 },
						ease: 'power3.inOut',
					},
					onUpdate: self => {
						const progress = self.progress
						const activeIdx = Math.round(progress * (cards.length - 1))

						Array.from(cards).forEach((card, index) => {
							const content = card.querySelector('.card-content')
							if (index === activeIdx) {
								card.style.background =
									'linear-gradient(217deg, rgba(23, 9, 21, 0.00) 40.09%, rgba(247, 124, 50, 0.20) 100.05%), #140B01'
								card.style.filter = 'brightness(1)'
								card.style.zIndex = '10'
								if (content) content.style.display = 'flex'
							} else {
								card.style.filter = 'brightness(0.6)'
								if (content) content.style.display = 'none'
								card.style.zIndex = '1'
								card.style.background = 'rgba(50, 43, 35, 0.40)'
							}
						})

						const offsetY = -progress * ((cards.length - 1) * spacing)
						gsap.to(roadmapInner.value, {
							y: offsetY,
							duration: 0.5,
							ease: 'power3.out',
						})
					},
				})
			}
		}, roadmapWrapper)

		onBeforeUnmount(() => {
			cardsScroll.revert()
			ScrollTrigger.getAll().forEach(trigger => trigger.kill())
		})
	})
})
</script>

<template>
	<div
		ref="roadmapWrapper"
		class="flex items-center justify-center px-[60px] pt-[100px] pb-[48px] max-lg:pt-[90px] max-xl:px-[50px] max-md:pt-[80px] max-md:px-[40px] max-sm:px-[20px] relative mx-auto max-w-[1600px]"
	>
		<section
			ref="roadmapSection"
			class="relative w-full overflow-hidden max-md:flex max-md:h-screen max-md:justify-center max-md:overflow-hidden mx-auto max-w-[1600px] max-[1420px]:justify-center max-[1420px]:flex"
		>
			<div
				ref="roadmapInner"
				:class="screenWidth < 640 ? 'flex flex-col' : 'flex '"
				class="bg-[url('@/assets/img/lineCards.png')] bg-ggg bg-no-repeat w-max h-max items-center max-[1420px]:grid max-[1420px]:grid-cols-2 max-[1420px]:justify-center max-[1420px]:bg-none max-[1420px]:gap-[16px]"
			>
				<div
					v-for="(item, index) in DiagramData"
					:key="index"
					:class="[
						'flex flex-col gap-[32px] px-[16px] py-[24px] border-l w-[329px] h-[613px] max-[1420px]:h-[500px] max-md:h-[410px]',
						screenWidth < 1420
							? 'border-l-[#F77C32]'
							: index === 0
							? 'border-l-[#F77C32]'
							: 'border-l-cards',
						screenWidth < 1420
							? 'justify-start'
							: index === 2 || index === 3
							? 'sm:justify-end'
							: 'sm:justify-start',
					]"
					:style="{
						background:
							screenWidth < 1420
								? 'linear-gradient(217deg, rgba(23, 9, 21, 0) 60.09%, rgba(247, 124, 50, 0.2) 150.05%)'
								: index === 0
								? 'linear-gradient(217deg, rgba(23, 9, 21, 0) 60.09%, rgba(247, 124, 50, 0.2) 150.05%)'
								: '',
					}"
				>
					<div class="flex justify-between self-stretch items-center">
						<div class="flex flex-col justify-between h-[48px]">
							<div
								class="text-white font-ibm-sans text-[18px] font-medium leading-[110%] card-title gap-1 flex"
							>
								<span class="first-word">{{ item.title.split(' ')[0] }}</span>
								<span class="rest-title">
									{{ item.title.split(' ').slice(1).join(' ') }}
								</span>
							</div>
							<div
								class="text-gray-text font-ibm-sans text-[14px] font-medium leading-[120%]"
							>
								{{ item.year }}
							</div>
						</div>
						<div
							class="text-[44px] font-ibm-mono font-normal leading-[110%] bg-btn-gradient card-num"
							style="
								background-clip: text;
								-webkit-background-clip: text;
								-webkit-text-fill-color: transparent;
							"
						>
							{{ item.quarter }}
						</div>
					</div>

					<ul
						class="list-disc list-inside flex flex-col gap-[20px] card-content max-h-[250px]"
					>
						<li
							v-for="(task, idx) in item.tasks"
							:key="idx"
							class="text-white font-ibm-sans text-[16px] font-normal leading-[150%]"
						>
							{{ task }}
						</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</template>
