<script setup>
import Cards from "@/assets/img/WhitepaperImgs/Cards7.png";
</script>

<template>
  <div
    class="flex flex-col max-md:overflow-x-hidden max-md:max-w-[100wv] gap-5 p-20 max-xl:p-16 max-lg:px-10 max-md:px-5 max-md:py-8 bg-cover bg-no-repeat items-center"
  >
    <div class="flex gap-5 items-start w-full">
      <div
        class="text-white max-w-[300px] max-md:max-w-[200px] uppercase text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[30px] max-xs:text-[23px]"
      >
        GOVERNANCE MODEL
      </div>
      <div
        class="text-[#FFFFFFCC] font-ibm-sans text-base max-w-[500px] max-md:text-sm leading-[150%]"
      >
        <div class="mb-2"
          >SRCOIN is governed through a community-led framework designed to
          balance participation, accountability, and long-term
          stewardship.</div
        >
        Rather than concentrating control in a single entity or founding group,
        SRCOIN distributes influence across participants who demonstrate
        long-term commitment to the ecosystem.
      </div>
    </div>

    <div class="w-[400px] h-auto">
      <img :src="Cards" />
    </div>
  </div>
</template>

<style scoped></style>
