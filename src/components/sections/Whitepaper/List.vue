<script setup>
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
  subtitle: {
    type: String,
  },
  cards: {
    type: Array,
    required: true,
  },
  right: {
    type: Boolean,
    default: false,
  },
});

const isMobile = window.innerWidth < 768;
</script>

<template>
  <div
    class="bg-cover bg-no-repeat"
    :style="{
      backgroundImage: `url(${isMobile ? props.bg : props.bgDesktop})`,
    }"
  >
    <div
      class="max-w-[1200px] lg:gap-10 mx-auto flex flex-col p-20 max-xl:p-16 max-lg:px-10 max-md:px-5 max-md:py-8 bg-cover bg-no-repeat"
    >
      <div class="flex gap-4 lg:items-center lg:justify-center lg:flex-col lg:text-center">
        <div
          v-if="props.title"
          class="text-white max-md:max-w-[200px] uppercase text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[30px] max-xs:text-[23px]"
        >
          {{ props.title }}
        </div>
        <div
          v-if="props.subtitle"
          class="text-[#FFFFFFCC] font-ibm-sans text-base max-md:text-sm leading-[150%]"
        >
          {{ props.subtitle }}
        </div>
      </div>
      <div
        class="w-full flex"
        :class="props.right ? 'items-end justify-end' : ''"
      >
        <div class="flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:w-full">
          <div
            v-for="(card, i) in props.cards"
            :key="i"
            class="flex border-b border-[#433C34] pb-2 max-w-[330px] lg:max-w-none"
          >
            <div
              class="font-ibm-sans font-medium text-base py-2 lg:text-2xl text-[#FFEA70] pr-5"
            >
              {{ card.num }}
            </div>
            <div
              class="flex flex-col gap-3 pl-5 border-l border-[#433C34] py-2"
            >
              <div
                class="font-ibm-sans lg:text-2xl text-white uppercase font-medium text-base"
              >
                {{ card.title }}
              </div>
              <div
                v-if="card.subtitles"
                class="font-ibm-sans lg:text-lg font-normal text-sm text-[#FFFFFFCC]"
              >
                <ul class="list-disc pl-5 space-y-1">
                  <li v-for="(item, index) in card.subtitles" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div
                v-if="card.subtitle"
                class="font-ibm-sans max-w-[400px] font-normal text-sm text-[#FFFFFFCC]"
              >
                {{ card.subtitle }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
