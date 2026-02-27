<script setup>
import { ref } from "vue";

import LeftGold from "@/assets/img/LeftGold.png";
import RightGold from "@/assets/img/RightGold.png";
import Plus from "@/assets/svg/Plus.vue";
import Minus from "@/assets/svg/Minus.vue";
import { FAQContent } from "@/data/FAQData";

const opened = ref(Array(FAQContent.length).fill(false));

function toggleFAQ(index) {
  opened.value[index] = !opened.value[index];
}
</script>

<template>
  <div
    class="relative flex items-end justify-between max-md:justify-center max-xl:gap-10 max-xl:px-[40px] max-md:gap-8 max-md:px-[30px] max-sm:px-[20px]"
  >
    <div class="max-lg:hidden">
      <img loading="lazy" decoding="async" :src="LeftGold" alt="LeftGold" />
    </div>

    <div class="flex flex-col gap-12 items-center justify-center max-lg:w-full">
      <div class="flex flex-col text-center gap-4">
        <div
          class="text-white text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col items-center max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[35px] max-xs:text-[32px]"
        >
          FAQ
        </div>
        <div
          class="text-white w-[300px] font-ibm-sans text-[16px] font-medium max-lg:w-[300px] max-md:text-[15px] max-xs:text-[14px] max-xs:w-full"
        >
          Trust Built on Transparency, Community, and Purposeful Parody.
        </div>
      </div>

      <div
        class="flex flex-col gap-6 items-center justify-center max-w-[800px] w-full max-lg:max-w-[600px] max-md:w-full"
      >
        <div
          v-for="(FAQ, index) in FAQContent"
          :key="index"
          class="flex flex-col gap-4 text-left w-full"
        >
          <div
            class="flex justify-between items-start gap-6 cursor-pointer group"
            @click="toggleFAQ(index)"
          >
            <div class="flex flex-col gap-2">
              <div
                class="text-[#EAEAEA] font-ibm-sans text-[18px] leading-[28px] font-medium transition-colors duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(247,140,46,0.5)]"
              >
                {{ FAQ.title }}
              </div>

              <div
                :class="[
                  'transition-all duration-500 ease-in-out overflow-hidden',
                  opened[index]
                    ? 'max-h-[500px] opacity-100 mt-2'
                    : 'max-h-0 opacity-0',
                ]"
              >
                <p
                  class="text-gray-roadmap text-[16px] font-ibm-sans font-normal leading-6"
                >
                  {{ FAQ.text }}
                </p>
              </div>
            </div>

            <component
              :is="opened[index] ? Minus : Plus"
              class="w-[50px] flex-shrink-0 max-md:w-max transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(246,67,64,0.6)]"
            />
          </div>

          <hr
            v-if="index !== FAQContent.length - 1"
            class="border-[#E4E7EC80]"
          />
        </div>
      </div>
    </div>

    <div class="max-lg:hidden">
      <img loading="lazy" decoding="async" :src="RightGold" alt="RightGold" />
    </div>

    <div
      class="absolute w-[5px] h-[5px] top-[8%] left-[10%] dot rounded-full bg-white opacity-[0.2] animate-pulse-custom max-md:hidden"
      style="filter: drop-shadow(0px 0px 6px #fff)"
    ></div>
    <div
      class="absolute w-[5px] h-[5px] top-[45%] left-[8%] dot rounded-full bg-white opacity-[0.2] animate-wave-sway max-md:hidden"
      style="filter: drop-shadow(0px 0px 6px #fff)"
    ></div>
    <div
      class="absolute w-[5px] h-[5px] top-[25%] right-[35%] dot rounded-full bg-white opacity-[0.2] animate-float max-md:hidden"
      style="filter: drop-shadow(0px 0px 6px #fff)"
    ></div>
  </div>
</template>

<style></style>
