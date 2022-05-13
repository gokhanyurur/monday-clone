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
    <div class="relative">
      <SectionTriangle />
      <TrustBadges />
    </div>
    <div class="m__container flex relative work-os">
      <div class="pr-10 work-os__left">
        <h2 class="text-4xl-custom">
          {{ "The Work OS that lets you" }}<br />{{ "shape workflows, " }}
          <b>{{ "your way" }}</b>
        </h2>
      </div>
      <div class="pr-10 work-os__right">
        <p class="text-2xl">
          {{
            "Boost your team’s alignment, efficiency, and productivity by customizing any workflow to fit your needs."
          }}
        </p>
        <div class="mt-8">
          <Button
            classes="bg-main-blue text-light rounded-full outline-none m__btn"
            size="lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/organisms/Header.vue";
import TrustBadges from "~/components/molecules/TrustBadges.vue";
import SectionTriangle from "~/components/atoms/SectionTriangle.vue";
import Button from "~/components/atoms/Button.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { Button, TrustBadges, Header, SectionTriangle },
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
.work-os {
  @media (max-width: 1279px) {
    display: none;
  }
  padding-top: 64px;
  padding-bottom: 90px;
  &__left {
    padding-right: 60px;
    width: 50%;
  }
  &__right {
    width: 50%;
    p {
      line-height: 40px !important;
    }
    .m__btn {
      padding: 10px 23px 10px 31px;
    }
  }
}
</style>
