<script setup>
import Bg from "@/assets/img/WhitepaperImgs/Bg15.png";
import BgDesktop from "@/assets/img/WhitepaperImgs/DesktopBg15.png";

const isMobile = window.innerWidth < 768;

const Cards = [
  {
    subtitle:
      "SRCOIN’s supply follows a phased, milestone-based framework that ties token issuance to proven ecosystem maturity rather than speculation.",
  },
  {
    subtitle:
      "Supply decisions happen on predefined dates via smart-contract price milestones: met targets release allocations; unmet targets trigger permanent, on-chain-verifiable burns.",
  },
  {
    subtitle:
      "Milestones and evaluation dates are fixed and non-discretionary. Governance verifies outcomes for transparency but cannot override the milestone logic.",
  },
];
</script>

<template>
  <div
    class="flex flex-col gap-5 lg:gap-14 p-20 max-xl:p-16 max-lg:px-10 max-md:px-5 max-md:py-8 bg-cover bg-bottom lg:bg-contain h-screen bg-no-repeat"
    :style="{
      backgroundImage: `url(${isMobile ? Bg : BgDesktop})`,
    }"
  >
    <div class="flex gap-4">
      <div
        class="text-white max-w-[500px] max-md:max-w-[300px] uppercase text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[20px]"
      >
        Phased Supply and Milestone Logic
      </div>
    </div>

    <div class="flex gap-2 max-md:mx-auto">
      <div
        v-for="(card, i) in Cards"
        :key="i"
        class="flex flex-1 max-w-[300px] gap-2"
      >
        <div class="w-2 h-2 min-w-2 mt-1.5 bg-[#ECA02B] lg:min-w-3 lg:w-3 lg:h-3"></div>
        <div
          class="font-ibm-sans text-sm text-white lg:text-xl max-md:text-[10px]"
        >
          {{ card.subtitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
