<template>
  <div class="trust-badges m__container">
    <h2 class="text-xl lg:text-2xl text-center font-normal mb-6">
      {{ "Trusted by 152,000+ customers worldwide" }}
    </h2>
    <div class="trust-badges__desktop__container">
      <div
        v-for="(badge, index) in badges.desktopBrands"
        :key="`trusted-by-${index}-desktop`"
        class="trust-badges__img__wrapper"
      >
        <img :src="getImgUrl(badge.logo, '/trust-badges')" :alt="badge.title" />
      </div>
    </div>
    <div class="trust-badges__mobile__container">
      <div
        v-for="(badge, index) in badges.mobileBrands"
        :key="`trusted-by-${index}-mobile`"
        class="trust-badges__img__wrapper__mobile"
      >
        <img :src="getImgUrl(badge.logo, '/trust-badges')" :alt="badge.title" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { trustedBy } from "@/data/trustedBy";
import { getImgUrl } from "~/utils/helpers";

export default Vue.extend({
  name: "TrustBadges",
  data() {
    return {
      badges: trustedBy,
    };
  },
  methods: {
    getImgUrl,
  },
});
</script>

<style scoped lang="scss">
.trust-badges {
  @media (max-width: 451px) {
    padding: 30px 0 0 0;
    background: linear-gradient(
      rgb(245, 246, 248) 0%,
      rgba(245, 246, 248, 0) 67.54%
    );
  }
  @include media-breakpoint-up("lg") {
    padding-bottom: 90px;
  }
  &__desktop {
    &__container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      @include media-breakpoint-down("md") {
        display: none;
      }
      @include media-breakpoint-down("xl") {
        max-width: 768px;
        margin: auto;
      }
    }
  }
  &__mobile {
    &__container {
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      display: none;
      @include media-breakpoint-down("md") {
        display: flex;
      }
    }
  }
  &__img {
    &__wrapper {
      width: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 24px;
      padding-bottom: 24px;
      img {
        max-height: 69px;
        max-width: 118px;
      }
      &__mobile {
        padding: 12px 0;
        margin: 0 20px;
        width: 170px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-height: 69px;
          max-width: 118px;
        }
        @media (max-width: 451px) {
          width: 120px;
          margin: 0;
          padding: 0 0 25px 0;
          img {
            max-height: 50px;
            max-width: 88px;
          }
        }
      }
    }
  }
}
</style>
