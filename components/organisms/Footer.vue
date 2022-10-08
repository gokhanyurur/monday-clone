<template>
  <footer class="footer">
    <div class="footer__desktop m__container footer__container">
      <nav class="footer__content">
        <div class="categories-container">
          <div
            v-for="(column, index) in data.columns"
            :key="`footer-column-${index}`"
            class="footer-column"
          >
            <div
              v-for="(category, catIndex) in column.categories"
              :key="`footer-category-${index}-${catIndex}`"
              class="footer-category"
            >
              <div v-if="category.title.imgPath" class="footer-category__title">
                <img
                  :src="getImgUrl(category.title.imgPath, '/footer')"
                  :alt="category.title.alt"
                  :width="category.title.width"
                  :height="category.title.height"
                />
              </div>
              <h3 v-else class="footer-category__title">
                {{ category.title }}
              </h3>
              <div
                v-for="(link, linkIndex) in category.links"
                :key="`column-${index}-category-${catIndex}-link-${linkIndex}`"
                class="footer-category__link-wrapper"
              >
                <a :href="link.href" class="footer-category__link">
                  <span v-if="link.icon">
                    <img
                      :src="getImgUrl(link.icon.imgPath, '/footer')"
                      :alt="link.icon.alt"
                      :width="link.icon.width"
                      :height="link.icon.height"
                    /> </span
                  >{{ link.text }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="footer__bottom-bar">
        <div class="footer__bottom-bar-content-wrapper">
          <div class="footer__bottom-bar-left-col">
            <div class="language-picker-security-logos-wrapper">
              <LanguagePicker :languages="data.languages" />
              <div class="security-logos-wrapper">
                <div
                  v-for="(securityLogo, index) in data.securityLogos"
                  :key="`security-logo-${index}`"
                  class="security-logo"
                >
                  <a :href="securityLogo.href">
                    <img
                      :src="getImgUrl(securityLogo.icon.imgPath, '/footer')"
                      :alt="securityLogo.icon.alt"
                      :width="securityLogo.icon.width"
                      :height="securityLogo.icon.height"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="socials-statements-wrapper">
              <div class="socials-wrapper">
                <div
                  v-for="social in data.socials"
                  :key="`social-${social.icon.alt}`"
                >
                  <a :href="social.href">
                    <img
                      class="social-icon"
                      :src="getImgUrl(social.icon.imgPath, '/footer/socials')"
                      :alt="social.icon.alt"
                      :width="social.icon.width"
                      :height="social.icon.height"
                    />
                  </a>
                </div>
              </div>
              <div class="statements-wrapper">
                <div class="links-wrapper">
                  <div
                    v-for="link in data.statementLinks"
                    :key="`statemen-link-${link.text}`"
                    class="statement-link"
                  >
                    <a :href="link.href">
                      {{ link.text }}
                    </a>
                  </div>
                </div>
                <div class="all-rights-reserved">
                  {{ data.allRightsReserved }}
                </div>
              </div>
            </div>
          </div>
          <div class="footer__bottom-bar-right-col">
            <div class="footer__app-store-icons-wrapper">
              <a
                v-for="link in data.appStoreLinks"
                :key="`app-store-link-${link.icon.alt}`"
                :href="link.href"
              >
                <img
                  :src="getImgUrl(link.icon.imgPath, '/footer')"
                  :alt="link.icon.alt"
                  :width="link.icon.width"
                  :height="link.icon.height"
                />
              </a>
            </div>
            <div class="footer__accessibility-link-wrapper">
              <img
                class="accessibility-icon"
                :src="getImgUrl(data.accessibilityLink.icon.imgPath, '/footer')"
                :alt="data.accessibilityLink.icon.alt"
                :width="data.accessibilityLink.icon.width"
                :height="data.accessibilityLink.icon.height"
              />
              <a :href="data.accessibilityLink.href">
                {{ data.accessibilityLink.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import LanguagePicker from "../molecules/LanguagePicker.vue";
import { getImgUrl } from "~/utils/helpers";
import { footerData } from "~/data/footer";

export default Vue.extend({
  name: "Footer",
  components: { LanguagePicker },
  data() {
    return {
      data: footerData,
    };
  },
  methods: {
    getImgUrl,
  },
});
</script>

<style scoped lang="scss">
.footer {
  background-color: get-color("light");
  &__desktop {
    display: none;
    @include media-breakpoint-up(lg) {
      display: block;
    }
  }
  &__container {
    padding-top: 80px;
    padding-left: 32px;
    padding-right: 32px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    .categories-container {
      display: flex;
      flex-wrap: nowrap;
      flex-grow: 1;
      align-items: flex-start;
      .footer {
        &-column {
          flex: 1 0 auto;
          &:last-child {
            flex-grow: 0;
          }
        }
        &-category {
          margin-right: 16px;
          margin-bottom: 48px;
          &__title {
            min-height: 44px;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            color: get-color("light-dark");
            font-weight: 600;
          }
          &__link {
            font-size: 14px;
            line-height: 22px;
            color: get-color("light-dark");
            font-weight: 300;
            display: flex;
            column-gap: 8px;
            align-items: center;
            &:hover {
              color: get-color("main-blue");
            }
            &-wrapper {
              margin-bottom: 16px;
            }
          }
        }
      }
    }
  }
  &__bottom-bar {
    color: get-color("light-dark");
    &::before {
      display: block;
      content: "";
      height: 1px;
      width: 100%;
      background-color: get-color("smoke-light");
      position: relative;
    }
    &-content-wrapper {
      padding: 40px 0 48px 0;
      height: 180px;
      display: flex;
      justify-content: space-between;
    }
    &-left-col {
      display: flex;
      gap: 32px;
      height: 100%;
      .language-picker-security-logos-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .security-logos-wrapper {
          display: flex;
          .security-logo {
            margin-right: 8px;
            &:hover {
              opacity: 0.7;
            }
          }
        }
      }
      .socials-statements-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 14px;
        .socials-wrapper {
          display: flex;
          gap: 16px;
          .social-icon {
            &:hover {
              filter: invert(21%) sepia(90%) saturate(6779%) hue-rotate(250deg)
                brightness(102%) contrast(101%);
            }
          }
        }
        .statements-wrapper {
          display: flex;
          gap: 24px;
          .links-wrapper {
            display: flex;
            .statement-link {
              &:not(:last-child) {
                &:after {
                  content: " | ";
                  margin: 0 8px;
                }
              }
              a {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
    &-right-col {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
    }
  }
  &__accessibility-link-wrapper {
    display: flex;
    gap: 8px;
    font-size: 14px;
    align-items: center;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
      color: get-color("dark-blue");
      .accessibility-icon {
        filter: invert(21%) sepia(90%) saturate(6779%) hue-rotate(250deg)
          brightness(102%) contrast(101%);
      }
    }
  }
  &__app-store-icons-wrapper {
    display: flex;
    gap: 16px;
  }
}
</style>
