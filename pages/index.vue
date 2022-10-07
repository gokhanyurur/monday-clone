<template>
  <div>
    <Header />
    <div class="relative">
      <SectionTriangle />
      <TrustBadges />
    </div>
    <WorkOs />
    <div class="relative hidden lg:block">
      <SectionTriangle color="darkest-blue" />
      <ScrollParallax />
    </div>
    <div class="relative">
      <SectionTriangle />
      <Tabs />
    </div>
    <div class="relative">
      <SectionTriangle color="lightest-blue" />
      <MondayProducts />
    </div>
    <div class="relative">
      <SectionTriangle color="light" />
      <SuccessStories />
    </div>
    <div class="relative">
      <Support />
    </div>
    <div class="relative">
      <Awards />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/organisms/Header.vue";
import TrustBadges from "~/components/molecules/TrustBadges.vue";
import SectionTriangle from "~/components/atoms/SectionTriangle.vue";
import WorkOs from "~/components/molecules/WorkOs.vue";
import ScrollParallax from "~/components/organisms/ScrollParallax.vue";
import Tabs from "~/components/organisms/Tabs.vue";
import MondayProducts from "~/components/organisms/MondayProducts.vue";
import SuccessStories from "~/components/organisms/SuccessStories.vue";
import Support from "~/components/organisms/Support.vue";
import Awards from "~/components/organisms/Awards.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    TrustBadges,
    Header,
    SectionTriangle,
    WorkOs,
    ScrollParallax,
    Tabs,
    MondayProducts,
    SuccessStories,
    Support,
    Awards,
  },
});
</script>
<style scoped lang="scss"></style>
