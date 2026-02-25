<script setup>
import Section13Icon1 from "@/assets/img/WhitepaperImgs/Section13Icon1.png";
import Section13Icon2 from "@/assets/img/WhitepaperImgs/Section13Icon2.png";
import Section13Icon3 from "@/assets/img/WhitepaperImgs/Section13Icon3.png";
import Section13Icon4 from "@/assets/img/WhitepaperImgs/Section13Icon4.png";
import Section13Icon5 from "@/assets/img/WhitepaperImgs/Section13Icon5.png";
import Section13Icon6 from "@/assets/img/WhitepaperImgs/Section13Icon6.png";

import Section13Img1 from "@/assets/img/WhitepaperImgs/Section13Img1.png";
import Section13Img2 from "@/assets/img/WhitepaperImgs/Section13Img2.png";
import Section13Img3 from "@/assets/img/WhitepaperImgs/Section13Img3.png";
import Section13Img4 from "@/assets/img/WhitepaperImgs/Section13Img4.png";
import Section13Img5 from "@/assets/img/WhitepaperImgs/Section13Img5.png";
import Section13Img6 from "@/assets/img/WhitepaperImgs/Section13Img6.png";

const cards = [
  {
    icon: Section13Icon1,
    title: "Satoshi Vault",
    lines: [
      "7,000,000 SRCOIN per year",
      "Duration: 82 years",
      "Purpose: Long-term reserve governance and ecosystem discipline.",
    ],
    image: Section13Img1,
    layoutClasses: "col-start-1 col-end-2 row-start-1 row-end-3",
    variant: "dark",
  },
  {
    icon: Section13Icon2,
    title: "Founders",
    lines: [
      "1,000,000 SRCOIN per year",
      "Duration: 82 years",
      "Purpose: Long-term alignment and stewardship.",
    ],
    image: Section13Img2,
    layoutClasses: "col-start-2 col-end-3 row-start-1 row-end-2",
    variant: "whiteTint",
  },
  {
    icon: Section13Icon3,
    title: "Team",
    lines: [
      "1,000,000 SRCOIN per year",
      "Duration: 42 years",
      "Purpose: Sustained development and operational continuity.",
    ],
    image: Section13Img3,
    layoutClasses: "col-start-2 col-end-3 row-start-2 row-end-3",
    variant: "orangeTint",
  },
  {
    icon: Section13Icon4,
    title: "Marketing",
    lines: [
      "4,000,000 SRCOIN per year",
      "Duration: 12 years",
      "Purpose: Adoption, awareness, reward NFT holders, and partnerships.",
    ],
    image: Section13Img4,
    layoutClasses: "col-start-1 col-end-2 row-start-3 row-end-4",
    variant: "white",
  },
  {
    icon: Section13Icon5,
    title: "Community Rewards",
    lines: [
      "4,000,000 SRCOIN per year",
      "Duration: 12 years",
      "Purpose: Reward active participation, contribution, and long-term engagement.",
    ],
    image: Section13Img5,
    layoutClasses: "col-start-1 col-end-2 row-start-4 row-end-5",
    variant: "orangeTint",
  },
  {
    icon: Section13Icon6,
    title: "Ecosystem Growth",
    lines: [
      "4,000,000 SRCOIN per year",
      "Duration: 12 years",
      "Purpose: Strategic initiatives, real-world relevance and long-term utility.",
    ],
    image: Section13Img6,
    layoutClasses: "col-start-2 col-end-3 row-start-3 row-end-5",
    variant: "dark",
  },
];
</script>

<template>
  <div
    class="flex flex-col gap-5 p-20 max-xl:p-16 max-lg:px-10 max-md:px-5 max-md:py-8 bg-cover bg-no-repeat"
  >
    <div class="flex justify-center gap-4">
      <div
        class="text-white text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[30px] max-xs:text-[23px]"
      >
        Community Nominee
      </div>
    </div>

    <div
      class="mt-10 max-lg:mt-8 max-md:mt-6 grid grid-cols-2 grid-rows-4 gap-6 max-md:gap-2"
    >
      <div
        v-for="card in cards"
        :key="card.title"
        :class="[
          'relative overflow-hidden rounded-[24px] max-md:rounded-md p-8 max-md:p-3 max-lg:p-4 border border-white/10 text-[14px] leading-relaxed flex flex-col justify-between',
          card.layoutClasses,
          card.variant === 'dark' &&
            'bg-[radial-gradient(26.47%_45.93%_at_82.59%_87.72%,#F0AB34_0%,rgba(25,15,4,0)_100%)]',
          card.variant === 'white' && 'bg-white text-[#1B130B]',
          card.variant === 'orangeTint' && 'bg-[#E090262B] text-[#FDF5E6]',
          card.variant === 'whiteTint' && 'bg-[#FFFFFF1A]',
        ]"
      >
        <div class="z-[1] flex flex-col gap-4 max-md:gap-2">
          <div class="flex items-center gap-2.5">
            <img
              v-if="card.icon"
              :src="card.icon"
              :alt="card.title"
              class="w-7 h-7 object-contain max-md:w-4 max-md:h-4"
            />
            <h3
              class="font-ibm-mono text-[22px] max-md:text-base font-medium text-white"
              :class="{
                'text-[#1B130B]': card.variant === 'white',
              }"
            >
              {{ card.title }}
            </h3>
          </div>

          <ul
            class="flex text-sm max-md:text-[10px] flex-col gap-1.5 list-disc pl-5 text-[#FFFFFF80]"
            :class="{
              'text-[#140B0180]': card.variant === 'white',
            }"
          >
            <li v-for="line in card.lines" :key="line">
              {{ line }}
            </li>
          </ul>

          <div
            class="absolute right-[-8px] bottom-0 w-[120px] max-md:w-[50px] h-auto"
            :class="card.variant === 'dark' && 'w-[160px] max-md:w-[100px]'"
          >
            <img v-if="card.image" :src="card.image" :alt="card.title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
