<script setup>
import gold from "@/assets/img/goldTraders.png";
import goldMobil from "@/assets/img/goldTraders.png";
import { tableContent } from "@/data/TokenomicsData";

import { ref } from "vue";

function generateLines(n = 7) {
  const margin = 20;
  return Array.from({ length: n }, (_, i) => ({
    pos: (i / (n - 1)) * (100 - margin) + margin / 2,
    offset: Math.random() * 60 - 30,
    fromTop: Math.random() > 0.5,
    fromLeft: Math.random() > 0.5,
  }));
}

const vLines = ref(generateLines(7));
const hLines = ref(generateLines(7));
</script>

<template>
  <div
    class="flex overflow-hidden relative flex-col gap-[48px] items-center justify-center max-lg:bg-none max-sm:px-[20px]"
  >
    <div
      class="absolute top-1/2 -translate-y-1/2 w-[400px] h-[400px] z-[-1] left-[-150px] max-xl:left-[-250px] max-md:hidden"
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
      class="absolute right-[-150px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] z-[-1] max-xl:right-[-250px] max-md:hidden"
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
      class="flex flex-col gap-[48px] items-center justify-center max-lg:gap-[40px] max-md:gap-[30px] max-sm:gap-[24px]"
    >
      <div
        class="text-white font-ibm-mono text-[48px] font-normal leading-[110%] max-lg:text-[45px] max-md:text-[40px] max-sm:text-[32px]"
      >
        Token Supply
      </div>
      <div class="flex flex-col justify-center">
        <div
          v-for="(table, index) in tableContent"
          :key="index"
          class="flex items-center"
        >
          <div
            class="text-white font-ibm-sans text-[18px] leading-[120%] font-medium py-[20px] pl-[48px] w-[335px] items-start border border-benefits max-xl:w-[300px] max-md:w-[250px] max-md:text-[16px] max-md:px-5 max-sm:w-[211px] max-sm:py-[19px] max-sm:px-[8px]"
          >
            {{ table.title }}
          </div>
          <div
            class="text-white font-ibm-sans text-[18px] leading-[120%] font-medium py-[20px] pl-[40px] w-[335px] items-start border border-benefits max-xl:w-[200px] max-md:max-w-[250px] max-md:text-[16px] max-md:px-5 max-sm:w-[100px] max-sm:py-[19px] max-sm:px-[8px]"
          >
            {{ table.price }}
          </div>
          <div
            class="text-white font-ibm-sans text-[18px] leading-[120%] font-medium py-[20px] pl-[40px] w-[335px] items-start border border-benefits max-xl:w-[200px] max-md:max-w-[250px] max-md:text-[16px] max-md:px-5 max-sm:w-[100px] max-sm:py-[19px] max-sm:px-[8px]"
          >
            {{ table.percents }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-[350px] h-[83px] max-md:hidden">
      <img loading="lazy" decoding="async" :src="gold" alt="gold" />
    </div>
    <div class="w-[220px] h-[70px] hidden max-md:flex">
      <img loading="lazy" decoding="async" :src="goldMobil" alt="gold" />
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
