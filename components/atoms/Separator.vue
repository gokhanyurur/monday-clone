<template>
  <div :class="classes" class="flex separator">
    <span class="separator__line" />
    <span class="separator__text">
      {{ text }}
    </span>
    <span class="separator__line" />
  </div>
</template>

<script>
export default {
  name: "Separator",
  props: {
    classes: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.separator {
  align-items: center;
  margin: 16px 0;
  &__line {
    flex-grow: 1;
    border-color: #c5c7d0;
    border-top-width: 0.5px;
    border-bottom-width: 0.5px;
    border-style: solid;
    width: 100%;
    height: 1px;
  }
  &__text {
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
    line-height: 24px;
    color: #676879;
  }
}
</style>
