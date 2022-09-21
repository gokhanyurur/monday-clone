<template>
  <div class="m__tabs-section m__container">
    <h2 class="core-title lg text-center mb-4">
      <b>{{ "Everything" }}</b>
      {{ "you need for" }}
      <b>{{ "any workflow" }}</b>
    </h2>
    <p class="paragraph-body text-center">
      {{ "Easily build your ideal workflow with monday.com building blocks." }}
    </p>
    <div class="m__tabs-desktop">
      <div class="m__tabs-wrapper">
        <div
          v-for="(tab, index) in getTabs()"
          :key="`${tab.title}-${index}`"
          class="tab"
          :class="{ active: index === activeTab }"
          @click="selectTab(index)"
        >
          <div class="icon-wrapper">
            <div v-if="tab.iconPath">
              <img
                class="icon"
                :src="getImgUrl(tab.iconPath, '/icons')"
                :alt="tab.title"
                width="16px"
                height="16px"
              />
            </div>
          </div>
          <div class="name">
            {{ tab.title }}
          </div>
          <div class="marker" :class="{ active: index === activeTab }" />
        </div>
      </div>
      <div class="m__tabs-content-wrapper">
        <div
          v-for="(tabContent, index) in getContents()"
          :key="`tabcontent-${index}`"
          class="tab-content"
          :class="{
            selected: index === activeTab,
          }"
        >
          <div class="side-by-side-content row-reverse">
            <div class="tab-content__paragraph-wrapper">
              <div>
                <span class="flex items-center mb-4">
                  <div>
                    <img
                      class="icon"
                      :src="
                        getImgUrl(
                          getTabByContent(tabContent.paragraph).iconPath,
                          '/icons'
                        )
                      "
                      :alt="getTabByContent(tabContent.paragraph).title"
                      width="24px"
                      height="24px"
                    />
                  </div>
                  <h2 class="text-tab-blue core-title sm">
                    {{ getTabByContent(tabContent.paragraph).title }}
                  </h2>
                </span>
                <p class="paragraph-body md">{{ tabContent.paragraph }}</p>
                <Button
                  v-if="tabContent.link"
                  classes="text-tab-blue text-sm outline-none m__btn m__link mt-8 w-fit"
                  :text="tabContent.link.label"
                />
              </div>
            </div>
            <div class="tab-content__video-wrapper">
              <Window classes="tab_content__video-window">
                <template #content>
                  <div class="window-content">
                    <div class="asset-inner">
                      <div class="video-component">
                        <video
                          preload="auto"
                          autoplay="true"
                          loop="true"
                          :poster="
                            getImgUrl(
                              tabContent.video.videoPoster,
                              '/video-posters'
                            )
                          "
                          style="width: 100%; height: 100%"
                          muted
                          class="tab-video"
                        >
                          <source :src="getVideo(tabContent.video.videoPath)" />
                        </video>
                      </div>
                    </div>
                  </div>
                </template>
              </Window>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { tabsData, tabTitle, tabContent } from "@/data/tabs";
import { getImgUrl, getVideo } from "~/utils/helpers";
import Window from "~/components/atoms/Window.vue";
import Button from "~/components/atoms/Button.vue";

export default Vue.extend({
  name: "Tabs",
  components: { Window, Button },
  data() {
    return {
      data: tabsData.data,
      activeTab: 0,
    };
  },
  methods: {
    getImgUrl,
    getVideo,
    getTabs() {
      const tabs: tabTitle[] = [];
      this.data.map((tabData) => tabs.push(tabData.tab));
      return tabs;
    },
    getContents() {
      const contents: tabContent[] = [];
      this.data.map((tabData) => contents.push(tabData.content));
      return contents;
    },
    getTabByContent(paragraph: string) {
      return this.data.filter((el) => el.content.paragraph === paragraph)[0]
        .tab;
    },
    selectTab(index: number) {
      this.activeTab = index;
      // TODO play video from start when the tab is active
    },
  },
});
</script>

<style scoped lang="scss">
.m__tabs {
  &-desktop {
    padding-top: 40px;
    display: none;
    @include media-breakpoint-up("lg") {
      display: block;
    }
  }
  &-wrapper {
    display: flex;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    height: 83px;
    width: max-content;
    box-shadow: 0px 10px 30px rgb(29 140 242 / 20%);
    border-radius: 8px;
    .tab {
      padding-left: 20px;
      padding-right: 20px;
      position: relative;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      min-width: 100px;
      padding: 0 20px;
      &.active {
        .icon-wrapper {
          .icon {
            opacity: 1;
            filter: invert(37%) sepia(100%) saturate(7473%) hue-rotate(249deg)
              brightness(103%) contrast(101%);
          }
        }
        .name {
          color: get-color("tab-blue");
          opacity: 1;
        }
      }
      &:hover {
        background-color: get-color("lightest-blue");
      }
      .icon-wrapper {
        .icon {
          margin: auto;
          opacity: 0.6;
          filter: invert(8%) sepia(23%) saturate(7138%) hue-rotate(232deg)
            brightness(99%) contrast(107%);
        }
      }
      .name {
        opacity: 0.6;
        text-align: center;
        color: get-color("darkest-blue");
      }
      .marker {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 4px;
        width: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        background-color: transparent;
        transition: background-color 0.1s ease-in-out;
        &.active {
          background-color: get-color("tab-blue");
        }
      }
    }
  }
  &-content-wrapper {
    position: relative;
    .tab-content {
      position: absolute;
      padding-left: 72px;
      padding-right: 56px;
      visibility: hidden;
      opacity: 0;
      transition: 0.3s;
      &.selected {
        visibility: visible;
        opacity: 1;
      }
      &__video-wrapper {
        width: 60%;
        padding: 56px 48px;
        ::v-deep video {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
      &__video-window {
        padding: 56px 48px;
      }
      &__paragraph-wrapper {
        padding-left: 60px;
        width: 40%;
        display: flex;
        align-items: center;
        .icon {
          margin-right: 14px;
        }
      }
    }
  }
}
</style>
