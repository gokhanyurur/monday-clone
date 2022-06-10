<template>
  <a :href="url" class="lg:px-2 lg:py-4 lg:mr-4 flex m__dropdown__item">
    <div v-if="icon !== null" class="mr-4">
      <img
        class="m__dropdown__section__svg-icon"
        :src="getImgUrl(icon, '/icons')"
        :alt="title"
        width="30px"
        height="30px"
      />
    </div>
    <div class="dropdown-item-content">
      <div class="flex dropdown-item-content__title__wrapper">
        <span class="text-light dropdown-item-content__title text-dark">{{
          title
        }}</span>
        <div v-if="badgeTxt !== null" class="ml-2">
          <span
            v-if="badgeTxt.trim() !== ''"
            class="bg-light-blue text-dark text-xs py-1 px-2 rounded-sm"
            >{{ badgeTxt }}</span
          >
        </div>
      </div>
      <span v-if="description !== null">
        <div class="mt-1 text-sm m__dropdown__section__page__desc">
          {{ description }}
        </div>
      </span>
    </div>
  </a>
</template>

<script>
import { getImgUrl } from "~/utils/helpers";

export default {
  name: "DropdownItem",
  props: {
    icon: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      default: "#",
    },
    badgeTxt: {
      type: String,
      default: null,
    },
  },
  methods: {
    getImgUrl,
  },
};
</script>

<style scoped lang="scss">
.dropdown-item-content {
  max-width: 235px;
  &__title {
    @media (min-width: 1280px) {
      font-weight: 700;
    }
    &__wrapper {
      @media (max-width: 900px) {
        height: 100%;
        justify-items: center;
        align-items: center;
      }
    }
  }
}
</style>
