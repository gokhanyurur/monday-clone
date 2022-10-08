<template>
  <div class="language-picker">
    <div
      class="language-picker__input-wrapper"
      :class="{ open: isOpened }"
      @click="togglePicker()"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="earth-icon"
      >
        <path
          d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"
          stroke="#323338"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M7.831 18.737C6.613 16.95 5.8 13.707 5.8 10c0-3.706.813-6.951 2.031-8.737M1 10h18M2.386 14.8h15.229M2.386 5.2h15.229M12.169 1.263C13.386 3.05 14.2 6.293 14.2 10c0 3.706-.813 6.951-2.031 8.737"
          stroke="#323338"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <div class="language-picker__active-language">
        {{ languages[0].language }}
      </div>
      <svg
        width="10"
        height="10"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        class="language-picker__arrow-icon"
        :class="{ 'language-picker__arrow-icon--rotate': isOpened }"
      >
        <path
          d="M0 66.73c0 2.66.981 5.33 2.955 7.41l117.332 123.323a10.64 10.64 0 0 0 7.712 3.314c2.912 0 5.696-1.19 7.712-3.314L253.043 74.14c4.074-4.278 3.914-11.077-.331-15.163a10.627 10.627 0 0 0-15.083.333L128 174.536 18.379 59.32c-4.075-4.279-10.827-4.429-15.083-.343A10.76 10.76 0 0 0 0 66.73z"
          fill-rule="nonzero"
        ></path>
      </svg>
    </div>
    <div class="language-picker__dropdown-wrapper" :class="{ open: isOpened }">
      <div class="language-picker__dropdown">
        <div
          v-for="(language, index) in languages"
          :key="`language-picker-${index}`"
          class="language-picker__item-wrapper"
          @click="() => (isOpened = false)"
        >
          <div
            class="language-picker__item"
            :class="{ selected: language.language == languages[0].language }"
          >
            <div class="language-picker__item-label">
              {{ language.language }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Language } from "~/data/footer";
import { getImgUrl } from "~/utils/helpers";

export default Vue.extend({
  name: "LanguagePicker",
  props: {
    languages: {
      required: true,
      type: Array as () => Language[],
      default: undefined,
    },
  },
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    getImgUrl,
    togglePicker(): void {
      this.isOpened = !this.isOpened;
    },
  },
});
</script>

<style scoped lang="scss">
.language-picker {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  &__active-language {
    margin-left: 8px;
    margin-right: 8px;
    font-size: 14px;
  }
  &__input-wrapper {
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
    &.open {
      color: get-color("main-blue");
      .earth-icon,
      .language-picker__arrow-icon {
        filter: invert(50%) sepia(86%) saturate(3382%) hue-rotate(220deg)
          brightness(97%) contrast(109%);
      }
    }
  }
  &__dropdown {
    height: 208px;
    width: 344px;
    border-radius: 4px;
    background-color: get-color("light");
    padding: 4px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    box-shadow: 0px 2px 20px rgb(0 0 0 / 10%);
    color: get-color("light-dark");
    &-wrapper {
      position: absolute;
      top: -216px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 200ms ease;
      user-select: none;
      &.open {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  &__item {
    height: 32px;
    width: 104px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 0px 8px;
    cursor: pointer;
    user-select: none;
    &.selected {
      background-color: get-color("lightest-blue");
      color: get-color("main-blue");
    }
    &:not(&.selected) {
      &:hover {
        background-color: get-color("lightest-gray");
      }
    }
    &-wrapper {
      margin: 4px;
    }
    &-label {
      font-size: 14px;
    }
  }
  &__arrow-icon {
    overflow: hidden;
    transition-duration: 0.2s;
    transition-property: transform;
    &--rotate {
      transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
    }
  }
}
</style>
