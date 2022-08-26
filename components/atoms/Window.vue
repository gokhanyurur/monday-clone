<template>
  <div :class="classes">
    <div class="window-mask">
      <div class="window-header">
        <div class="circle-wrapper">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Window",
  props: {
    classes: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.window-mask {
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0px 8px 24px rgba(29, 140, 242, 0.5));
  .window-header {
    display: flex;
    height: 15px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background: rgba(255, 255, 255, 0.4);
    .circle-wrapper {
      display: flex;
      align-items: center;
      margin-left: 8px;
      .circle {
        background: get-color("light");
        height: 5px;
        width: 5px;
        border-radius: 50%;
        margin-right: 4px;
      }
    }
  }
  .window-content {
    .asset-inner {
      .video-component {
        video {
          border-top-left-radius: 0 !important;
          border-top-right-radius: 0 !important;
        }
      }
    }
  }
}
</style>
