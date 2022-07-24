<template>
  <div v-if="reRenderStars && starData" class="star-canvas">
    <slot name="additional" />
    <div
      v-for="i in starData.amount"
      :key="i"
      class="universe-star"
      :style="`
            --star-size: ${randBetween(starData.size.min, starData.size.max)}px;
            --star-duration: ${randBetween(
              starData.duration.min,
              starData.duration.max
            )}s;
            --star-left: ${randBetween(0, starData.maxPosition.x, false)}px;
            --star-top: ${randBetween(0, starData.maxPosition.y)}px;`"
    />
  </div>
</template>

<script>
import debounce from "debounce";

export default {
  name: "TwinkleStars",
  props: {
    starData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      reRenderStars: false,
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener("resize", debounce(this.onResize, 200, false));
  },
  methods: {
    randBetween(min = 0, max = 100, isFull = false) {
      if (isFull && process.client) {
        max = window.innerWidth;
      }
      const diff = max - min;
      let rand = Math.random();
      rand = Math.floor(rand * diff);
      return rand + min;
    },
    onResize() {
      if (process.client) {
        this.reRenderStars = false;
        this.$nextTick(() => {
          this.reRenderStars = true;
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.star-canvas {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
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
    85% {
      width: var(--star-size);
      height: var(--star-size);
    }
    100% {
      width: var(--star-size);
      height: var(--star-size);
    }
  }
}
</style>
