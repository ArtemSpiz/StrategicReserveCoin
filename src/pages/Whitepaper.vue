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

import DesktopBg1 from "@/assets/img/WhitepaperImgs/DesktopBg1.png";
import DesktopBg4 from "@/assets/img/WhitepaperImgs/DesktopBg4.png";
import DesktopBg10 from "@/assets/img/WhitepaperImgs/DesktopBg10.png";
import DesktopBg14 from "@/assets/img/WhitepaperImgs/DesktopBg14.png";
import DesktopBg16 from "@/assets/img/WhitepaperImgs/DesktopBg16.png";
import DesktopBg17 from "@/assets/img/WhitepaperImgs/DesktopBg17.png";
import DesktopBg18 from "@/assets/img/WhitepaperImgs/DesktopBg18.png";
import DesktopBg19 from "@/assets/img/WhitepaperImgs/DesktopBg19.png";
import DesktopBg20 from "@/assets/img/WhitepaperImgs/DesktopBg20.png";

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
import FooterWhitepaper from "@/components/sections/Whitepaper/FooterWhitepaper.vue";
</script>

<template>
  <Hero />

  <List
    :bg-desktop="DesktopBg1"
    :bg="Bg1"
    title="EXECUTIVE SUMMARY"
    :cards="Cards1"
    right
  />
  <List :bg-desktop="Bg2" :bg="Bg2" :cards="Cards2" />
  <Executive />
  <List
    :bg-desktop="DesktopBg4"
    :bg="Bg4"
    title="EXECUTIVE SUMMARY"
    :cards="Cards3"
    right
  />
  <Vault />
  <Governance />
  <Model />
  <Tiered />
  <Community />
  <ArrowsCards :bg-desktop="DesktopBg10" :bg="Bg10" :cards="ArrowCards1" />
  <Cards />
  <Token />
  <Nominee />
  <ArrowsCards :bg-desktop="DesktopBg14" :bg="Bg14" :cards="ArrowCards2" />
  <Phased />
  <Table
    :bg-desktop="DesktopBg16"
    :bg="Bg16"
    title="ROADMAP"
    subtitle="SRCOIN’s roadmap follows a community-first, migration-led progression."
    :info-table="[RoadmapPhase1]"
    Arrow
  />

  <Table
    :bg-desktop="DesktopBg17"
    :bg="Bg17"
    :info-table="[RoadmapPhase2]"
    Arrow
  />

  <Table :bg-desktop="DesktopBg18" :bg="Bg18" :info-table="[RoadmapPhase3]" />

  <List
    :bg-desktop="DesktopBg19"
    :bg="Bg19"
    title="Risks and Disclosures"
    subtitle="SRCOIN involves material risks, including but not limited to the following:"
    :cards="Cards4"
    right
  />
  <List :bg-desktop="DesktopBg20" :bg="Bg20" :cards="Cards5" />
  <FooterWhitepaper />
</template>

<style scoped></style>
