<script setup>
import Arrow from "@/assets/img/WhitepaperImgs/BottomArrow.png";

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
  infoTable: {
    type: Array,
    required: true,
  },
  Arrow: {
    type: Boolean,
  },
});

const isMobile = window.innerWidth < 768;
</script>

<template>
  <div
    class="relative overflow-hidden flex flex-col gap-5 p-20 max-xl:p-16 max-lg:px-10 max-md:px-5 max-md:py-8 bg-cover bg-no-repeat bg-center"
    :style="{
      backgroundImage: `url(${isMobile ? props.bg : props.bgDesktop})`,
    }"
  >
    <div
      class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-0"
    />
    <div
      class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-0"
    />
    <div class="flex gap-4 flex-col text-center items-center z-10">
      <div
        v-if="props.title"
        class="text-white max-w-[400px] max-md:max-w-[200px] uppercase text-[48px] font-ibm-mono leading-[52px] font-normal flex flex-col max-lg:text-[40px] max-lg:leading-[110%] max-md:text-[30px] max-xs:text-[23px]"
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

    <div class="mt-10 max-lg:mt-8 max-md:mt-6 space-y-6">
      <div
        v-for="(phase, index) in props.infoTable"
        :key="phase.id || index"
        class="relative w-full max-w-4xl mx-auto"
      >
        <div
          class="absolute inset-0 bg-cover bg-center scale-x-[-1]"
          style="background-image: url(&quot;your-image.jpg&quot;)"
        ></div>

        <!-- Blur overlay -->
        <div class="absolute inset-0 backdrop-blur-sm bg-black/40"></div>
        <div
          class="backdrop-blur-md border border-[#FFFFFF33] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.7)]"
        >
          <!-- Header row -->
          <div
            class="grid grid-cols-[minmax(110px,150px)_1fr] max-md:grid-cols-1"
          >
            <div
              class="border-b border-r max-md:border-r-0 border-[#5B544D] px-5 py-4 flex items-center justify-center text-center uppercase font-ibm-mono text-xs sm:text-sm md:text-base text-white"
            >
              {{ phase.phase }}
            </div>
            <div
              class="max-md:justify-center border-b border-[#5B544D] px-5 py-4 flex items-center font-ibm-mono text-xs sm:text-sm md:text-base text-white"
            >
              {{ phase.title }}
            </div>
          </div>

          <!-- Content -->
          <div
            class="py-5 md:py-6 space-y-5 lg:text-base text-xs sm:text-sm md:text-base text-[#FFFFFF80] font-ibm-sans"
          >
            <p v-if="phase.description" class="px-5 md:px-6">
              {{ phase.description }}
            </p>

            <div
              v-for="(section, sIndex) in phase.sections || []"
              :key="section.heading || sIndex"
              class="space-y-2"
            >
              <div
                v-if="section.heading"
                class="font-semibold lg:text-lg px-5 md:px-6 border-t border-b py-2 border-[#5B544D] w-full text-white text-sm md:text-base"
              >
                {{ section.heading }}
              </div>

              <p v-if="section.text" class="px-5 md:px-6">
                {{ section.text }}
              </p>

              <ul
                v-if="section.items && section.items.length"
                class="list-disc pl-5 space-y-1 px-5 md:px-6"
              >
                <li v-for="(item, itemIndex) in section.items" :key="itemIndex">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="props.Arrow"
      class="absolute w-[50px] h-auto bottom-5 right-1/2 translate-x-1/2"
    >
      <img :src="Arrow" />
    </div>
  </div>
</template>

<style scoped></style>
