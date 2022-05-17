<template>
  <div>
    <Header />
    <div class="pb-5 mobile-video">
      <video
        preload="auto"
        :poster="getVideoPoster('mobile_hero_videolight_small__poster.png')"
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
    <div class="m__container">
      <div class="grid-container">
        <div class="item item-1">
          <div class="asset-inner">
            <div class="video-component">
              <video
                preload="auto"
                :poster="getVideoPoster('timeline_column.png')"
                style="width: 100%; height: 100%"
                autoplay
                muted
              >
                <source :src="getVideo('timeline_column.mp4')" />
              </video>
            </div>
          </div>
        </div>
        <div class="item item-2">
          <div class="asset-inner">
            <div class="video-component">
              <video
                preload="auto"
                :poster="getVideoPoster('status_column.png')"
                style="width: 100%; height: 100%"
                autoplay
                muted
              >
                <source :src="getVideo('status_column.mp4')" />
              </video>
            </div>
          </div>
        </div>
        <div class="item item-3">
          <div class="asset-inner">
            <div class="video-component">
              <video
                preload="auto"
                :poster="getVideoPoster('battery_column.png')"
                style="width: 100%; height: 100%"
                autoplay
                muted
              >
                <source :src="getVideo('battery_column.mp4')" />
              </video>
            </div>
          </div>
        </div>
        <div class="item item-4">
          <div class="asset-inner">
            <div class="video-component">
              <video
                preload="auto"
                :poster="getVideoPoster('integration_column.png')"
                style="width: 100%; height: 100%"
                autoplay
                muted
              >
                <source :src="getVideo('integration_column.mp4')" />
              </video>
            </div>
          </div>
        </div>
        <div class="item item-5">
          <div class="asset-inner">
            <div class="video-component">
              <video
                preload="auto"
                :poster="getVideoPoster('pie_column.png')"
                style="width: 100%; height: 100%"
                autoplay
                muted
              >
                <source :src="getVideo('pie_column.mp4')" />
              </video>
            </div>
          </div>
        </div>
        <div class="item item-6">
          <div class="asset-inner">
            <div class="video-component">
              <video
                preload="auto"
                :poster="getVideoPoster('mobileapp_column.png')"
                style="width: 100%; height: 100%"
                autoplay
                muted
              >
                <source :src="getVideo('mobileapp_column.mp4')" />
              </video>
            </div>
          </div>
        </div>
        <div class="item item-7">
          <div class="asset-inner">
            <div class="video-component">
              <video
                preload="auto"
                :poster="getVideoPoster('automation_column.png')"
                style="width: 100%; height: 100%"
                autoplay
                muted
              >
                <source :src="getVideo('automation_column.mp4')" />
              </video>
            </div>
          </div>
        </div>
        <div class="item item-8">
          <div class="asset-inner">
            <div class="video-component">
              <video
                preload="auto"
                :poster="getVideoPoster('talk_column.png')"
                style="width: 100%; height: 100%"
                autoplay
                muted
              >
                <source :src="getVideo('talk_column.mp4')" />
              </video>
            </div>
          </div>
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
    getVideoPoster(fileName: string) {
      return require("@/assets/img/video-posters/" + fileName);
    },
    getVideo(fileName: string) {
      return require("@/assets/videos/" + fileName);
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
.grid-container {
  display: grid;
  grid-template-areas:
    "column1 battery phone automation comment . "
    "column2 battery phone . . . "
    "column2 battery phone dashboard dashboard dashboard"
    "integration integration phone dashboard dashboard dashboard"
    " . pie phone dashboard dashboard dashboard"
    " . . . dashboard dashboard dashboard";
  grid-template-columns: 12.64vw 11.54vw 14.79vw 14.72vw 12.64vw 18%;
  grid-template-rows: 5vw 2.5vw 1.25vw 6.39vw 11.17vw auto;
  grid-gap: 1.67vw;
  .item {
    filter: drop-shadow(-11px 14px 35px rgba(29, 140, 242, 0.2));
    border-radius: 8px;
    z-index: -1;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .asset-inner {
      position: relative;
      width: 100%;
      height: auto;
      .video-component {
        height: 100%;
        outline: none;
        video {
          border-radius: 8px;
        }
      }
    }
  }
  .item-1 {
    grid-area: column1;
  }
  .item-2 {
    grid-area: column2;
  }
  .item-3 {
    grid-area: battery;
    display: inherit;
    z-index: 0;
  }
  .item-4 {
    grid-area: integration;
  }
  .item-5 {
    grid-area: pie;
  }
  .item-6 {
    grid-area: phone;
    padding: 7px;
    background-color: #fff;
    border-radius: 24px;
    height: fit-content;
    .asset-inner {
      filter: drop-shadow(-9px 11px 27px rgba(29, 140, 242, 0.3));
      .video-component {
        video {
          border-radius: 24px;
        }
      }
    }
  }
  .item-7 {
    grid-area: automation;
  }
  .item-8 {
    grid-area: comment;
  }
}
</style>
