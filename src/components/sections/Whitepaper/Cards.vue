<script setup>
import Bg from "@/assets/img/WhitepaperImgs/Bg11.png";

const Cards = [
  {
    background: "#140B01",
    position: "top-20 left-[20%] rotate-[-15deg] max-md:left-0",
    title: "Fixed Supply with Conditional Expansion",
    subtitle:
      "SRCOIN operates with a fixed supply released through predefined phases and milestones. This Strategnomics relies on time-based evaluation checkpoints, predefined milestone conditions and binary outcomes, release or permanent burn",
  },
  {
    position: "top-20 right-[25%] rotate-[15deg] max-md:right-0",
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), linear-gradient(0deg, rgba(224, 144, 38, 0.32), rgba(224, 144, 38, 0.32))",
    title: "Governance-Aligned Supply Oversight",
    subtitle:
      "Strategnomics is closely aligned with SRCOIN’s governance framework. While core supply mechanics are non-discretionary and protocol-defined, governance plays an oversight role by verifying milestone outcomes and ensuring transparency around releases and burns. This separation preserves predictability while maintaining accountability.",
  },
  {
    position:
      "bottom-[30%] left-[20%] rotate-[-20deg] max-md:left-0 max-md:rotate-[-14deg]",

    background: "#FFFFFF0D",
    title: "Long-Term and Generational Alignment",
    subtitle:
      "Strategnomics is designed with a multi-decade horizon. The allocation structures, evaluation schedules, and governance oversight are intended to persist beyond individual contributors, leadership changes, or market cycles.",
  },
  {
    position:
      "bottom-20 left-[20%] rotate-[-10deg] max-md:left-0 max-md:bottom-10",

    background: "#140B01",
    title: "Integration with Satoshi Vault",
    subtitle:
      "Strategnomics operates in coordination with Satoshi Vault framework. The conditional supply releases governed under Strategnomics may be directed toward reserve-related objectives. This integration ensures that supply management, reserve discipline, and governance accountability remain aligned.",
  },
  {
    position: "bottom-24 right-[20%] rotate-[15deg] max-md:right-0",

    background: "#FFFFFF",
    white: true,
    title: "Burns as a Discipline Mechanism",
    subtitle:
      "Burns within the SRCOIN ecosystem are a structural enforcement tool, not a symbolic gesture. When predefined conditions are not met, allocated supply is permanently removed from circulation, verifiably burned on-chain. This mechanism prevents unrealized growth assumptions from resulting in unnecessary dilution and reinforces long-term scarcity.",
  },
];
</script>

<template>
  <div
    class="flex flex-col max-md:overflow-x-hidden relative gap-5 p-20 max-xl:p-16 max-lg:px-10 max-md:px-5 max-md:py-8 bg-cover lg:bg-contain bg-no-repeat bg-center h-screen max-md:h-[120vh]"
    :style="{ backgroundImage: `url(${Bg})` }"
  >
    <div
      v-for="(card, i) in Cards"
      :key="i"
      :class="[
        'border border-[#FFFFFF42] max-w-[250px] max-md:max-w-[200px] flex flex-col  rounded-xl overflow-hidden p-3 gap-2 absolute max-md:p-2',
        card.position,
      ]"
      :style="{ background: card.background }"
    >
      <div
        class="font-ibm-sans font-medium text-base max-md:text-xs"
        :class="card.white ? 'text-black' : 'text-white'"
      >
        {{ card.title }}
      </div>
      <div
        class="font-ibm-sans text-[10px]"
        :class="card.white ? 'text-black' : 'text-white'"
      >
        {{ card.subtitle }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
