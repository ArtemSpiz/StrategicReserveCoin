<script setup>
import Bg from "@/assets/img/WhitepaperImgs/Bg8.png";
import BgDesktop from "@/assets/img/WhitepaperImgs/DesktopBg8.png";

const isMobile = window.innerWidth < 768;

const Cards = [
  {
    title: "Ticker",
    subtitle: "$SRCOIN",
  },
  {
    title: "Network",
    subtitle: "Solana (SPL Token)",
  },
  {
    title: "Total Supply:",
    subtitle: "1M",
  },
  {
    title: "Contract Address:",
    subtitle: "To be announced at launch",
  },
];
</script>

<template>
  <div
    class="flex flex-col gap-5 items-center h-screen p-20 lg:bg-contain max-xl:p-16 max-lg:px-10 max-md:px-5 max-md:py-8 bg-cover bg-bottom bg-no-repeat"
    :style="{
      backgroundImage: `url(${isMobile ? Bg : BgDesktop})`,
    }"
  >
    <div class="flex flex-col lg:text-center lg:items-center gap-4">
      <div
        class="text-white uppercase text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[30px] max-xs:text-[23px]"
      >
        NFT TIERED GOVERNANCE SYSTEM
      </div>
      <div
        class="text-[#FFFFFFCC] lg:text-lg font-ibm-sans text-base max-md:text-sm leading-[150%]"
      >
        SRCOIN introduces a three-tier NFT governance system balancing long-term
        stewardship, accountable execution, and community participation. Each
        wallet can hold only one NFT and belong to one tier, ensuring a single
        governance identity and preventing power concentration. Governance
        rights and voting power require locking the corresponding SRCOIN amount
        for each tier.
      </div>
    </div>

    <div class="flex flex-col gap-4 w-full px-3">
      <div
        class="text-[#FFFFFF] lg:text-xl font-ibm-sans py-2 font-medium text-base max-md:text-sm leading-[150%]"
      >
        Satoshi Guard
      </div>
      <div
        class="rounded flex overflow-hidden border border-[#DDDDDD66] h-[130px] lg:h-auto lg:max-w-[500px] lg:grid lg:grid-cols-2"
      >
        <div
          v-for="(card, i) in Cards"
          :key="i"
          class="flex flex-1 lg:gap-3 flex-col border border-[#DDDDDD66] p-3 justify-between"
        >
          <div class="text-[#FFFFFF80] lg:text-2xl font-ibm-sans font-medium text-sm">
            {{ card.title }}
          </div>
          <div
            class="text-[#FFFFFF] max-md:text-sm lg:text-xl font-ibm-mono font-medium text-lg"
          >
            {{ card.subtitle }}
          </div>
        </div>
      </div>
      <div
        class="text-[#FFFFFFCC] max-w-[750px] font-ibm-sans text-base max-md:text-sm leading-[150%]"
      >
        SRCOIN is governed through community ownership, where long-term
        contributors guide ecosystem decisions while meme culture keeps it open,
        engaging, and alive.
      </div>
    </div>
  </div>
</template>

<style scoped></style>
