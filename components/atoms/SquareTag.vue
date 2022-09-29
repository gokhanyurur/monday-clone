<template>
  <div class="star-wrapper">
    <div
      ref="toggle-div"
      class="px-2 pt-2 pb-4 m-2 star-wrapper--border h-full cursor-pointer"
      :style="`--currentColor: ${color}`"
      @click="toggleCheck"
    >
      <div class="checkbox">
        <svg viewBox="0 0 20 20" fill="#07083d" width="20" height="20">
          <path
            d="M8.53033 14.2478L8 13.7175L7.46967 14.2478C7.76256 14.5407 8.23744 14.5407 8.53033 14.2478ZM8 12.6569L4.53033 9.18718C4.23744 8.89429 3.76256 8.89429 3.46967 9.18718C3.17678 9.48008 3.17678 9.95495 3.46967 10.2478L7.46967 14.2478L8 13.7175L8.53033 14.2478L16.2478 6.53033C16.5407 6.23743 16.5407 5.76256 16.2478 5.46967C15.955 5.17677 15.4801 5.17677 15.1872 5.46967L8 12.6569Z"
            fill="#07083d"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div v-if="imgSrc" class="star-wrapper__icon">
        <img
          :src="getImgUrl(imgSrc, '/square-tags-icons')"
          width="40"
          height="40"
          alt=""
        />
      </div>
      <div class="pt-1 text-center star-wrapper__title">{{ title }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getImgUrl } from "@/utils/helpers";

export default Vue.extend({
  name: "SquareTag",
  props: {
    title: {
      type: String,
      default: "",
    },
    imgSrc: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
  methods: {
    getImgUrl,
    toggleCheck() {
      const tag = this.$refs["toggle-div"] as HTMLElement;
      const ctaSection = this.$parent.$refs[
        "header-cta-section"
      ] as HTMLElement;
      tag.classList.toggle("active");

      if (ctaSection !== undefined) {
        tag.classList.add("cluster--selected");
        ctaSection.classList.add("cluster--selected");
        setTimeout(() => {
          tag.classList.remove("cluster--selected");
          ctaSection.classList.remove("cluster--selected");
        }, 300);

        this.$emit(
          "updateColors",
          this.color,
          tag.classList.contains("active")
        );
      }
    },
  },
});
</script>

<style scoped lang="scss">
.star-wrapper {
  width: 140px;
  position: relative;
  &__title {
    opacity: 0.85;
  }
  .cluster {
    &--selected {
      animation: breatheIn 0.3s linear;
    }
    @keyframes breatheIn {
      from {
        transform: scale(1);
      }
      50% {
        transform: scale(0.95);
      }
      100% {
        transform: scale(1);
      }
    }
  }
  .checkbox {
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.05s ease-in-out;
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }
  &--border {
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    height: calc(100% - 16px);
    &:hover,
    &.active {
      border-color: var(--currentColor);
      .checkbox {
        border-color: var(--currentColor);
      }
    }
    &.active {
      .checkbox {
        border-color: var(--currentColor);
        background-color: var(--currentColor);
      }
    }
  }
  &__icon {
    align-items: center;
    justify-content: center;
    display: flex;
  }
}
</style>
