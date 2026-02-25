<script setup>
import Bg from "@/assets/img/WhitepaperImgs/Bg5.png";
</script>

<template>
  <div
    class="flex flex-col gap-5 bg-[#110A01] items-center text-center h-screen p-20 lg:bg-contain max-xl:p-16 max-lg:px-10 max-md:px-5 max-md:py-8 bg-cover bg-bottom bg-no-repeat"
    :style="{ backgroundImage: `url(${Bg})` }"
  >
    <div
      class="text-white uppercase text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[30px] max-xs:text-[23px]"
    >
      THE SATOSHI VAULT
    </div>

    <div
      class="flex font-ibm-sans pt-2 max-w-[500px] text-white flex-col gap-2 items-center"
    >
      <div class="font-normal text-sm">
        Satoshi Vault is a core component of the SRCOIN ecosystem, designed to
        establish a long-term Bitcoin reserve that reinforces discipline,
        credibility, and sustainability. The allocations governed by Satoshi
        Vault are intended to acquire and hold Bitcoin as a strategic reserve
        for the SRCOIN ecosystem. This reserve is designed to align SRCOIN with
        Bitcoin’s principles of scarcity, long-term thinking, and monetary
        discipline.
      </div>
      <div class="font-normal text-sm">
        Satoshi Vault does not function as a custodial service for users, nor
        does it guarantee price outcomes. Instead, it provides a structural
        foundation that supports SRCOIN’s long-term vision through transparent,
        rule-based reserve management.
      </div>
    </div>
  </div>
</template>

<style scoped></style>
