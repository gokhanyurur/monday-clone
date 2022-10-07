<template>
  <div class="triangle" :class="`border-bottom-${color} ${position}`"></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SectionTriangle",
  props: {
    color: {
      type: String,
      default: "light",
    },
    position: {
      type: String,
      default: "top",
    },
  },
});
</script>

<style scoped lang="scss">
.triangle {
  border-bottom-style: solid;
  border-bottom-width: 13.9173vw;
  position: absolute;
  z-index: 2;
  pointer-events: none;
  @include media-breakpoint-down("lg") {
    display: none;
  }
  &.top {
    width: 0;
    height: 0;
    margin-top: -13.9vw;
    border-right: 100vw solid transparent;
  }
  &.bottom {
    width: 0;
    height: 0;
    margin-top: -13.9vw;
    border-right: 100vw solid transparent;
    bottom: 0;
  }
}
</style>
