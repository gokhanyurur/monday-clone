<template>
  <button :class="classes" class="relative" @click="handlePress()">
    <div class="flex justify-center items-center">
      <span :class="`text-${size}`">{{ text }}</span>
      <span
        class="pl-2 pr-1 icon"
        :class="disableAnimation ? 'disable-animation' : ''"
        :style="`--icon-width:${sizes[size].width}px`"
      >
        <slot name="svg" />
        <svg
          v-if="!customSvg"
          :width="sizes[size].width"
          :height="sizes[size].height"
          viewBox="0 0 9 7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z"
          ></path>
        </svg>
      </span>
    </div>
  </button>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Button",
  props: {
    classes: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Get Started",
    },
    size: {
      type: String,
      default: "sm",
    },
    customSvg: {
      type: Boolean,
      default: false,
    },
    disableAnimation: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sizes: {
        sm: {
          width: 12,
          height: 10,
        },
        base: {
          width: 14,
          height: 12,
        },
        lg: {
          width: 16,
          height: 12,
        },
      },
    };
  },
  methods: {
    handlePress() {
      console.log("clicked");
    },
  },
});
</script>

<style scoped></style>
