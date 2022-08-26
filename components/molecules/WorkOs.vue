<template>
  <div>
    <div class="m__container lg:flex relative work-os">
      <div class="lg:pr-10 work-os__left">
        <h2 class="text-4xl-custom px-5 lg:px-0 mb-4 lg:mb-0">
          <span class="xl:block"> {{ "The Work OS that lets you" }} </span>
          <span> {{ "shape workflows, " }} </span>
          <b>{{ "your way" }}</b>
        </h2>
      </div>
      <div class="lg:pr-10 work-os__right">
        <p class="text-xl lg:text-2xl px-5 lg:px-0 mb-4">
          {{
            "Boost your team’s alignment, efficiency, and productivity by customizing any workflow to fit your needs."
          }}
        </p>
        <div class="mt-8 hidden lg:block">
          <Button
            classes="bg-main-blue text-light rounded-full outline-none m__btn"
            size="lg"
          />
        </div>
      </div>
    </div>
    <div class="work-os-desktop">
      <div class="m__container">
        <div class="grid-container">
          <div class="item item-1 timeline">
            <div class="asset-inner">
              <div class="video-component">
                <video
                  preload="auto"
                  :poster="getImgUrl('timeline_column.png', '/video-posters')"
                  style="width: 100%; height: 100%"
                  muted
                >
                  <source :src="getVideo('timeline_column.mp4')" />
                </video>
              </div>
            </div>
          </div>
          <div class="item item-2 status">
            <div class="asset-inner">
              <div class="video-component">
                <video
                  preload="auto"
                  :poster="getImgUrl('status_column.png', '/video-posters')"
                  style="width: 100%; height: 100%"
                  muted
                >
                  <source :src="getVideo('status_column.mp4')" />
                </video>
              </div>
            </div>
          </div>
          <div class="item item-3 battery">
            <div class="asset-inner">
              <div class="video-component">
                <video
                  preload="auto"
                  :poster="getImgUrl('battery_column.png', '/video-posters')"
                  style="width: 100%; height: 100%"
                  muted
                >
                  <source :src="getVideo('battery_column.mp4')" />
                </video>
              </div>
            </div>
          </div>
          <div class="item item-4 integration">
            <div class="asset-inner">
              <div class="video-component">
                <video
                  preload="auto"
                  :poster="
                    getImgUrl('integration_column.png', '/video-posters')
                  "
                  style="width: 100%; height: 100%"
                  muted
                >
                  <source :src="getVideo('integration_column.mp4')" />
                </video>
              </div>
            </div>
          </div>
          <div class="item item-5 pie">
            <div class="asset-inner">
              <div class="video-component">
                <video
                  preload="auto"
                  :poster="getImgUrl('pie_column.png', '/video-posters')"
                  style="width: 100%; height: 100%"
                  muted
                >
                  <source :src="getVideo('pie_column.mp4')" />
                </video>
              </div>
            </div>
          </div>
          <div class="item item-6 mobileapp">
            <div class="asset-inner">
              <div class="video-component">
                <video
                  preload="auto"
                  :poster="getImgUrl('mobileapp_column.png', '/video-posters')"
                  style="width: 100%; height: 100%"
                  muted
                >
                  <source :src="getVideo('mobileapp_column.mp4')" />
                </video>
              </div>
            </div>
          </div>
          <div class="item item-7 automation">
            <div class="asset-inner">
              <div class="video-component">
                <video
                  preload="auto"
                  :poster="getImgUrl('automation_column.png', '/video-posters')"
                  style="width: 100%; height: 100%"
                  muted
                >
                  <source :src="getVideo('automation_column.mp4')" />
                </video>
              </div>
            </div>
          </div>
          <div class="item item-8 talk">
            <div class="asset-inner">
              <div class="video-component">
                <video
                  preload="auto"
                  :poster="getImgUrl('talk_column.png', '/video-posters')"
                  style="width: 100%; height: 100%"
                  muted
                >
                  <source :src="getVideo('talk_column.mp4')" />
                </video>
              </div>
            </div>
          </div>
          <Window classes="item item-9 dashboard">
            <template #content>
              <div class="window-content">
                <div class="asset-inner">
                  <div class="video-component">
                    <video
                      preload="auto"
                      :poster="
                        getImgUrl('dashboard_column.png', '/video-posters')
                      "
                      style="width: 100%; height: 100%"
                      muted
                    >
                      <source :src="getVideo('dashboard_column.mp4')" />
                    </video>
                  </div>
                </div>
              </div>
            </template>
          </Window>
        </div>
      </div>
    </div>
    <div class="m__container work-os-mobile">
      <img
        :src="getImgUrl('workos-mobile-img.png')"
        width="100%"
        height="auto"
        alt="WorkOs Mobile Image"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "~/components/atoms/Button.vue";
import Window from "~/components/atoms/Window.vue";
import { getImgUrl, getVideo } from "@/utils/helpers";

export default Vue.extend({
  name: "WorkOS",
  components: { Button, Window },
  mounted() {
    const observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting)
          setTimeout(() => {
            (
              document.querySelector(".timeline video") as HTMLVideoElement
            ).play();
          }, 500);
        setTimeout(() => {
          (document.querySelector(".status video") as HTMLVideoElement).play();
        }, 2000);
        setTimeout(() => {
          (
            document.querySelector(".dashboard video") as HTMLVideoElement
          ).play();
        }, 3000);
        setTimeout(() => {
          (
            document.querySelector(".integration video") as HTMLVideoElement
          ).play();
        }, 4500);
        setTimeout(() => {
          (
            document.querySelector(".automation video") as HTMLVideoElement
          ).play();
        }, 6000);
        setTimeout(() => {
          (document.querySelector(".talk video") as HTMLVideoElement).play();
        }, 7500);
        setTimeout(() => {
          (
            document.querySelector(".mobileapp video") as HTMLVideoElement
          ).play();
        }, 9000);
        setTimeout(() => {
          (document.querySelector(".battery video") as HTMLVideoElement).play();
        }, 10000);
        setTimeout(() => {
          (document.querySelector(".pie video") as HTMLVideoElement).play();
        }, 11000);
      },
      { threshold: [1] }
    );

    observer.observe(document.querySelector(".timeline video") as HTMLElement);
  },
  methods: {
    getImgUrl,
    getVideo,
  },
});
</script>

<style lang="scss" scoped>
.work-os-desktop {
  display: none;
  @include media-breakpoint-up("lg") {
    display: block;
  }
}
.work-os-mobile {
  display: block;
  @include media-breakpoint-up("lg") {
    display: none;
  }
}
.work-os {
  padding-top: 40px;
  @media (min-width: 1024px) {
    padding-top: 64px;
    padding-bottom: 90px;
  }
  &__left {
    @media (min-width: 1024px) {
      padding-right: 60px;
      width: 50%;
    }
  }
  &__right {
    padding-bottom: 20px;
    @media (min-width: 1024px) {
      width: 50%;
      padding-bottom: 0;
    }
    p {
      line-height: 32px;
      @media (min-width: 1024px) {
        line-height: 40px !important;
      }
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
    background-color: get-color("light");
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
    background-color: get-color("light");
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
  .item-9 {
    grid-area: dashboard;
  }
}
</style>
