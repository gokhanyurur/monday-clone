<template>
  <div class="scroll-parallax bg-darkest-blue text-light">
    <div class="m__container">
      <div class="flex scroll-parallax__wrapper">
        <div class="paragraphs">
          <div
            v-for="(item, index) in paragraphs"
            :key="item.title"
            class="scroll-parallax__item-wrapper"
          >
            <h2 class="core-title mb-4" v-html="item.title" />
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
            <div class="parallax-galaxy">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../atoms/Button.vue";
import { getImgUrl } from "~/utils/helpers";

export default {
  name: "ScrollParallax",
  components: { Button },
  data() {
    return {
      paragraphs: [
        {
          title: "Streamline your work for <b>maximum productivity</b>",
          description:
            "Centralize all your work, processes, tools, and files into one Work OS. Connect teams, bridge silos, and maintain one source of truth across your organization.",
          feedback: {
            imgPath: "jane.png",
            comment:
              "“We use monday.com for a plethora of use cases, the opportunities this platform provides are limitless.“",
            name: "Jane Tham",
            position: "VP of Collaboration Technologies",
            company: "Universal Music Group",
          },
        },
        {
          title: "Bring teams together to <b>drive business impact</b>",
          description:
            "Collaborate effectively organization-wide to get a clear picture of all your work. Stay in the loop with easy-to-use automations and real-time notifications.",
          feedback: {
            imgPath: "sarah.png",
            comment:
              "“Since adopting monday.com, our global marketing department has seen a 40% improvement in cross-team collaboration.“",
            name: "Sarah Pharr",
            position: "AVP Marketing",
            company: "Genpact",
          },
        },
        {
          title: "Stay on track to <b>reach your goals, faster</b>",
          description:
            "Get a high-level overview of your organization with customizable dashboards. Make confident decisions and easily scale workflows for your evolving needs.",
          button: {
            label: "Get Started",
            url: "#",
          },
          feedback: {
            imgPath: "baptiste.png",
            comment:
              "“monday.com allows banks to be synchronized between the top-level management figures and local KPIs.“",
            name: "Baptiste Ancey",
            position: "Head of Innovation",
            company: "Indosuez Wealth Management",
          },
        },
      ],
    };
  },
  methods: {
    getImgUrl,
  },
};
</script>

<style scoped lang="scss">
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
    widows: 72px;
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
}
</style>
