<script setup>
import Icon1 from "@/assets/img/WhitepaperImgs/Section9Icon1.png";
import Icon2 from "@/assets/img/WhitepaperImgs/Section9Icon2.png";
import Icon3 from "@/assets/img/WhitepaperImgs/Section9Icon3.png";
import Icon4 from "@/assets/img/WhitepaperImgs/Section9Icon4.png";
import Icon5 from "@/assets/img/WhitepaperImgs/Section9Icon5.png";
import Icon6 from "@/assets/img/WhitepaperImgs/Section9Icon6.png";
import Icon7 from "@/assets/img/WhitepaperImgs/Section9Icon7.png";

const cards = [
  {
    title: "Total NFTs",
    subtitle: "250",
    icon: Icon1,
    titleClass: "text-[#FFFFFF80]",
    subtitleClass: "text-white text-2xl font-semibold",
    gridArea: "1 / 1 / 2 / 2",
    bgStyle:
      "background: radial-gradient(41.36% 41.36% at 18.65% 92.28%, #F0AB34 0%, rgba(25, 15, 4, 0) 100%), #1a0d02;",
    borderClass: "border-white/10",
    iconClass: "absolute bottom-0 right-0 w-[72px] h-[72px] ",
  },
  {
    title: "Transferability:",
    subtitle: "Transferable",
    icon: Icon2,
    titleClass: "text-[#FFFFFF80]",
    subtitleClass: "text-white text-2xl font-semibold",
    gridArea: "1 / 2 / 2 / 3",
    bgStyle:
      "background: linear-gradient(0deg, rgba(255,255,255,0.01), rgba(255,255,255,0.01)), linear-gradient(0deg, rgba(224,144,38,0.32), rgba(224,144,38,0.32)), #1e1204;",
    borderClass: "border-[#E09026]/50",
    iconClass: "absolute bottom-0 right-0 w-[90px] h-auto ",
  },
  {
    title: "Third-party KYC",
    subtitle: "Identity verified without public disclosure",
    icon: Icon3,
    titleClass: "text-[#FFFFFF80]",
    subtitleClass: "text-white text-sm",
    gridArea: "1 / 3 / 3 / 5",
    bgStyle: "background: rgba(255,255,255,0.1);",
    borderClass: "border-white/10",
    iconClass: "absolute bottom-0 left-3 w-[110px] h-auto ",
  },
  {
    title: "Lock Period:",
    subtitle: "3 years",
    subtitleExtra: "(rollover)",
    icon: Icon4,
    titleClass: "text-black/60",
    subtitleClass: "text-black text-2xl font-semibold",
    subtitleExtraClass: "text-black/60 text-xs font-ibm-mono -mt-1",
    gridArea: "2 / 1 / 3 / 2",
    bgStyle: "background: #ffffff;",
    borderClass: "border-white/10",
    iconClass: "absolute bottom-0 right-0 w-[60px] h-auto ",
  },
  {
    title: "SRCOIN Requirement:",
    subtitle: "150,000 SRCOIN",
    icon: Icon5,
    titleClass: "text-[#FFFFFF80]",
    subtitleClass: "text-white text-xl font-semibold",
    gridArea: "2 / 2 / 3 / 3",
    bgStyle: "background: rgba(0,0,0,0.87);",
    borderClass: "border-white/10",
    iconClass: "absolute bottom-0 right-0 w-[70px] h-auto ",
  },
  {
    title: "Role & Participation",
    subtitle: "Eligible for nominated operational roles.",
    icon: Icon6,
    titleClass: "text-[#FFFFFF80]",
    subtitleClass: "text-white text-sm max-w-[60%]",
    gridArea: "3 / 1 / 5 / 3",
    bgStyle:
      "background: radial-gradient(41.36% 41.36% at 18.65% 92.28%, rgba(240,171,52,0.3) 0%, rgba(25,15,4,0) 100%), #190f04;",
    borderClass: "border-white/10",
    iconClass: "absolute bottom-0 right-4 w-[180px] h-auto ",
  },
  {
    title: "Governance Rights & Role",
    subtitle:
      "Participation in standard governance votes, voting power active only while SRCOIN remains locked",
    icon: Icon7,
    titleClass: "text-[#FFFFFF80]",
    subtitleClass: "text-white text-sm max-w-[65%]",
    gridArea: "3 / 3 / 5 / 5",
    bgStyle:
      "background: linear-gradient(0deg, rgba(255,255,255,0.01), rgba(255,255,255,0.01)), radial-gradient(41.48% 39.59% at 92.65% 94.05%, rgba(240,171,52,0.3) 0%, rgba(25,15,4,0) 100%), #190f04;",
    borderClass: "border-white/10",
    iconClass: "absolute bottom-0 left-4 w-[150px] h-auto ",
  },
];
</script>

<template>
  <div
    class="flex flex-col gap-5 p-20 max-xl:p-16 max-lg:px-10 max-md:px-5 max-md:py-8 bg-cover bg-no-repeat"
  >
    <div
      class="text-white uppercase text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[30px] max-xs:text-[23px]"
    >
      Community Nominee
    </div>

    <div
      class="grid gap-2 w-full"
      style="
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, minmax(130px, auto));
      "
    >
      <div
        v-for="(card, i) in cards"
        :key="i"
        :class="[
          'relative overflow-hidden rounded-md border p-4 max-md:p-2 flex flex-col gap-1.5',
          card.borderClass,
        ]"
        :style="`grid-area: ${card.gridArea}; ${card.bgStyle}`"
      >
        <span
          v-if="card.title"
          :class="['!text-xs lg:!text-xl font-ibm-mono', card.titleClass]"
          >{{ card.title }}</span
        >
        <span
          v-if="card.subtitle"
          :class="[
            'font-ibm-mono leading-snug lg:!text-lg !text-sm max-md:max-w-none',
            card.subtitleClass,
          ]"
          >{{ card.subtitle }}</span
        >
        <span v-if="card.subtitleExtra" :class="card.subtitleExtraClass">{{
          card.subtitleExtra
        }}</span>
        <img
          v-if="card.icon"
          :src="card.icon"
          :class="['object-contain', card.iconClass]"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
