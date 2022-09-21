<template>
  <div class="square-tags square-tags__grid-component">
    <div class="flex">
      <SquareTag
        v-for="(tag, index) in headerTags.tags"
        :key="`square-tag-${index}`"
        class="mt-12 mb-14"
        v-bind="tag"
        @updateColors="updateColors"
      />
    </div>
    <div ref="header-cta-section">
      <div class="flex justify-center items-center">
        <Button
          classes="square-tags__btn text-light pl-8 pr-6 pt-3 pb-2 rounded-full outline-none m__btn text-lg w-fit"
          size="lg"
          :style="`--background: linear-gradient(to right, ${currentBtnColor})`"
        />
      </div>
      <div class="mt-2 flex justify-center items-center">
        <div class="mt-2 text-sm">
          {{
            "No credit card needed &nbsp; ✦ &nbsp; Unlimited time on Free plan"
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SquareTag from "@/components/atoms/SquareTag";
import Button from "@/components/atoms/Button";
import { headerTags } from "@/data/headerTags";

export default Vue.extend({
  name: "SquareTags",
  components: { SquareTag, Button },
  data() {
    return {
      defaultBtnColor: "#5034ff 25.69%, #b4b4ff 100%",
      currentBtnColor: "#5034ff 25.69%, #b4b4ff 100%",
      selectedTagColors: new Set(),
      headerTags,
    };
  },
  methods: {
    updateColors(color: string, add = false) {
      if (add) {
        this.selectedTagColors.add(color);
      } else {
        this.selectedTagColors.delete(color);
      }
      this.updateCurrentColor();
    },
    updateCurrentColor() {
      if (this.selectedTagColors.size > 0) {
        const colors: string[] = [];
        let i = 0;
        const gperc = 100 / (this.selectedTagColors.size - 1);
        this.selectedTagColors.forEach((color) => {
          if (this.selectedTagColors.size > 1) {
            colors.push(`${color} ${i * gperc}%`);
          } else {
            colors.push(`${color} 0%, ${color} 100%`);
          }
          i++;
        });
        this.currentBtnColor = colors.join(", ");
        return;
      }
      this.currentBtnColor = this.defaultBtnColor;
    },
  },
});
</script>

<style scoped lang="scss">
.square-tags {
  &__grid-component {
    display: grid;
    align-items: center;
    justify-content: center;
  }
  &__btn {
    background-image: var(--background);
  }
  .cluster {
    &--selected {
      animation: breatheOut 0.3s linear;
    }
    @keyframes breatheOut {
      from {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }
}
</style>
