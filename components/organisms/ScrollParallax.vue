<template>
  <div class="scroll-parallax bg-darkest-blue text-light">
    <div class="m__container">
      <div class="flex scroll-parallax__wrapper">
        <div class="paragraphs">
          <div
            v-for="item in paragraphs"
            :key="item.title"
            class="scroll-parallax__item-wrapper"
          >
            <h2 :id="item.id" class="core-title mb-4" v-html="item.title" />
            <p class="paragraph-body">{{ item.description }}</p>
            <Button
              v-if="item.button"
              size="base"
              classes="scroll-parallax__feedback-btn rounded-full outline-none m__btn"
            />
            <div class="scroll-parallax__feedback-wrapper">
              <img
                class="scroll-parallax__feedback-image"
                :src="getImgUrl(item.feedback.imgPath, '/parallax/feedback')"
                :alt="item.title"
                width="72px"
                height="72px"
              />
              <div class="scroll-parallax__feedback-body-wrapper ml-4">
                <p class="main">{{ item.feedback.comment }}</p>
                <p class="person">
                  <span class="text">{{ item.feedback.name }}</span>
                  <span class="divider"> | </span>
                  <span class="text">{{ item.feedback.position }}</span>
                </p>
                <p class="company">{{ item.feedback.company }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="parallax">
          <div class="controller">
            <div class="parallax-galaxy stage-1-element">
              <div class="galaxy-container">
                <div class="spin-container">
                  <div class="stars relative">
                    <TwinkleStars
                      :star-data="{
                        amount: 48,
                        size: {
                          min: 3,
                          max: 20,
                        },
                        duration: {
                          min: 1,
                          max: 8,
                        },
                        maxPosition: {
                          x: 350,
                          y: 448,
                        },
                      }"
                    >
                    </TwinkleStars>
                  </div>
                  <template v-for="(element, index) in galaxyData">
                    <div
                      :key="`galaxy-circle-container-${index}`"
                      :class="`circle-container ${element.circleSize}-circle`"
                    ></div>
                    <div
                      :key="`galaxy-circle-items-${index}`"
                      :class="`items-container ${element.circleSize}-circle`"
                    >
                      <div
                        v-for="(circleItem, indexC) in element.circleItems"
                        :key="`circle-item-${indexC}`"
                        :class="`item ${circleItem.alt.toLowerCase()} ${
                          circleItem.additionalClass
                            ? circleItem.additionalClass
                            : ''
                        }`"
                      >
                        <img
                          :src="
                            getImgUrl(circleItem.imgPath, '/parallax/galaxy')
                          "
                          :alt="circleItem.alt"
                          width="63px"
                          height="68px"
                        />
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div class="asset-inner absolute stage-1-element">
              <div class="window-mask">
                <div class="window-header">
                  <div class="circle-wrapper">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                </div>
                <div class="window-content">
                  <div class="picture-component">
                    <img
                      :src="
                        getImgUrl(
                          'first_board.png',
                          '/parallax/galaxy-foreground'
                        )
                      "
                      alt="First Board"
                      width="604px"
                      height="406px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="asset-inner absolute stage-2-element fade-out">
              <div class="window-mask">
                <div class="window-header">
                  <div class="circle-wrapper">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                </div>
                <div class="content-wrapper">
                  <div class="video-component">
                    <video
                      preload="auto"
                      :poster="
                        getImgUrl('goals_dashboard.png', '/video-posters')
                      "
                      style="
                        width: 100%;
                        height: 100%;
                        border-bottom-left-radius: 8px;
                        border-bottom-right-radius: 8px;
                      "
                      muted
                    >
                      <source :src="getVideo('goals_dashboard.mp4')" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div class="asset-inner person person-1">
              <div class="picture-component">
                <img
                  :src="getImgUrl('person1.png', '/parallax/galaxy-foreground')"
                  alt="Person 1"
                  width="50px"
                  height="50px"
                />
              </div>
            </div>
            <div class="asset-inner person person-2">
              <div class="picture-component">
                <img
                  :src="getImgUrl('person2.png', '/parallax/galaxy-foreground')"
                  alt="Person 2"
                  width="50px"
                  height="50px"
                />
              </div>
            </div>
            <div class="asset-inner person person-3">
              <div class="picture-component">
                <img
                  :src="getImgUrl('person3.png', '/parallax/galaxy-foreground')"
                  alt="Person 3"
                  width="50px"
                  height="50px"
                />
              </div>
            </div>
            <div class="typed-component person person-1">
              <span class="content">
                <span class="tag">{{ "@Marketing Team" }}</span>
                <span>{{ "can you update about project progress?" }}</span>
              </span>
              <span class="typed-cursor typed-cursor--blink">{{ "|" }}</span>
            </div>
            <div class="typed-component person person-2">
              <span class="content">
                <span>{{ "We're almost done," }}</span>
                <span class="tag">{{ "@Samantha" }}</span>
                <span>{{ "can you add the file?" }}</span>
              </span>
              <span class="typed-cursor typed-cursor--blink">{{ "|" }}</span>
            </div>
            <div class="typed-component person person-3">
              <span class="content">
                <div class="text-with-pdf">
                  <div>
                    <span>{{ "I have just uploaded it!" }}</span>
                  </div>
                  <img
                    :src="getImgUrl('pdf.png', '/icons')"
                    class="pdf-icon"
                    width="70px"
                    height="79px"
                    alt="PDF"
                  />
                </div>
              </span>
              <span class="typed-cursor typed-cursor--blink">{{ "|" }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="stage-2" />
  </div>
</template>

<script>
import Button from "../atoms/Button.vue";
import TwinkleStars from "../atoms/TwinkleStars.vue";
import { getImgUrl, getVideo } from "~/utils/helpers";
import { scrollParallaxData } from "@/data/scrollParallax";

export default {
  name: "ScrollParallax",
  components: { Button, TwinkleStars },
  data() {
    return {
      paragraphs: scrollParallaxData.paragraphs,
      galaxyData: scrollParallaxData.galaxy,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      function (entries) {
        const stage1Els = document.getElementsByClassName("stage-1-element");
        const stage2Els = document.getElementsByClassName("stage-2-element");
        entries.forEach((entry) => {
          if (entry.target.id === "stage-1") {
            [...stage1Els].forEach((el) => {
              if (el.classList.contains("fade-out")) {
                el.classList.add("fade-in");
                el.classList.remove("fade-out");
                [
                  ...document.getElementsByClassName("asset-inner person"),
                ].forEach((el) => el.classList.remove("animate-to-left"));
              } else if (entry.isIntersecting) {
                el.classList.remove("fade-in");
                el.classList.add("fade-out");
                [
                  ...document.getElementsByClassName("asset-inner person"),
                ].forEach((el) => el.classList.add("animate-to-left"));
              }
            });
          } else if (entry.target.id === "stage-2") {
            [...stage2Els].forEach((el) => {
              if (el.classList.contains("fade-in")) {
                el.classList.remove("fade-in");
                el.classList.add("fade-out");
                [
                  ...document.getElementsByClassName("asset-inner person"),
                ].forEach((el) => {
                  el.classList.remove("animate-to-bottom");
                });
              } else if (entry.isIntersecting) {
                el.classList.add("fade-in");
                el.classList.remove("fade-out");
                [
                  ...document.getElementsByClassName("asset-inner person"),
                ].forEach((el) => {
                  el.classList.add("animate-to-bottom");
                });
              }
            });
          }
        });
      },
      { threshold: [1] }
    );

    observer.observe(document.querySelector("#stage-1"));
    observer.observe(document.querySelector("#stage-2"));
  },
  methods: {
    getImgUrl,
    getVideo,
  },
};
</script>

<style scoped lang="scss">
@mixin calculate-delay($n, $d, $nonSymmetric: false) {
  @for $i from 1 through $n {
    &:nth-child(#{$i}) {
      @if $nonSymmetric == true {
        animation-delay: calc(#{($i - 1) * -1} * #{$d} / #{$n * $i}) !important;
      } @else {
        animation-delay: calc(#{($i - 1) * -1} * #{$d} / #{$n}) !important;
      }
    }
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fade-out {
  animation: fade-out 0.35s ease-in;
  animation-fill-mode: forwards;
  opacity: 1;
}
.fade-in {
  animation: fade-in 0.35s ease-in;
  animation-fill-mode: forwards;
  opacity: 1;
}
.scroll-parallax {
  .m__container {
    padding-left: 96px;
    padding-right: 96px;
  }
  &__item-wrapper {
    max-width: 500px;
    &:not(:first-child) {
      margin-top: 150px;
    }
  }
  &__wrapper {
    padding-top: 128px;
    padding-bottom: 128px;
  }
  .paragraphs,
  .parallax {
    flex: 1;
  }
  .paragraphs {
    .paragraph-body {
      font-size: 20px;
      font-weight: 300;
      line-height: 32px;
    }
  }
  &__feedback-btn {
    margin-top: 32px;
    border: 1px solid #fff;
    padding: 13px 20px 12px 29px;
  }
  &__feedback-wrapper {
    margin-top: 150px;
    display: flex;
    align-items: center;
  }
  &__feedback-image {
    width: 72px;
    height: 72px;
  }
  &__feedback-body-wrapper {
    .person {
      margin-top: 8px;
      .text {
        font-size: 14px;
        font-weight: bold;
      }
    }
    .company {
      font-size: 14px;
    }
  }
  .parallax {
    .controller {
      position: sticky;
      height: 500px;
      top: calc(50% - 250px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      .parallax-galaxy {
        position: absolute;
        z-index: 0;
        transition: opacity 0.5s ease 0s;
        transform: scale(1);
        right: -150px;
        top: -125px;
        .galaxy-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 500px;
          height: 500px;
          margin: 0 auto;
          background-color: #0f1048;
          .spin-container {
            background: rgb(89, 91, 221);
            background: linear-gradient(
              75deg,
              rgba(89, 91, 221, 1) 0%,
              rgba(51, 53, 145, 1) 33%,
              rgba(16, 17, 73, 1) 66%,
              rgb(15, 16, 72) 100%
            );
            width: 448px;
            height: 448px;
            border-radius: 50%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            .stars {
              width: 100%;
              height: 100%;
            }
            .circle-container {
              position: absolute;
              background-size: cover;
              background-position: center;
              background-position-x: center;
              background-position-y: center;
              background-repeat: no-repeat;
              animation: rotate-circle var(--dur) linear infinite;
              &.small-circle {
                width: 200px;
                height: 200px;
                background-image: url("../../assets/img/parallax/galaxy/small-circle/Ellipse3.png");
              }
              &.medium-circle {
                --dur: 6s;
                width: 270px;
                height: 270px;
                background-image: url("../../assets/img/parallax/galaxy/medium-circle/Ellipse2.png");
              }
              &.large-circle {
                --dur: 15s;
                width: 350px;
                height: 350px;
                background-image: url("../../assets/img/parallax/galaxy/medium-circle/Ellipse2.png");
              }
            }
            .items-container {
              position: absolute;
              display: grid;
              place-content: center;
              .item {
                grid-area: 1/1;
                width: 63px;
                height: 68px;
              }
              &.small-circle {
                width: 200px;
                height: 200px;
                $n: 3;
                $d: 9s;
                .item {
                  animation: small-spin #{$d} linear infinite;
                  transform: rotate(0) translate(95px) rotate(0);
                  @include calculate-delay($n, $d);
                }
                @keyframes small-spin {
                  100% {
                    transform: rotate(1turn) translate(95px) rotate(-1turn);
                  }
                }
              }
              &.medium-circle {
                width: 270px;
                height: 270px;
                $n: 2;
                $d: 14s;
                .item {
                  @include calculate-delay($n, $d, true);
                  &.item-inner {
                    transform: rotate(0) translate(135px) rotate(0);
                    animation: medium-spin-inner #{$d} linear infinite;
                  }
                  &.item-outer {
                    transform: rotate(0) translate(175px) rotate(0);
                    animation: medium-spin-outer #{$d} linear infinite;
                  }
                }
                @keyframes medium-spin-inner {
                  100% {
                    transform: rotate(1turn) translate(135px) rotate(-1turn);
                  }
                }
                @keyframes medium-spin-outer {
                  100% {
                    transform: rotate(1turn) translate(175px) rotate(-1turn);
                  }
                }
              }
              &.large-circle {
                width: 350px;
                height: 350px;
                $n: 6;
                $d: 25s;
                .item {
                  @include calculate-delay($n, $d);
                  transform: rotate(0) translate(225px) rotate(0);
                  animation: large-spin #{$d} linear infinite;
                }
                @keyframes large-spin {
                  100% {
                    transform: rotate(1turn) translate(225px) rotate(-1turn);
                  }
                }
              }
            }
          }
        }
      }
      .asset-inner {
        z-index: 1;
        .window-content {
          img {
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
          }
        }
        &.person {
          width: fit-content;
          position: absolute;
          left: 203px;
          transform: scale(0.4);
          transition: 0.75s ease all;
          &.animate-to-left {
            transition: 0.75s ease all;
            transform: scale(1);
            left: 0;
          }
          &.animate-to-bottom {
            transform: scale(0.4);
            top: 394px !important;
          }
        }
        &.person-1 {
          top: 145px;
          transition: 0.75s ease all;
          &.animate-to-left {
            top: 110px;
            transition: 0.75s ease all;
          }
          &.animate-to-bottom {
            left: 344px;
          }
        }
        &.person-2 {
          top: 230px;
          transition: 0.75s ease all;
          &.animate-to-left {
            top: 195px;
            transition: 0.75s ease all;
          }
          &.animate-to-bottom {
            left: 420px;
          }
        }
        &.person-3 {
          top: 312px;
          transition: 0.75s ease all;
          &.animate-to-left {
            top: 280px;
            transition: 0.75s ease all;
          }
          &.animate-to-bottom {
            left: 490px;
          }
        }
      }
      .typed-component {
        font-size: 22px;
        &.person {
          position: absolute;
          left: 75px;
        }
        &.person-1 {
          top: 105px;
        }
        &.person-2 {
          top: 195px;
        }
        &.person-3 {
          top: 275px;
          display: flex;
        }
        .content {
          .tag {
            color: get-color("tag-blue");
          }
          .text-with-pdf {
            .pdf-icon {
              width: 70px;
              margin-left: -20px;
              margin-top: -8px;
            }
          }
        }
        .typed-cursor {
          opacity: 1;
          &--blink {
            animation: typedBlink 0.7s infinite;
          }
          @keyframes typedBlink {
            50% {
              opacity: 0;
            }
          }
        }
      }
    }
  }
}
</style>
