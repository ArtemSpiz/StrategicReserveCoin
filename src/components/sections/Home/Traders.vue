<script setup>
import gold from '@/assets/img/goldTraders.png'
import goldMobil from '@/assets/img/goldTradersMobil.png'

import { ref } from 'vue'

function generateLines(n = 7) {
	const margin = 20
	return Array.from({ length: n }, (_, i) => ({
		pos: (i / (n - 1)) * (100 - margin) + margin / 2,
		offset: Math.random() * 60 - 30,
		fromTop: Math.random() > 0.5,
		fromLeft: Math.random() > 0.5,
	}))
}

const vLines = ref(generateLines(7))
const hLines = ref(generateLines(7))
</script>

<template>
	<div class="flex relative justify-center items-center overflow-hidden">
		<div
			class="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] z-[-1] max-xl:left-[-150px] max-md:left-[-250px] max-sm:left-[-200px] max-sm:w-[304px] max-sm:h-[304px]"
		>
			<div class="w-full h-full relative">
				<div
					v-for="(line, i) in vLines"
					:key="'vl-' + i"
					class="absolute w-[1px] bg-white/10"
					:class="
						line.fromTop ? 'animate-line-vert-top' : 'animate-line-vert-bottom'
					"
					:style="{
						left: `${line.pos}%`,
						top: line.fromTop ? `${line.offset}px` : 'auto',
						bottom: !line.fromTop ? `${line.offset}px` : 'auto',
						height: `calc(100% + ${Math.abs(line.offset)}px)`,
						animationDelay: `${i * 0.2}s`,
					}"
				/>

				<div
					v-for="(line, i) in vLines"
					:key="'vl-' + i"
					class="absolute w-[1px] bg-white/10"
					:class="
						line.fromTop ? 'animate-line-vert-top' : 'animate-line-vert-bottom'
					"
					:style="{
						left: `${line.pos}%`,
						top: line.fromTop ? `${line.offset}px` : 'auto',
						bottom: !line.fromTop ? `${line.offset}px` : 'auto',
						height: `calc(100% + ${Math.abs(line.offset)}px)`,
						animationDelay: `${i * 0.7}s`,
					}"
				/>

				<div
					v-for="(line, i) in hLines"
					:key="'hl-' + i"
					class="absolute h-[1px] bg-white/10"
					:class="
						line.fromLeft
							? 'animate-line-horiz-left'
							: 'animate-line-horiz-right'
					"
					:style="{
						top: `${line.pos}%`,
						left: line.fromLeft ? `${line.offset}px` : 'auto',
						right: !line.fromLeft ? `${line.offset}px` : 'auto',
						width: `calc(100% + ${Math.abs(line.offset)}px)`,
						animationDelay: `${i * 0.2}s`,
					}"
				/>

				<div
					v-for="(line, i) in hLines"
					:key="'hl-' + i"
					class="absolute h-[1px] bg-white/10"
					:class="
						line.fromLeft
							? 'animate-line-horiz-left'
							: 'animate-line-horiz-right'
					"
					:style="{
						top: `${line.pos}%`,
						left: line.fromLeft ? `${line.offset}px` : 'auto',
						right: !line.fromLeft ? `${line.offset}px` : 'auto',
						width: `calc(100% + ${Math.abs(line.offset)}px)`,
						animationDelay: `${i * 0.7}s`,
					}"
				/>
			</div>
		</div>

		<div
			class="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] z-[-1] max-xl:right-[-150px] max-md:right-[-250px] max-sm:right-[-200px] max-sm:w-[304px] max-sm:h-[304px]"
		>
			<div class="w-full h-full relative">
				<div
					v-for="(line, i) in vLines"
					:key="'vr-' + i"
					class="absolute w-[1px] bg-white/10"
					:class="
						line.fromTop ? 'animate-line-vert-top' : 'animate-line-vert-bottom'
					"
					:style="{
						left: `${line.pos}%`,
						top: line.fromTop ? `${line.offset}px` : 'auto',
						bottom: !line.fromTop ? `${line.offset}px` : 'auto',
						height: `calc(100% + ${Math.abs(line.offset)}px)`,
						animationDelay: `${i * 0.2}s`,
					}"
				/>

				<div
					v-for="(line, i) in vLines"
					:key="'vr-' + i"
					class="absolute w-[1px] bg-white/10"
					:class="
						line.fromTop ? 'animate-line-vert-top' : 'animate-line-vert-bottom'
					"
					:style="{
						left: `${line.pos}%`,
						top: line.fromTop ? `${line.offset}px` : 'auto',
						bottom: !line.fromTop ? `${line.offset}px` : 'auto',
						height: `calc(100% + ${Math.abs(line.offset)}px)`,
						animationDelay: `${i * 0.7}s`,
					}"
				/>
				<div
					v-for="(line, i) in hLines"
					:key="'hr-' + i"
					class="absolute h-[1px] bg-white/10"
					:class="
						line.fromLeft
							? 'animate-line-horiz-left'
							: 'animate-line-horiz-right'
					"
					:style="{
						top: `${line.pos}%`,
						left: line.fromLeft ? `${line.offset}px` : 'auto',
						right: !line.fromLeft ? `${line.offset}px` : 'auto',
						width: `calc(100% + ${Math.abs(line.offset)}px)`,
						animationDelay: `${i * 0.2}s`,
					}"
				/>

				<div
					v-for="(line, i) in hLines"
					:key="'hr-' + i"
					class="absolute h-[1px] bg-white/10"
					:class="
						line.fromLeft
							? 'animate-line-horiz-left'
							: 'animate-line-horiz-right'
					"
					:style="{
						top: `${line.pos}%`,
						left: line.fromLeft ? `${line.offset}px` : 'auto',
						right: !line.fromLeft ? `${line.offset}px` : 'auto',
						width: `calc(100% + ${Math.abs(line.offset)}px)`,
						animationDelay: `${i * 0.7}s`,
					}"
				/>
			</div>
		</div>

		<div
			class="w-full flex flex-col justify-center items-center gap-[70px] max-md:gap-[45px]"
		>
			<div
				class="flex flex-col gap-6 justify-center items-center max-sm:px-[20px]"
			>
				<div class="flex flex-col gap-4">
					<div
						class="text-white text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col items-center max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[35px] max-xs:text-[32px]"
					>
						Made by traders <span>for traders</span>
					</div>
					<div
						class="text-white text-[16px] font-ibm-sans leading-[24px] font-normal w-[615px] text-center max-lg:w-[400px] max-md:text-[15px] max-xs:text-[14px] max-xs:w-full"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</div>
				</div>
				<button
					class="h-10 px-6 py-[10px] border-white border-[1px] w-max rounded-full text-[14px] font-ibm-sans font-normal text-white"
				>
					Explore all Features
				</button>
			</div>
			<div class="w-[350px] h-[82px]">
				<img
					loading="lazy"
					decoding="async"
					:src="gold"
					alt="gold"
					class="w-full h-full max-md:h-0"
				/>
				<img
					loading="lazy"
					decoding="async"
					:src="goldMobil"
					alt="goldMobil"
					class="w-full h-0 max-md:h-full"
				/>
			</div>
		</div>

		<div class="max-md:hidden">
			<div
				class="absolute w-[5px] h-[5px] top-[10%] left-[10%] dot rounded-full bg-white opacity-[0.2] animate-float"
				style="filter: drop-shadow(0px 0px 6px #fff)"
			></div>
			<div
				class="absolute w-[5px] h-[5px] top-[15%] left-[2%] dot rounded-full bg-white opacity-[0.2] animate-wave-sway"
				style="filter: drop-shadow(0px 0px 6px #fff)"
			></div>
			<div
				class="absolute w-[5px] h-[5px] bottom-[20%] left-[8%] dot rounded-full bg-white opacity-[0.2] animate-pulse-custom"
				style="filter: drop-shadow(0px 0px 6px #fff)"
			></div>
			<div
				class="absolute w-[5px] h-[5px] top-[5%] right-[5%] dot rounded-full bg-white opacity-[0.2] animate-wave-sway"
				style="filter: drop-shadow(0px 0px 6px #fff)"
			></div>
			<div
				class="absolute w-[5px] h-[5px] top-[20%] right-[25%] dot rounded-full bg-white opacity-[0.2] animate-float"
				style="filter: drop-shadow(0px 0px 6px #fff)"
			></div>
			<div
				class="absolute w-[5px] h-[5px] bottom-[25%] right-[8%] dot rounded-full bg-white opacity-[0.2] animate-pulse-custom"
				style="filter: drop-shadow(0px 0px 6px #fff)"
			></div>
		</div>
	</div>
</template>

<style>
@keyframes lineInVertTop {
	0% {
		transform: scaleY(0);
		opacity: 0;
		transform-origin: top;
	}
	50% {
		transform: scaleY(1);
		opacity: 1;
	}
	100% {
		transform: scaleY(0);
		opacity: 0;
		transform-origin: bottom;
	}
}

@keyframes lineInVertBottom {
	0% {
		transform: scaleY(0);
		opacity: 0;
		transform-origin: bottom;
	}
	50% {
		transform: scaleY(1);
		opacity: 1;
	}
	100% {
		transform: scaleY(0);
		opacity: 0;
		transform-origin: top;
	}
}

@keyframes lineInHorizLeft {
	0% {
		transform: scaleX(0);
		opacity: 0;
		transform-origin: left;
	}
	50% {
		transform: scaleX(1);
		opacity: 1;
	}
	100% {
		transform: scaleX(0);
		opacity: 0;
		transform-origin: right;
	}
}

@keyframes lineInHorizRight {
	0% {
		transform: scaleX(0);
		opacity: 0;
		transform-origin: right;
	}
	50% {
		transform: scaleX(1);
		opacity: 1;
	}
	100% {
		transform: scaleX(0);
		opacity: 0;
		transform-origin: left;
	}
}

/* Анімації */
.animate-line-vert-top {
	animation: lineInVertTop 6s cubic-bezier(0.7, 0, 0.3, 1) infinite;
}
.animate-line-vert-bottom {
	animation: lineInVertBottom 6s cubic-bezier(0.7, 0, 0.3, 1) infinite;
}
.animate-line-horiz-left {
	animation: lineInHorizLeft 6s cubic-bezier(0.7, 0, 0.3, 1) infinite;
}
.animate-line-horiz-right {
	animation: lineInHorizRight 6s cubic-bezier(0.7, 0, 0.3, 1) infinite;
}
</style>
