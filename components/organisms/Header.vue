<template>
  <div>
    <div class="pt-16 m__header m__header__desktop text-light relative">
      <div class="m__container">
        <div v-if="reRenderStars" class="m__header__star-canvas">
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
          <h1 class="pb-2 pt-5 mb-4">
            {{ "A platform built for a new way of working" }}
          </h1>
          <h2>
            {{ "What would you like to manage with monday.com Work OS?" }}
          </h2>
        </div>
        <SquareTags />
      </div>
      <div class="m__header__image__wrapper pt-8">
        <img
          class="m__header__image"
          src="~/assets/img/header/header-img.png"
          alt=""
        />
      </div>
    </div>
    <div class="m__header__mobile px-8">
      <h1 class="font-bold mb-4">
        <span class="font-light">
          {{ "A platform built for a" }}
        </span>
        <br />
        {{ "new way of working" }}
      </h1>
      <h2 class="font-light">
        {{ "Easily build, run, and scale" }}
        <br />
        {{ "your dream workflows on one" }}
        <br />
        {{ "Work OS platform." }}
      </h2>
      <div class="mt-8 flex justify-center items-center pb-6">
        <div class="form__wrapper">
          <MInput />
          <Button
            classes="bg-main-blue text-light px-4 py-2 rounded-full outline-none m__btn w-full"
            size="base"
          />
          <div class="social-connect-section">
            <Separator text="Or" class="my-4" />
            <Button
              classes="border border-main-blue bg-light text-main-blue px-4 py-2 rounded-full outline-none m__btn w-full"
              size="base"
              text="Continue with"
              :custom-svg="true"
              :disable-animation="true"
            >
              <template #svg>
                <svg
                  viewBox="0 0 256 262"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  style="width: 24px; height: 24px; margin-left: 16px"
                >
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"
                  ></path>
                </svg>
              </template>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from "debounce";
import SquareTags from "@/components/molecules/SquareTags";
import MInput from "@/components/atoms/MInput";
import Button from "@/components/atoms/Button";
import Separator from "@/components/atoms/Separator";

export default {
  name: "Header",
  components: { SquareTags, MInput, Button, Separator },
  data() {
    return {
      reRenderStars: {
        type: Boolean,
        default: false,
      },
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener("resize", debounce(this.onResize, 200, false));
  },
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
.m__header {
  min-height: 664px;
  background: linear-gradient(rgb(0, 1, 51) 0%, rgb(12, 12, 90) 100%);
  &__desktop {
    display: none;
    @media (min-width: 1280px) {
      display: block;
    }
  }
  &__mobile {
    display: block;
    @media (min-width: 1280px) {
      display: none;
    }
    .form {
      &__wrapper {
        width: 305px;
        button {
          height: 50px;
          font-size: 16px;
        }
      }
    }
  }
  &__star-canvas {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    .comet-line {
      transform: rotate(0deg);
      width: 105px;
      top: 317px;
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
  &__title {
    max-width: 752px;
    margin-left: auto;
    margin-right: auto;
    h1 {
      font-size: 80px;
      line-height: 85px;
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
  &__mobile {
    padding-top: 24px;
    display: block;
    background-color: #fff;
    @media (min-width: 1280px) {
      display: none;
    }
    h1 {
      font-size: 32px;
      line-height: 40px;
      text-align: center;
      @media (min-width: 600px) {
        font-size: 50px;
        line-height: 60px;
      }
    }
    h2 {
      font-size: 20px;
      line-height: 32px;
      text-align: center;
    }
  }
}
</style>
