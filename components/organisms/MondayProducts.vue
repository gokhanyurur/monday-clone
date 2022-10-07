<template>
  <div class="monday-products-section">
    <div class="monday-products-section__desktop hidden lg:block">
      <div class="m__container">
        <div class="monday-products-section__title-wrapper">
          <img
            class="monday-products-icon"
            :src="getImgUrl('monday-products-small.png', '/monday-products')"
            alt="Monday Products Icon"
          />
          <h2 class="core-title lg">
            <b>{{ "End-to-end products " }}</b>
            {{ "to run the core of your business" }}
          </h2>
        </div>
        <p class="text-center text-xl">
          {{
            "Tailored products designed for every aspect of your teams' needs."
          }}
        </p>
        <div class="monday-products-cards-wrapper">
          <Card v-for="(card, index) in data" :key="`product-card-${index}`">
            <template #content>
              <div class="pb-8">
                <img
                  class="monday-products-card__icon"
                  :src="getImgUrl(card.logoPath, '/monday-products')"
                  :alt="card.logoPath.replace('.png', '').replace('-', ' ')"
                />
                <p class="text-sm">{{ card.logoText }}</p>
              </div>
              <div>
                <p class="monday-products-card__body">{{ card.description }}</p>
                <div
                  class="comet-line comet-line--product-card"
                  :style="`--comet-color: ${card.color}`"
                />
                <div class="monday-products-card__features-wrapper">
                  <p class="text-sm mb-3">{{ "Top use cases:" }}</p>
                  <div class="mb-5">
                    <div
                      v-for="(feature, featureIndex) in card.features"
                      :key="`feature-index-${index}-${featureIndex}`"
                      class="flex mb-1.5"
                    >
                      <img
                        class="checkmark-icon mr-1.5"
                        :src="getImgUrl('checkmark.svg', '/icons')"
                        alt="checkmark"
                        width="20px"
                        height="20px"
                        :style="`filter: ${card.checkmarkColor}`"
                      />
                      <p class="text-sm">{{ feature }}</p>
                    </div>
                  </div>
                  <div class="monday-products-card__buttons-wrapper">
                    <Button
                      classes="monday-products-card__get-started-btn rounded-full outline-none m__btn mb-3"
                    />
                    <Button
                      classes="monday-products-card__learn-more text-sm outline-none m__btn"
                      text="Learn more"
                    />
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
      <div class="monday-products__video">
        <SectionTriangle color="darkest-blue" />
        <video
          preload="auto"
          autoplay="true"
          loop="true"
          :poster="getImgUrl('products_video.png', '/video-posters')"
          style="width: 100%; height: 100%"
          muted
        >
          <source :src="getVideo('products_video.mp4')" />
        </video>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "../atoms/Button.vue";
import { mondayProductsData } from "@/data/mondayProducts";
import { getImgUrl, getVideo } from "~/utils/helpers";
import Card from "~/components/molecules/Card.vue";
import SectionTriangle from "~/components/atoms/SectionTriangle.vue";

export default Vue.extend({
  name: "MondayProducts",
  components: { Card, Button, SectionTriangle },
  data() {
    return {
      data: mondayProductsData.data,
    };
  },
  methods: {
    getImgUrl,
    getVideo,
  },
});
</script>

<style scoped lang="scss">
.monday-products {
  &-section {
    background: linear-gradient(
      rgb(240, 243, 255) 0%,
      rgba(245, 246, 248, 0) 70%
    );
    &__title-wrapper {
      max-width: 750px;
      padding-left: 32px;
      padding-right: 32px;
      text-align: center;
      margin: auto;
      margin-bottom: 16px;
    }
  }
  &-icon {
    margin: auto;
    margin-bottom: 40px;
  }
  &-cards-wrapper {
    display: flex;
  }
  &__video {
    padding-bottom: 250px;
    background-color: get-color("darkest-blue");
  }
  &-cards-wrapper {
    .product-card {
      position: relative;
    }
  }
  &-card {
    &__icon {
      max-height: 51px;
      margin-bottom: 5px;
    }
    &__text {
      color: get-color("m-gray");
    }
    &__body {
      line-height: 1.5;
      font-size: 15px;
    }
    &__get-started-btn {
      border: 1px solid get-color("dark");
      padding: 8px 14px 8px 16px;
      width: 100%;
      transition: 0.3s ease all;
      &:hover {
        box-shadow: inset 0 0 0 1px;
      }
    }
    &__learn-more {
      width: 100%;
      margin-top: 24px;
    }
  }
}
</style>
