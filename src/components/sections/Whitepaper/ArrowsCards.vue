<script setup>
import Arrow from "@/assets/img/WhitepaperImgs/Arrow.png";
const props = defineProps({
  bg: {
    type: String,
  },
  bgDesktop: {
    type: String,
  },
  title: {
    type: String,
  },
  cards: {
    type: Array,
    required: true,
  },
});

const isMobile = window.innerWidth < 768;
</script>

<template>
  <div
    class="flex flex-col gap-5 p-20 max-xl:p-16 max-lg:px-10 max-md:px-5 max-md:py-8 bg-cover bg-no-repeat bg-center max-md:bg-ggg"
    :style="{
      backgroundImage: `url(${isMobile ? props.bg : props.bgDesktop})`,
    }"
  >
    <div
      v-if="props.title"
      class="text-white text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[30px] max-xs:text-[23px]"
    >
      {{ props.title }}
    </div>
    <div class="flex flex-col gap-16 w-full">
      <div
        v-for="(card, i) in props.cards"
        :key="i"
        class="flex"
        :class="card.right ? 'justify-end w-full' : 'lg:ml-48'"
      >
        <div class="w-[38px] lg:w-[60px] min-w-[40px] pt-2 h-auto pr-5">
          <img :src="Arrow" />
        </div>
        <div class="flex flex-col gap-1 max-w-[330px] max-md:max-w-[240px]">
          <div
            v-if="card.title"
            class="font-ibm-sans lg:text-xl text-white max-w-[200px] uppercase font-medium text-base"
          >
            {{ card.title }}
          </div>
          <div
            v-if="card.subtitles"
            class="font-ibm-sans lg:text-lg font-normal text-xs text-[#FFFFFF80]"
          >
            <ul class="list-disc pl-5 space-y-1">
              <li v-for="(item, index) in card.subtitles" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
          <div
            v-if="card.subtitle"
            class="font-ibm-sans lg:text-lg font-normal text-xs text-[#FFFFFF80]"
          >
            {{ card.subtitle }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
