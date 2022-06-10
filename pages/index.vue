<template>
  <div>
    <Header />
    <div class="relative">
      <SectionTriangle />
      <TrustBadges />
    </div>
    <WorkOs />
    <div class="relative">
      <SectionTriangle color="darkest-blue"/>
      <ScrollParallax />
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

export default Vue.extend({
  name: "IndexPage",
  components: { TrustBadges, Header, SectionTriangle, WorkOs, ScrollParallax },
});
</script>
<style scoped lang="scss"></style>
