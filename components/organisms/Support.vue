<template>
  <div class="support-section m__container">
    <div class="support-section__desktop">
      <div class="support-section__left-col">
        <img
          class="support-section__globe-img"
          :src="getImgUrl('support_globe.png', '/support')"
          alt="Support globe"
        />
      </div>
      <div class="support-section__right-col">
        <h2 class="support-section__title core-title md mb-4">
          <b>{{ "Supporting" }}</b>
          <span>{{ "your growth" }}</span>
          <span>{{ "every step of the way" }}</span>
        </h2>
        <p class="text-xl">
          {{
            "Our support superheroes are a click away to help you get the most out of monday.com, so you can focus on working without limits."
          }}
        </p>
        <div class="icons-wrapper flex">
          <div class="icon-wrapper">
            <img
              class="icon"
              :src="getImgUrl('phone.png', '/support')"
              alt="Phone icon"
            />
            <div class="icon-texts-wrapper block">
              <p class="title">{{ "24/7" }}</p>
              <p class="subtitle">{{ "support anytime, anywhere" }}</p>
            </div>
          </div>
          <div class="icon-wrapper">
            <img
              class="icon"
              :src="getImgUrl('heart.png', '/support')"
              alt="Heart icon"
            />
            <div class="icon-texts-wrapper block">
              <p class="title">{{ "Voted #1" }}</p>
              <p class="subtitle">{{ "Most Loved by customers on G2" }}</p>
            </div>
          </div>
          <div class="icon-wrapper">
            <img
              class="icon"
              :src="getImgUrl('fast.png', '/support')"
              alt="Fast icon"
            />
            <div class="icon-texts-wrapper block">
              <p class="title">{{ "2 hour" }}</p>
              <p class="subtitle">{{ "average response time" }}</p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div>
            <Button
              classes="bg-main-blue text-light pl-6 pr-5 pt-2 pb-2 rounded-full outline-none m__btn w-fit"
              text="Get in touch"
            />
          </div>
          <div class="flex items-center ml-6">
            <Button
              size="base"
              classes="text-main-blue text-base outline-none m__btn m__link w-fit"
              text="Visit our support center"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "../atoms/Button.vue";
import { getImgUrl } from "~/utils/helpers";

export default Vue.extend({
  name: "Support",
  components: { Button },
  methods: {
    getImgUrl,
  },
});
</script>

<style scoped lang="scss">
.support-section {
  @include media-breakpoint-up(lg) {
    padding-left: 96px;
    padding-right: 96px;
  }
  &__desktop {
    display: none;
    @include media-breakpoint-up(lg) {
      display: flex;
      padding-top: 180px;
      padding-bottom: 64px;
    }
  }
  &__left-col {
    width: 40%;
  }
  &__right-col {
    width: 60%;
    padding-left: 60px;
    .icons-wrapper {
      margin-top: 40px;
      margin-bottom: 64px;
      .icon-wrapper {
        display: flex;
        gap: 8px;
        .icon {
          max-height: 32px;
          width: auto;
        }
        .icon-texts-wrapper {
          .title {
            font-size: 26px;
            line-height: 26px;
            font-weight: 500;
          }
          .subtitle {
            font-size: 18px;
            line-height: 20px;
            margin-top: 8px;
          }
        }
      }
    }
  }
  &__globe-img {
    max-width: 500px;
  }
  &__title {
    span:last-child {
      display: block;
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
