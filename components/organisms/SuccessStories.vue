<template>
  <div class="success-stories m__container">
    <div class="success-stories__desktop">
      <div class="success-stories__left-col">
        <h2 class="success-stories__title core-title lg">
          <span>{{ "See how" }}</span>
          <br />
          <span> {{ "our customers" }}</span>
          <b>{{ "drive impact" }}</b>
        </h2>
        <Button
          size="base"
          classes="text-main-blue text-base outline-none m__btn m__link mb-4 w-fit mt-8"
          text="Read more success stories"
        />
      </div>
      <div class="success-stories__right-col">
        <div class="success-stories__content-and-indicators">
          <div class="success-stories__wrapper">
            <div
              v-for="(storyCard, index) in data"
              :key="`story-card-${index}`"
              class="success-stories__story"
              :class="{
                selected: index === activeStory,
              }"
            >
              <div class="flex story-text-wrapper">
                <span class="success-stories__quotation-mark text-2xl">{{
                  "“"
                }}</span>
                <span class="text-2xl success-stories__story-text">
                  {{ storyCard.quoteText }}</span
                >
              </div>
              <div>
                <div>{{ storyCard.nameAndJob }}</div>
                <img
                  v-if="storyCard.authorLogoPath"
                  class="success-stories__author-logo pt-4"
                  :src="getImgUrl(storyCard.authorLogoPath, '/success-stories')"
                  :alt="storyCard.nameAndJob"
                />
              </div>
            </div>
          </div>
          <div class="indicators flex">
            <div
              v-for="index in data.length"
              :key="index"
              style="padding: 4.5px"
            >
              <div
                class="indicator"
                :class="{
                  selected: index - 1 === activeStory,
                }"
                @click="() => (activeStory = index - 1)"
              ></div>
            </div>
          </div>
        </div>
        <div class="success-stories__author-img-wrapper">
          <img
            v-if="activeStory >= 0"
            class="success-stories__author-img"
            :src="
              getImgUrl(data[activeStory].authorPhotoPath, '/success-stories')
            "
            :alt="data[activeStory].nameAndJob"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "../atoms/Button.vue";
import { successStoriesData } from "@/data/successStories";
import { getImgUrl } from "~/utils/helpers";

export default Vue.extend({
  name: "SuccessStories",
  components: { Button },
  data() {
    return {
      data: successStoriesData.data,
      activeStory: -1,
    };
  },
  mounted() {
    this.cycleStories();
  },
  methods: {
    getImgUrl,
    cycleStories(): void {
      if (this.activeStory >= this.data.length - 1) {
        this.activeStory = 0;
      } else {
        this.activeStory++;
      }
      setTimeout(this.cycleStories, 10000);
    },
  },
});
</script>

<style scoped lang="scss">
.success-stories {
  &__desktop {
    padding: 0 95px;
    align-items: center;
    display: none;
    @include media-breakpoint-up(lg) {
      display: flex;
    }
  }
  &__left-col {
    width: 40%;
    padding-right: 60px;
    padding-bottom: 100px;
  }
  &__right-col {
    width: 60%;
    position: relative;
    margin-right: 80px;
  }
  &__title {
    b {
      display: block;
    }
  }
  &__quotation-mark {
    margin-left: -5px;
  }
  &__wrapper {
    height: 320px;
    background: linear-gradient(
      180deg,
      get-color("main-blue") 0%,
      get-color("main-blue") 25%,
      get-color("tab-blue") 100%
    );
    border-radius: 16px;
  }
  &__author-img {
    max-width: 200px;
    max-height: 200px;
    height: auto;
    width: auto;
    margin: 0 auto;
    border-radius: 16px;
    &-wrapper {
      position: absolute;
      bottom: -95px;
      right: -120px;
    }
  }
  &__author-logo {
    max-height: 54px;
    width: auto;
  }
  .indicators {
    justify-content: center;
    margin-top: 24px;
    .indicator {
      border: 1px solid;
      width: 11px;
      height: 11px;
      border-radius: 8px;
      cursor: pointer;
      transform: scale(1);
      transition: 0.3s;
      &:hover {
        transform: scale(1.3);
      }
      &.selected {
        border: 1px solid get-color("main-blue");
        background: get-color("main-blue");
      }
    }
  }
  &__story {
    position: absolute;
    color: get-color("light");
    height: inherit;
    background: inherit;
    border-radius: inherit;
    padding: 44px;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
    &.selected {
      visibility: visible;
      opacity: 1;
    }
    &-text {
      letter-spacing: -0.5px;
      line-height: 36px;
    }
    .story-text-wrapper {
      margin-top: 34px;
      margin-bottom: 34px;
    }
    &:last-child {
      .story-text-wrapper {
        margin-top: 16px;
        margin-bottom: 16px;
      }
    }
  }
  ::v-deep .m__link {
    &:before {
      border-color: rgba(108, 108, 255, 0.4);
    }
    &:after {
      border-color: get-color("main-blue");
    }
  }
}
</style>
