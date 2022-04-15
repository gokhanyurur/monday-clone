<template>
  <div class="pt-16 m__header bg-darker-blue-gradient text-light relative">
    <div class="m__container">
      <div class="m__header__star-canvas">
        <div class="comet-line" />
        <div
          v-for="i in 18"
          :key="i"
          class="universe-star"
          :style="`
            --star-size: ${randBetween(3, 10)}px;
            --star-duration: ${randBetween(1, 3)}s;
            --star-left: ${randBetween(0, 1920, true)}px;
            --star-top: ${randBetween(0, 660)}px;`"
        />
      </div>
      <div class="m__header__title text-center">
        <h1 class="pb-3 pt-9 mb-4">
          {{ "A platform built for a new way of working" }}
        </h1>
        <h2>{{ "What would you like to manage with monday.com Work OS?" }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    randBetween(min = 0, max = 100, isWidth = false) {
      if (isWidth && process.client) {
        max = window.innerWidth;
      }
      const diff = max - min;
      let rand = Math.random();
      rand = Math.floor(rand * diff);
      return rand + min;
    },
  },
};
</script>

<style scoped lang="scss">
.m__header {
  min-height: 664px;
  background: linear-gradient(rgb(0, 1, 51) 0%, rgb(15, 16, 72) 100%);
  &__star-canvas {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    .comet-line {
      transform: rotate(0deg);
      width: 105px;
      top: 340px;
      left: calc(50% - 90px);
      background: linear-gradient(90deg, transparent, #fff);
      position: absolute;
      height: 1px;
    }
    .universe-star {
      position: absolute;
      background-image: url(https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/star.svg);
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 50%;
      animation: resize var(--star-duration) infinite ease-in-out;
      animation-direction: alternate;
      transform: translateX(-50%) translateY(-50%);
      left: var(--star-left);
      top: var(--star-top);
    }
    @keyframes resize {
      from {
        width: 0;
        height: 0;
      }
      to {
        width: var(--star-size);
        height: var(--star-size);
      }
    }
  }
  &__title {
    max-width: 752px;
    margin-left: auto;
    margin-right: auto;
    h1 {
      font-size: 80px;
      line-height: 85px;
      font-weight: 400;
      background: linear-gradient(360deg, #ffffff 53.95%, #0b0b4a 207.37%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      font-size: 24px;
      font-weight: 300;
      line-height: 40px;
    }
  }
}
</style>
