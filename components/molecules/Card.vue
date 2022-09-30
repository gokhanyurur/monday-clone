<template>
  <div :class="type">
    <slot name="content" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Card",
  props: {
    type: {
      type: String,
      default: "product-card",
    },
  },
});
</script>

<style scoped lang="scss">
.card,
.product-card {
  margin-top: 32px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: get-color("light");
  border-radius: 8px;
  color: get-color("dark");
  position: relative;
  box-shadow: 0px 8px 24px 0 rgb(29 140 242 / 16%);
  &:hover {
    box-shadow: 0px 8px 24px 0 rgb(29 140 242 / 32%);
  }
}
.card {
  padding: 32px;
}
.product-card {
  padding: 32px 24px;
  padding-bottom: 32px;
  width: 286px;
}
</style>
