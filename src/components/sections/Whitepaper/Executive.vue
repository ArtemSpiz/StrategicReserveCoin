<script setup>
import Jar from "@/assets/img/WhitepaperImgs/JarCoins3.png";
import Coins from "@/assets/img/WhitepaperImgs/Coins3.png";
</script>

<template>
  <div
    class="flex flex-col gap-5 relative p-20 text-center max-xl:p-16 max-lg:px-10 max-md:px-5 max-md:py-8 bg-cover bg-no-repeat justify-center items-center"
  >
    <div
      class="text-white uppercase text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[30px] max-xs:text-[23px]"
    >
      EXECUTIVE SUMMARY
    </div>
    <div
      class="flex font-ibm-sans pt-2 max-w-[500px] text-white flex-col gap-2 items-center"
    >
      <div class="font-medium text-base">Strategic Reserve Coin</div>
      <div class="font-normal text-sm">
        a community-governed memecoin inspired by Bitcoin’s principles of
        discipline. It combines meme culture with structured governance,
        transparent Tokenomics, and a reserve-inspired framework designed to
        endure across generations.
      </div>
      <div class="font-normal text-sm">
        Built by Bitcoiners and guarded by Satoshi Squirrel, SRCOIN embraces the
        cultural power of memes. 
      </div>
    </div>

    <div class="w-[300px] h-auto">
      <img :src="Jar" alt="jar" />
    </div>

    <div class="flex font-ibm-sans text-white z-10 flex-col gap-3 items-center">
      <div class="font-medium text-base">Made by traders for traders</div>
      <div class="font-normal text-sm max-w-[500px]">
        While meme culture provides energy and engagement, sustainability
        depends on discipline, transparency, and community ownership. The
        following 
      </div>
    </div>

    <div
      class="w-[300px] absolute bottom-10 z-0 pointer-events-none right-1/2 translate-x-1/2 h-auto"
    >
      <img :src="Coins" alt="Coins" />
    </div>
  </div>
</template>

<style scoped></style>
