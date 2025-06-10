<script setup>
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
</script>

<template>
	<div class="flex flex-col items-center gap-[48px]">
		<div class="flex flex-col items-center text-center gap-4">
			<div
				class="text-white text-[48px] font-ibm-mono font-normal leading-[52px]"
			>
				Roadmap
			</div>
			<div
				class="text-white w-[615px] font-ibm-sans text-[16px] font-medium text-center"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</div>
		</div>

		<div
			class="w-full overflow-x-auto"
			style="scrollbar-width: none; -ms-overflow-style: none"
		>
			<div class="flex whitespace-nowrap">
				<div
					v-for="(plan, index) in Roadmap"
					:key="index"
					class="w-[520px] flex-shrink-0 px-8 pt-12 pb-4 flex-col items-start gap-[220px] border-t border-[#564F48] bg-[#140B01] shadow-[0_-14px_14px_0_rgba(88,54,18,0.3)] flex"
				>
					<div class="h-[67px] w-full justify-between flex">
						<div class="flex flex-col justify-between">
							<div
								class="text-white font-ibm-sans text-[24px] font-medium leading-[25px]"
							>
								{{ plan.title }}
							</div>
							<div class="text-gray-text font-ibm-sans font-medium left-4">
								{{ plan.year }}
							</div>
						</div>
						<div
							class="text-right font-ibm-mono text-[56px] font-normal leading-[61px]"
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
						class="w-[422px] text-gray-roadmap text-[14px] font-ibm-sans font-normal"
					>
						<template v-if="Array.isArray(plan.text)">
							<ul class="list-disc list-inside">
								<li v-for="(line, i) in plan.text" :key="i">
									{{ line }}
								</li>
							</ul>
						</template>
						<template v-else>
							<div style="white-space: pre-line">
								{{ plan.text }}
							</div>
						</template>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>
