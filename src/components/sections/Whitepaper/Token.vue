<script setup>
import StrategnomicsCheckMark from "@/assets/svg/StrategnomicsCheckMark.vue";
import StrategnomicsMoney from "@/assets/svg/StrategnomicsMoney.vue";
import StrategnomicsRewards from "@/assets/svg/StrategnomicsRewards.vue";
import StrategnomicsTeam from "@/assets/svg/StrategnomicsTeam.vue";
import StrategnomicsDoc from "@/assets/svg/StrategnomicsDoc.vue";
import StrategnomicsCoin from "@/assets/img/StrategnomicsCoin.png";
import Button from "@/components/ui/Button.vue";
import { StrategnomicsCardsWhitepaper } from "@/data/StrategnomicsCardsData";
import Bg from "@/assets/img/WhitepaperImgs/Bg12.png";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-12 p-20 max-xl:p-16 max-lg:px-10 max-md:px-5 max-md:py-8 max-md:gap-5 bg-cover bg-no-repeat bg-bottom"
    :style="{ backgroundImage: `url(${Bg})` }"
  >
    <div class="flex flex-col w-full items-start text-start gap-4">
      <div
        class="text-white text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col items-center max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[35px] max-xs:text-[32px]"
      >
        TOKENOMICS  EXPLAINED
      </div>
      <div
        class="text-white text-[16px] font-ibm-sans leading-[24px] font-normal w-[615px] max-lg:w-[400px] max-md:text-[15px] max-xs:text-[14px] max-xs:w-full"
      >
        This section outlines the quantitative structure of the SRCOIN
        ecosystem, including total supply, phased releases, and allocation
        mechanics. All figures, dates, and conditions described below are coded
        and verifiable.
      </div>
    </div>

    <div class="flex flex-col items-center text-center gap-[32px] w-full">
      <div
        class="flex flex-col items-center text-center gap-6 w-full max-lg:gap-[32px]"
      >
        <div
          class="flex gap-4 items-center justify-center self-stretch w-full flex-col"
        >
          <div
            v-if="StrategnomicsCardsWhitepaper[0]"
            class="p-6 flex flex-col gap-2 border border-[#433C34] bg-gray-benefit w-[350px] max-xl:w-[300px] max-lg:w-full"
            style="box-shadow: inset 0 0 14px 0 rgba(88, 54, 18, 0.3)"
          >
            <div
              class="text-[14px] font-ibm-sans text-gray-text font-medium leading-4"
            >
              {{ StrategnomicsCardsWhitepaper[0].title }}
            </div>
            <div
              class="text-[24px] text-[#FFEA70] font-ibm-sans font-medium leading-[26px] max-lg:text-[22px] max-lg:leading-[120%] max-sm:text-[20px]"
            >
              {{ StrategnomicsCardsWhitepaper[0].subtitle }}
            </div>
          </div>

          <div class="flex max-lg:flex-row gap-4 max-lg:w-full">
            <div
              v-if="StrategnomicsCardsWhitepaper[1]"
              class="p-6 flex flex-col gap-2 border border-[#433C34] bg-gray-benefit w-[350px] max-xl:w-[300px] max-lg:w-[50%] max-sm:w-max max-xs:p-[12px] max-xs:justify-center"
              style="box-shadow: inset 0 0 14px 0 rgba(88, 54, 18, 0.3)"
            >
              <div
                class="text-[14px] font-ibm-sans text-gray-text font-medium leading-4"
              >
                {{ StrategnomicsCardsWhitepaper[1].title }}
              </div>
              <div
                class="text-[24px] text-[#FFEA70] font-ibm-sans font-medium leading-[26px] max-lg:text-[22px] max-lg:leading-[120%] max-sm:text-[20px]"
              >
                {{ StrategnomicsCardsWhitepaper[1].subtitle }}
              </div>
            </div>

            <div
              v-if="StrategnomicsCardsWhitepaper[2]"
              class="p-6 flex flex-col gap-2 border border-[#433C34] bg-gray-benefit w-[350px] max-xl:w-[300px] max-lg:w-[50%] max-sm:w-full max-xs:px-0"
              style="box-shadow: inset 0 0 14px 0 rgba(88, 54, 18, 0.3)"
            >
              <div
                class="text-[14px] font-ibm-sans text-gray-text font-medium leading-4"
              >
                {{ StrategnomicsCardsWhitepaper[2].title }}
              </div>
              <div
                class="text-[24px] text-[#FFEA70] font-ibm-sans font-medium leading-[26px] max-lg:text-[22px] max-lg:leading-[120%] max-sm:text-[20px]"
              >
                {{ StrategnomicsCardsWhitepaper[2].subtitle }}
              </div>
            </div>
          </div>
        </div>

        <div
          class="max-w-[1600px] z-10 flex justify-between items-center relative w-full flex-col h-[600px]"
        >
          <div class="flex flex-row">
            <div
              class="text-start bg-ggg w-[395px] bg-no-repeat flex flex-col gap-2 items-start p-[32px] max-lg:w-full bg-[url('@/assets/img/LeftUpMobil.png')] max-md:p-[24px] max-md:gap-1 max-md:w-[175px] max-md:h-[230px]"
            >
              <div
                class="text-[24px] font-ibm-sans font-medium leading-[36px] text-white max-lg:text-[22px] max-md:text-[12px] max-md:leading-none"
              >
                Initial Supply and Migration
              </div>
              <div
                class="text-[14px] max-md:text-[8px] max-md:leading-none font-ibm-sans font-medium leading-4 text-gray-text pt-2 max-lg:text-[13px] max-md:pt-0"
              >
                SRCOIN launches with an initial supply of 150,000,000 SRCOIN,
                created specifically to replace the existing FUNLESS supply
                through a structured migration.
              </div>
            </div>

            <div
              class="z-10 bg-ggg w-[395px] bg-no-repeat flex flex-col gap-2 items-start p-[32px] max-lg:w-full bg-[url('@/assets/img/RightUpMobil.png')] max-md:items-end max-md:p-[24px] max-md:gap-1 max-md:w-[175px] max-md:h-[230px]"
            >
              <div
                class="text-[24px] font-ibm-sans text-end font-medium leading-[36px] text-white max-lg:text-[22px] max-md:text-[12px] max-md:leading-none"
              >
                FUNLESS → SRCOIN Swap
              </div>
              <div
                class="text-[14px] max-md:text-[8px] max-md:leading-none font-ibm-sans font-medium leading-4 text-gray-text pt-2 max-lg:text-[13px] max-md:pt-0"
              >
                <ul class="list-disc text-start pl-5 space-y-1">
                  <li>
                    Current FUNLESS supply:
                    <span class="text-[#FFEA70]">500,000,000</span>
                  </li>
                  <li>
                    Swap rate:
                    <span class="text-[#FFEA70]">1 FUNLESS = 0.3 SRCOIN</span>
                  </li>
                  <li>
                    Total SRCOIN distributed via swap:
                    <span class="text-[#FFEA70]">150,000,000 SRCOIN</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            class="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 -z-[1]"
          >
            <img
              loading="lazy"
              decoding="async"
              :src="StrategnomicsCoin"
              alt="StrategnomicsCoin"
              class="max-w-none w-[400px] h-[400px] max-sm:w-[350px] max-sm:h-[350px]"
            />
          </div>

          <div class="flex flex-row">
            <div
              class="max-md:text-start justify-end text-start bg-ggg w-[395px] bg-no-repeat flex flex-col gap-2 items-end p-[32px] max-lg:w-full bg-[url('@/assets/img/LeftDownMobil.png')] max-md:items-start max-md:p-[24px] max-md:gap-1 max-md:justify-end max-md:w-[175px] max-md:h-[230px]"
            >
              <div
                class="text-[24px] font-ibm-sans font-medium leading-[36px] text-white max-lg:text-[22px] max-md:text-[12px] max-md:leading-none"
              >
                Satoshi Vault Allocation (Phase One)
              </div>
              <div
                class="text-[14px] max-md:text-[8px] max-md:leading-none font-ibm-sans font-medium leading-4 text-gray-text pt-2 max-lg:text-[13px] max-md:pt-0"
              >
                An additional 8,000,000 SRCOIN is reserved for Satoshi Vault
                under strict, price-based conditions. On June 9, 2026, Satoshi
                Vault allocation will be either released or permanently burned. 
              </div>
            </div>

            <div
              class="text-end bg-ggg w-[395px] bg-no-repeat flex flex-col gap-2 items-end p-[32px] max-lg:w-full bg-[url('@/assets/img/RightDownMobil.png')] max-md:p-[24px] max-md:gap-1 max-md:justify-end max-md:w-[175px] max-md:h-[230px]"
            >
              <div
                class="text-[24px] max-md:text-[12px] max-md:leading-none font-ibm-sans font-medium leading-[36px] text-white max-lg:text-[22px]"
              >
                Phase Two Supply: Long-Term Governance Phase
              </div>
              <div
                class="text-[14px] max-md:text-[8px] max-md:leading-none font-ibm-sans font-medium leading-4 text-gray-text pt-2 max-lg:text-[13px] max-md:pt-0"
              >
                The remaining supply of 842,000,000 SRCOIN is allocated to Phase
                Two, a long-term, milestone-based governance phase. The annual
                evaluation is scheduled on December 9 of each year starting
                December 9, 2026, Supply decisions occur once per year based on
                clearly defined price milestones. At each annual checkpoint, a
                portion of Phase Two supply is either released or permanently
                burned.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full text-center items-center gap-4">
        <div
          class="text-white md:text-[12px] text-[10px] font-ibm-mono font-normal flex flex-col items-center"
        >
          Phase Two Supply: Long-Term Governance Phase
        </div>
        <div
          class="text-white max-md:text-[8px] max-md:leading-none text-[5px] font-ibm-sans ont-normal max-w-[400px]"
        >
          The remaining supply of 842,000,000 SRCOIN is allocated to Phase Two,
          a long-term, milestone-based governance phase. The annual evaluation
          is scheduled on December 9 of each year starting December 9, 2026,
          Supply decisions occur once per year based on clearly defined price
          milestones. At each annual checkpoint, a portion of Phase Two supply
          is either released or permanently burned.
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
