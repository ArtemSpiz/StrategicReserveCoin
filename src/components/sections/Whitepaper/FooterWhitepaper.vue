<script setup>
import Bg from "@/assets/img/WhitepaperImgs/FooterBg.png";
import telegram from "@/assets/img/tg.png";
import inbuco from "@/assets/img/inbuco.png";
import twitter from "@/assets/img/twitter.png";
import Star from "@/assets/img/WhitepaperImgs/StarFooter.png";

const Links = [
  {
    img: telegram,
  },
  {
    img: inbuco,
  },
  {
    img: twitter,
  },
];
</script>

<template>
  <div
    class="flex flex-col h-screen gap-5 p-20 max-xl:p-16 max-lg:px-10 max-md:px-5 max-md:py-8 bg-cover bg-no-repeat justify-between lg:bg-contain bg-center"
    :style="{ backgroundImage: `url(${Bg})` }"
  >
    <div class="flex gap-4">
      <div
        class="text-white max-w-[400px] max-md:max-w-[200px] uppercase text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[20px]"
      >
        Conclusion
      </div>
    </div>

    <div class="flex flex-col gap-10">
      <div class="w-full flex justify-end items-end">
        <div
          class="font-ibm-sans max-w-[300px] text-sm text-[#FFFFFFCC] pt-2 border-t border-white"
        >
          SRCOIN applies Bitcoin-inspired discipline through transparent
          governance and milestone-based supply mechanics. Growth is earned, not
          assumed, and token releases occur only when predefined conditions are
          met.
        </div>
      </div>

      <div class="flex gap-2 items-center">
        <div
          v-for="(card, i) in Links"
          :key="i"
          class="w-11 h-11 min-w-11 justify-center items-center cursor-pointer flex relative"
        >
          <img
            loading="lazy"
            decoding="async"
            :src="Star"
            class="absolute w-full h-full top-1/2 translate-x-1/2 right-1/2 -translate-y-1/2"
          />
          <div class="w-4 h-4 min-w-4 z-10">
            <img loading="lazy" decoding="async" :src="card.img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
