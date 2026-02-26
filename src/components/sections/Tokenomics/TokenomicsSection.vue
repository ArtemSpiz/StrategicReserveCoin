<script setup>
import logoTokenomics from "@/assets/img/logoTokenomics.png";
import tokenomicsTop from "@/assets/img/tokenomicsTop.png";
import tokenomicsBottom from "@/assets/img/tokenomicsBottom.png";
import bgMobTokenomics from "@/assets/img/bgMobTokenomics.png";
import tokenomicsTopMobil from "@/assets/img/tokenomicsTopMobil.png";
import tokenomicsBottomMobil from "@/assets/img/tokenomicsBottomMobil.png";
import tokenomicsBottomLeftMobil from "@/assets/img/tokenomicsBottomLeftMobil.png";

import { ref, onMounted, computed } from "vue";
import Button from "@/components/ui/Button.vue";

const hoveredSegment = ref(null);

const onHover = (index) => {
  hoveredSegment.value = index;
};
const onLeave = () => {
  hoveredSegment.value = null;
};

const segmentColors = ["#F64340", "#F77C32", "#E7E7E7", "#F7C530"];

const count = ref(0);
const duration = 2500;
const target = 1_000_000_000;
const formattedCount = computed(() => count.value.toLocaleString("en-US"));

const animateCounter = () => {
  let start = null;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    count.value = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const counterBlock = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounter();
        observer.disconnect();
      }
    },
    { threshold: 0.5 },
  );

  if (counterBlock.value) {
    observer.observe(counterBlock.value);
  }
});
</script>

<template>
  <div
    class="flex flex-col gap-[148px] justify-center items-center bg-[url('@/assets/img/TokenomicsBgTop.png')] bg-ggg bg-no-repeat f-full h-full max-lg:bg-none relative max-md:gap-[180px]"
  >
    <div
      class="gap-[40px] flex flex-col justify-center items-center max-sm:gap-[155px]"
    >
      <div class="flex flex-col justify-center items-center gap-[16px]">
        <div
          class="text-[48px] font-ibm-mono font-normal leading-[110%] text-white max-lg:text-[45px] max-md:text-[40px] max-sm:text-[32px]"
        >
          Tokenomics
        </div>
        <div
          class="text-[14px] font-ibm-sans font-normal leading-[150%] text-white hidden"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      <div class="absolute top-[180px] hidden max-sm:flex">
        <img
          loading="lazy"
          decoding="async"
          :src="bgMobTokenomics"
          alt="gold"
        />
      </div>

      <div
        class="relative w-[300px] h-[300px] mx-auto max-sm:w-[277px] max-sm:h-[277px]"
      >
        <svg viewBox="0 0 38 38" class="w-full h-full rotate-[-90deg]">
          <circle
            @mouseover="onHover(0)"
            @mouseleave="onLeave"
            class="transition-all hover:stroke-[5]"
            cx="19"
            cy="19"
            r="15"
            fill="none"
            stroke="#F64340"
            stroke-width="4"
            stroke-dasharray="28 75"
            stroke-dashoffset="0"
          />
          <circle
            @mouseover="onHover(1)"
            @mouseleave="onLeave"
            class="transition-all hover:stroke-[5]"
            cx="19"
            cy="19"
            r="15"
            fill="none"
            stroke="#F77C32"
            stroke-width="4"
            stroke-dasharray="36 70"
            stroke-dashoffset="35"
          />
          <circle
            @mouseover="onHover(2)"
            @mouseleave="onLeave"
            class="transition-all hover:stroke-[5]"
            cx="19"
            cy="19"
            r="15"
            fill="none"
            stroke="#E7E7E7"
            stroke-width="4"
            stroke-dasharray="19 87"
            stroke-dashoffset="55"
          />
          <circle
            @mouseover="onHover(3)"
            @mouseleave="onLeave"
            class="transition-all hover:stroke-[5]"
            cx="19"
            cy="19"
            r="15"
            fill="none"
            stroke="#F7C530"
            stroke-width="4"
            stroke-dasharray="23 55"
            stroke-dashoffset="50"
          />

          <circle
            cx="19"
            cy="19"
            r="15"
            fill="none"
            stroke="#140B01"
            stroke-width="6"
            stroke-dasharray="1 99"
            stroke-dashoffset="30"
          />
          <circle
            cx="19"
            cy="19"
            r="15"
            fill="none"
            stroke="#140B01"
            stroke-width="6"
            stroke-dasharray="1 99"
            stroke-dashoffset="50"
          />
          <circle
            cx="19"
            cy="19"
            r="15"
            fill="none"
            stroke="#140B01"
            stroke-width="6"
            stroke-dasharray="1 99"
            stroke-dashoffset="72"
          />
          <circle
            cx="19"
            cy="19"
            r="15"
            fill="none"
            stroke="#140B01"
            stroke-width="6"
            stroke-dasharray="1 99"
            stroke-dashoffset="0"
          />

          <circle
            class="z-10"
            cx="19"
            cy="19"
            r="17"
            stroke="#010416"
            stroke-width="1.1"
            fill="none"
          />
        </svg>

        <div class="absolute inset-0 flex items-center justify-center -z-10">
          <div class="w-[122px] h-[160px] max-lg:w-[100px] max-lg:h-[135px]">
            <img
              loading="lazy"
              decoding="async"
              :src="logoTokenomics"
              alt="logoTokenomics"
            />
          </div>
        </div>

        <div
          class="flex flex-col gap-2 items-start absolute top-[-20px] right-[-40%] max-sm:top-[-120px] max-sm:right-[-8%]"
        >
          <div
            class="text-[32px] font-ibm-sans text-white leading-[150%] font-normal"
            :style="hoveredSegment === 0 ? `color: ${segmentColors[0]}` : ''"
          >
            12,4%
          </div>
          <div
            class="text-[18px] font-ibm-sans text-white leading-[120%] font-medium"
          >
            Founders & Team
          </div>
        </div>

        <div
          class="absolute top-[60px] right-[-20px] rotate-[180deg] max-sm:top-[-40px] max-sm:right-[50px] max-sm:rotate-0"
        >
          <img
            loading="lazy"
            decoding="async"
            :src="tokenomicsBottom"
            alt="vector"
            class="w-[70px] h-[35px] max-sm:hidden"
          />

          <img
            loading="lazy"
            decoding="async"
            :src="tokenomicsBottomMobil"
            alt="vector"
            class="hidden max-sm:flex"
          />
        </div>

        <div
          class="flex flex-col gap-2 items-end absolute top-[-20px] left-[-45%] max-sm:top-[-120px] max-sm:left-[-10%]"
        >
          <div
            class="text-[32px] font-ibm-sans text-white leading-[150%] font-normal"
            :style="hoveredSegment === 1 ? `color: ${segmentColors[1]}` : ''"
          >
            19,8%
          </div>
          <div
            class="text-[18px] font-ibm-sans max-w-[150px] text-white leading-[120%] font-medium"
          >
            Marketing and Initial Supply
          </div>
        </div>

        <div
          class="absolute top-[60px] left-[-20px] max-sm:top-[-40px] max-sm:left-[50px]"
        >
          <img
            loading="lazy"
            decoding="async"
            :src="tokenomicsTop"
            alt="vector"
            class="w-[70px] h-[35px] max-sm:hidden"
          />

          <img
            loading="lazy"
            decoding="async"
            :src="tokenomicsTopMobil"
            alt="vector"
            class="hidden max-sm:flex"
          />
        </div>

        <div
          class="flex flex-col gap-2 items-end absolute bottom-[-20px] left-[-45%] max-sm:bottom-[-120px] max-sm:left-[-5%]"
        >
          <div
            class="text-[32px] font-ibm-sans text-white leading-[150%] font-normal"
            :style="hoveredSegment === 2 ? `color: ${segmentColors[2]}` : ''"
          >
            9,6%
          </div>
          <div
            class="text-[18px] font-ibm-sans max-w-[150px] text-white leading-[120%] font-medium"
          >
            Community & Ecosystem
          </div>
        </div>

        <div
          class="absolute bottom-[50px] left-[-35px] max-sm:bottom-[-40px] max-sm:left-[60px]"
        >
          <img
            loading="lazy"
            decoding="async"
            :src="tokenomicsBottom"
            alt="vector"
            class="w-[70px] h-[35px] max-sm:hidden"
          />

          <img
            loading="lazy"
            decoding="async"
            :src="tokenomicsBottomLeftMobil"
            alt="vector"
            class="hidden max-sm:flex"
          />
        </div>

        <div
          class="flex flex-col gap-2 items-start absolute bottom-[-20px] right-[-45%] max-sm:bottom-[-120px] max-sm:right-[-5%]"
        >
          <div
            class="text-[32px] font-ibm-sans text-white leading-[150%] font-normal"
            :style="hoveredSegment === 3 ? `color: ${segmentColors[3]}` : ''"
          >
            58,2%
          </div>
          <div
            class="text-[18px] font-ibm-sans text-white leading-[120%] font-medium"
          >
            Satoshi Vault
          </div>
        </div>

        <div
          class="absolute bottom-[50px] right-[-30px] rotate-[180deg] max-sm:bottom-[-40px] max-sm:right-[60px]"
        >
          <img
            loading="lazy"
            decoding="async"
            :src="tokenomicsTop"
            alt="vector"
            class="w-[70px] h-[35px] max-sm:hidden"
          />

          <img
            loading="lazy"
            decoding="async"
            :src="tokenomicsTopMobil"
            alt="vector"
            class="hidden max-sm:flex"
          />
        </div>
      </div>
    </div>

    <div class="pb-[100px] max-md:pb-[80px]">
      <div
        ref="counterBlock"
        class="w-[545px] h-[270px] flex flex-col justify-center items-center gap-[32px] rounded-[4px] max-md:w-[350px] max-md:h-[173px] max-md:gap-[20px]"
        style="
          border: 0.5px solid #fff;
          background:
            linear-gradient(0deg, #140b01 0%, #140b01 100%),
            radial-gradient(
              109.71% 96.25% at 100.13% 115.87%,
              #fff 0%,
              rgba(1, 13, 8, 0.01) 100%
            );
          box-shadow:
            0px 0px 14px 0px rgba(88, 54, 18, 0.3) inset,
            0px 0px 24px 0px rgba(247, 124, 50, 0.13);
        "
      >
        <div class="justify-center items-center flex flex-col gap-[16px]">
          <div
            class="text-white font-ibm-sans text-[28px] font-medium leading-[120%] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px]"
          >
            Total initial Supply
          </div>
          <div
            class="text-white font-ibm-mono text-[40px] font-medium leading-[73%] max-lg:text-[35px] max-md:text-[30px] max-sm:text-[25px] max-md:font-normal"
          >
            {{ formattedCount }}
          </div>
        </div>

        <Button
          customClass="leading-[150%] px-12 h-14 text-[16px] w-max max-md:text-[10px] max-md:px-0 max-md:h-[30px] max-md:w-[90px] items-center flex justify-center"
        />
      </div>
    </div>

    <div class="max-md:hidden">
      <div
        class="absolute w-[5px] h-[5px] top-[8%] left-[15%] dot rounded-full bg-white opacity-[0.2] animate-float"
        style="filter: drop-shadow(0px 0px 6px #fff)"
      ></div>
      <div
        class="absolute w-[5px] h-[5px] top-[30%] left-[10%] dot rounded-full bg-white opacity-[0.2] animate-wave-sway"
        style="filter: drop-shadow(0px 0px 6px #fff)"
      ></div>
      <div
        class="absolute w-[5px] h-[5px] top-[10%] right-[18%] dot rounded-full bg-white opacity-[0.2] animate-float"
        style="filter: drop-shadow(0px 0px 6px #fff)"
      ></div>
    </div>
  </div>
</template>

<style></style>
