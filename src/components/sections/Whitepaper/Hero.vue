<script setup>
import Header from "@/components/layouts/Header.vue";
import LogoTokenomics from "@/assets/img/logoTokenomics.png";
</script>

<template>
  <div
    class="2xl:h-[80vh] bg-hero-pattern max-2xl:h-screen max-2xl:min-h-[620px] w-full bg-no-repeat bg-cover relative overflow-hidden max-lg:bg-[right_-150px_top_0] max-md:bg-cover max-sm:[height:calc(100vh+64px)] max-sm:bg-hero-pattern-mobil max-sm:bg-bottom max-sm:bg-ggg max-xs:bg-cover"
  >
    <Header />

    <div
      class="flex flex-col h-[calc(100%-120px)] lg:justify-between gap-2 justify-center items-center pt-10"
    >
      <div
        class="text-white font-ibm-mono text-[64px] tracking-widest leading-[64px] font-normal max-2xl:text-[60px] max-lg:text-[50px] max-sm:text-[44px] max-sm:leading-[100%]"
      >
        Whitepaper
      </div>
      <div class="w-[50px] lg:w-[100px] h-auto">
        <img :src="LogoTokenomics" alt="logo" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
