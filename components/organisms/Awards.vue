<template>
  <div class="awards-section">
    <div class="awards-section__desktop">
      <div class="flex justify-center mb-6">
        <img
          class="awards-section__stars"
          :src="getImgUrl('stars.png', '/awards')"
          alt="Stars icon"
        />
      </div>
      <div>
        <h2 class="core-title sm text-center mb-4">
          <span>{{ "An" }}</span> <b>{{ "award-winning" }}</b
          >{{ " platform." }} <b>{{ "Loved" }}</b> {{ "by customers." }}
        </h2>
        <p class="text-xl text-center">
          {{ "Based on 10,000+ customer reviews." }}
        </p>
      </div>
      <div class="awards-section__cards-wrapper relative">
        <SectionTriangle color="darkest-blue" position="bottom" />
        <Card
          v-for="(card, index) in data"
          :key="`awards-card-${index}`"
          type="card"
        >
          <template #content>
            <div class="awards-section__card-img-wrapper mb-4">
              <img
                class="awards-section__card-img"
                :src="getImgUrl(card.logoPath, '/awards')"
                :alt="card.title"
              />
            </div>
            <p class="awards-section__card-title text-center mb-6">
              {{ card.title }}
            </p>
            <p class="awards-section__card-subtitle text-center">
              {{ card.review }}
            </p>
          </template>
        </Card>
      </div>
      <div class="text-center text-light pt-20 pb-16 bg-darkest-blue">
        <div class="m__container">
          <h2 class="core-title sm mb-4">
            {{ "Deliver your best work" }} <b>{{ "with monday.com" }}</b>
          </h2>
          <p class="paragraph-body">
            {{ "No credit card needed    ✦   Unlimited time on Free plan" }}
          </p>
          <Button
            classes="bg-main-blue text-light pl-6 pr-5 pt-2 pb-2 rounded-full outline-none m__btn w-fit mt-8"
            size="lg"
          />
        </div>
      </div>
      <img
        class="awards-section__gradient-end"
        :src="getImgUrl('gradient.png', '/awards')"
        alt="Gradient end"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "../atoms/Button.vue";
import SectionTriangle from "../atoms/SectionTriangle.vue";
import { getImgUrl } from "~/utils/helpers";
import { awardsData } from "@/data/awards";
import Card from "~/components/molecules/Card.vue";

export default Vue.extend({
  name: "Awards",
  components: { Button, Card, SectionTriangle },
  data() {
    return {
      data: awardsData.data,
    };
  },
  methods: {
    getImgUrl,
  },
});
</script>

<style scoped lang="scss">
.awards-section {
  &__desktop {
    display: none;
    @include media-breakpoint-up(lg) {
      display: block;
      padding-top: 80px;
    }
  }
  &__stars {
    max-height: 32px;
  }
  &__cards-wrapper {
    display: flex;
    justify-content: center;
  }
  &__card {
    &-img {
      max-width: 206px;
      max-height: 100px;
      margin: auto;
      &-wrapper {
        height: 100px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        align-items: center;
      }
    }
    &-title {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.5px;
      font-weight: 600;
      margin-bottom: 24px;
      min-height: 64px;
    }
    &-subtitle {
      font-size: 18px;
      line-height: 24px;
    }
  }
  .bg-darkest-blue {
    background-color: #060646 !important;
  }
  ::v-deep .triangle {
    border-bottom-color: #060646;
  }
}
</style>
