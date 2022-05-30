<template>
  <div>
    <Header />
    <div class="pb-5 mobile-video">
      <video
        preload="auto"
        :poster="
          getImgUrl(
            'mobile_hero_videolight_small__poster.png',
            '/video-posters'
          )
        "
        aria-label='"Teams projects" boards on mobile and desktop'
        style="width: 100%; height: 100%"
        autoplay
        muted
        loop
      >
        <source :src="getVideo('mobile_hero_videolight_small.mp4')" />
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
import WorkOs from "~/components/molecules/WorkOs.vue";
import { getVideo, getImgUrl } from "@/utils/helpers";

export default Vue.extend({
  name: "IndexPage",
  components: { TrustBadges, Header, SectionTriangle, WorkOs },
  methods: {
    getVideo,
    getImgUrl,
  },
});
</script>
<style scoped lang="scss">
.mobile-video {
  @media (min-width: 1280px) {
    display: none;
  }
}
</style>
