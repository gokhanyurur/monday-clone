<template>
  <div>
    <Header />
    <div class="pb-5 mobile-video">
      <video
        preload="auto"
        :poster="$helpers.getImgUrl('mobile_hero_videolight_small__poster.png', '/video-posters')"
        aria-label='"Teams projects" boards on mobile and desktop'
        style="width: 100%; height: 100%"
        autoplay
        muted
        loop
      >
        <source :src="$helpers.getVideo('mobile_hero_videolight_small.mp4')" />
      </video>
    </div>
    <div class="relative">
      <SectionTriangle />
      <TrustBadges />
    </div>
    <WorkOs />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/organisms/Header.vue";
import TrustBadges from "~/components/molecules/TrustBadges.vue";
import SectionTriangle from "~/components/atoms/SectionTriangle.vue";
import Button from "~/components/atoms/Button.vue";
import WorkOs from "~/components/molecules/WorkOs.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { Button, TrustBadges, Header, SectionTriangle, WorkOs },
});
</script>
<style scoped lang="scss">
.mobile-video {
  @media (min-width: 1280px) {
    display: none;
  }
}
</style>
