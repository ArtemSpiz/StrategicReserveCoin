<script setup>
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Roadmap = [
	{
		title: 'Launch Phase ',
		year: '2025',
		num: 'Q1',
		text: 'Introduction of Strategic Reserve token and community outreach. - Initial partnerships with like-minded projects and influencers.',
	},
	{
		title: 'Growth Phase',
		year: '2025',
		num: 'Q2',
		text: [
			'KOL partnerships & meme invasion',
			'First leak drops: Frostbite Files',
			'Expanding DEX listings',
		],
	},
	{
		title: 'Community Empowerment',
		year: '2025',
		num: 'Q3',
		text: 'Host educational events to spread awareness of SRC mission. Introduce exclusive benefits for token holders.',
	},
]
const roadmapWrapper = ref(null)
const roadmapSection = ref(null)
const roadmapInner = ref(null)

onMounted(() => {
	nextTick(() => {
		const ctx = gsap.context(() => {
			const totalCards = roadmapInner.value.children.length
			const cardWidth = roadmapInner.value.children[0].offsetWidth
			const totalScroll = (cardWidth + 32) * (totalCards - 1)

			gsap.to(roadmapInner.value, {
				x: `-${totalScroll}`,
				ease: 'none',
				scrollTrigger: {
					trigger: roadmapWrapper.value,
					start: 'bottom bottom',
					end: `+=${totalScroll}`,
					pin: roadmapSection.value,
					scrub: 1,
					invalidateOnRefresh: true,
				},
			})
		}, roadmapWrapper)

		onBeforeUnmount(() => {
			ctx.revert()
			ScrollTrigger.getAll().forEach(trigger => trigger.kill())
		})
	})
})
</script>

<template>
	<div ref="roadmapWrapper" class="relative w-full">
		<section ref="roadmapSection" class="w-full overflow-hidden">
			<div
				class="flex flex-col items-center gap-[48px] max-xl:gap-10 max-md:gap-8 max-sm:gap-6"
			>
				<div class="flex flex-col items-center text-center gap-4">
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
					class="relative w-full overflow-hidden"
					style="scrollbar-width: none; -ms-overflow-style: none"
				>
					<div ref="roadmapInner" class="flex whitespace-nowrap">
						<div
							ref="roadmapSection"
							v-for="(plan, index) in Roadmap"
							:key="index"
							class="w-[520px] flex-shrink-0 px-8 pt-12 pb-4 flex-col items-start gap-[220px] border-t border-[#564F48] bg-[#140B01] shadow-[0_-14px_14px_0_rgba(88,54,18,0.3)] flex max-lg:gap-[150px] max-lg:w-[400px] max-lg:px-6 max-lg:pt-8 max-lg:pb-2 max-sm:px-[15px] max-sm:pt-[23px] max-sm:pb-[7px] max-xs:gap-[108px] max-xs:w-[256px]"
						>
							<div class="h-[67px] w-full justify-between flex max-lg:h-full">
								<div
									class="flex flex-col justify-between max-lg:justify-normal"
								>
									<div
										class="text-white font-ibm-sans text-[24px] font-medium leading-[25px] max-lg:text-[20px] max-sm:text-[18px] max-xs:whitespace-normal"
									>
										{{ plan.title }}
									</div>
									<div
										class="text-gray-text text-[14px] font-ibm-sans font-medium left-4 max-sm:text-[12px]"
									>
										{{ plan.year }}
									</div>
								</div>
								<div
									class="text-right font-ibm-mono text-[56px] font-normal leading-[61px] max-lg:text-[45px] max-lg:leading-[100%] max-sm:text-32px"
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
								class="w-[422px] text-gray-roadmap text-[14px] font-ibm-sans font-normal max-lg:w-full"
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
