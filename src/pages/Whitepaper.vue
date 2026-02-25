<script setup>
import Hero from "@/components/sections/Whitepaper/Hero.vue";
import List from "@/components/sections/Whitepaper/List.vue";
import Bg1 from "@/assets/img/WhitepaperImgs/Bg1.png";
import Bg2 from "@/assets/img/WhitepaperImgs/Bg2.png";
import Bg4 from "@/assets/img/WhitepaperImgs/Bg4.png";
import Bg10 from "@/assets/img/WhitepaperImgs/Bg10.png";
import Bg14 from "@/assets/img/WhitepaperImgs/Bg14.png";
import Bg16 from "@/assets/img/WhitepaperImgs/Bg16.png";
import Bg17 from "@/assets/img/WhitepaperImgs/Bg17.png";
import Bg18 from "@/assets/img/WhitepaperImgs/Bg18.png";
import Bg19 from "@/assets/img/WhitepaperImgs/Bg19.png";
import Bg20 from "@/assets/img/WhitepaperImgs/Bg20.png";

import { Cards1, Cards2, Cards3, Cards4, Cards5 } from "@/data/Whitepaper";
import Executive from "@/components/sections/Whitepaper/Executive.vue";
import Vault from "@/components/sections/Whitepaper/Vault.vue";
import Governance from "@/components/sections/Whitepaper/Governance.vue";
import Model from "@/components/sections/Whitepaper/Model.vue";
import Tiered from "@/components/sections/Whitepaper/Tiered.vue";
import Community from "@/components/sections/Whitepaper/Community.vue";
import ArrowsCards from "@/components/sections/Whitepaper/ArrowsCards.vue";
import { ArrowCards1, ArrowCards2 } from "@/data/WhitepaperArrowCards";
import Cards from "@/components/sections/Whitepaper/Cards.vue";
import Token from "@/components/sections/Whitepaper/Token.vue";
import Nominee from "@/components/sections/Whitepaper/Nominee.vue";
import Phased from "@/components/sections/Whitepaper/Phased.vue";
import Table from "@/components/sections/Whitepaper/Table.vue";
import {
  RoadmapPhase1,
  RoadmapPhase2,
  RoadmapPhase3,
  RoadmapTable,
} from "@/data/WhitepaperRoadmap";
import Footer from "@/components/layouts/Footer.vue";
import FooterWhitepaper from "@/components/sections/Whitepaper/FooterWhitepaper.vue";
</script>

<template>
  <Hero />

  <div class="max-w-[700px] mx-auto">
    <List :bg="Bg1" title="EXECUTIVE SUMMARY" :cards="Cards1" right />
    <List :bg="Bg2" :cards="Cards2" />
    <Executive />
    <List :bg="Bg4" title="EXECUTIVE SUMMARY" :cards="Cards3" right />
    <Vault />
    <Governance />
    <Model />
    <Tiered />
    <Community />
    <ArrowsCards :bg="Bg10" :cards="ArrowCards1" />
    <Cards />
    <Token />
    <Nominee />
    <ArrowsCards :bg="Bg14" :cards="ArrowCards2" />
    <Phased />
    <Table
      :bg="Bg16"
      title="ROADMAP"
      subtitle="SRCOIN’s roadmap follows a community-first, migration-led progression."
      :info-table="[RoadmapPhase1]"
      Arrow
    />

    <Table :bg="Bg17" :info-table="[RoadmapPhase2]" Arrow />

    <Table :bg="Bg18" :info-table="[RoadmapPhase3]" />

    <List
      :bg="Bg19"
      title="Risks and Disclosures"
      subtitle="SRCOIN involves material risks, including but not limited to the following:"
      :cards="Cards4"
      right
    />
    <List :bg="Bg20" :cards="Cards5" />
    <FooterWhitepaper />
  </div>
</template>

<style scoped></style>
