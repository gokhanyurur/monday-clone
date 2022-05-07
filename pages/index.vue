<template>
  <div>
    <Header />
    <div class="pb-5 mobile-video">
      <video
        preload="auto"
        :poster="getVideoPoster()"
        aria-label='"Teams projects" boards on mobile and desktop'
        style="width: 100%; height: 100%"
        autoplay
        muted
        loop
      >
        <source :src="getVideo()" />
      </video>
    </div>
    <TrustBadges />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/organisms/Header.vue";
import TrustBadges from "~/components/molecules/TrustBadges.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { TrustBadges, Header },
  methods: {
    getVideoPoster() {
      return require("@/assets/img/video-posters/mobile_hero_videolight_small__poster.png");
    },
    getVideo() {
      return require("@/assets/videos/mobile_hero_videolight_small.mp4");
    },
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
