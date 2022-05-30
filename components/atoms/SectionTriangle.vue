<template>
  <div class="triangle top"></div>
</template>

<script>
export default {
  name: "SectionTriangle",
};
</script>

<style scoped lang="scss">
.triangle {
  border-bottom: 13.9173vw solid rgb(255, 255, 255);
  position: absolute;
  z-index: 2;
  pointer-events: none;
  @media (max-width: 1280px) {
    display: none;
  }
  &.top {
    width: 0;
    height: 0;
    margin-top: -13.9vw;
    border-right: 100vw solid transparent;
  }
}
</style>
