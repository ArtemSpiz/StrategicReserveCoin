<script setup>
import Bg from "@/assets/img/WhitepaperImgs/Bg6.png";
import BgDesktop from "@/assets/img/WhitepaperImgs/DesktopBg6.png";

const isMobile = window.innerWidth < 768;

const Cards = [
  {
    title: "Governance and Oversight",
    text1:
      "Satoshi Vault operates under community governance where the decisions related to reserve management, including release conditions, BTC acquisition processes, and transparency standards are subject to governance oversight.",
    text2:
      "While the intent to acquire BTC is defined at the protocol level, governance ensures accountability in how reserve related actions are executed, without compromising Satoshi Vault’s long-term discipline.",
  },
  {
    title: "Governance and Oversight",
    text1:
      "Satoshi Vault operates under community governance where the decisions related to reserve management, including release conditions, BTC acquisition processes, and transparency standards are subject to governance oversight.",
    text2:
      "While the intent to acquire BTC is defined at the protocol level, governance ensures accountability in how reserve related actions are executed, without compromising Satoshi Vault’s long-term discipline.",
  },
];
</script>

<template>
  <div
    class="flex flex-col gap-5 bg-[#110A01] items-center h-screen p-20  max-xl:p-16 max-lg:px-10 max-md:px-5 max-md:py-8 bg-cover bg-bottom bg-no-repeat"
    :style="{
      backgroundImage: `url(${isMobile ? Bg : BgDesktop})`,
    }"
  >
    <div class="flex flex-col items-center max-w-[500px]">
      <div
        v-for="(card, i) in Cards"
        :key="i"
        class="p-4 border border-transparent [border-image-source:linear-gradient(58.99deg,rgba(255,255,255,0.2)_55.8%,#E09026_99.88%)] [border-image-slice:1] shadow-md"
      >
        <div class="font-ibm-sans pb-3 text-white font-medium text-base">
          {{ card.title }}
        </div>
        <div class="font-ibm-sans text-sm text-[#FFFFFFCC] pb-1">
          {{ card.text1 }}
        </div>
        <div class="font-ibm-sans text-sm text-[#FFFFFFCC] pb-1">
          {{ card.text2 }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
