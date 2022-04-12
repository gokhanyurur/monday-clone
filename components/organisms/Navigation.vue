<template>
  <header v-click-outside="onClickOutside" class="z-50 fixed top-0 w-full">
    <div class="m__nav hidden lg:block with-shadow">
      <div class="m__container flex">
        <Logo />
        <nav class="m__nav__wrapper">
          <div class="flex float-right h-full items-center pl-8">
            <Button
              classes="bg-main-blue text-light px-4 py-2 rounded-full outline-none m__btn"
            />
          </div>
          <div class="flex float-right h-full items-center">
            <a
              v-for="(navItem, navRightIndex) in navMenuItems.navRightSide"
              :key="`nav-right-${navRightIndex}`"
              :href="navItem.url"
              class="px-4 m__nav__item"
              >{{ navItem.title }}</a
            >
          </div>
          <div class="flex h-full items-center">
            <div
              v-for="(navItem, index) in navMenuItems.navLeftSide"
              :key="`nav-item-${index}`"
            >
              <Dropdown
                v-if="navItem.isDropdown"
                classes="px-4 m__nav__item"
                :is-opened="navItem.isOpened"
                :title="navItem.title"
                @updateVisibility="handleDropdownVisibility"
              >
                {{ navItem.title }}
                <template #content>
                  <div class="m__container">
                    <div class="grid grid-cols-4 gap-4">
                      <div
                        v-for="(section, sectionIndex) in navItem.sections"
                        :key="`nav-section-${sectionIndex}`"
                        class="m__dropdown__section mr-6"
                        :class="section.wide ? 'col-span-2' : ''"
                      >
                        <h4 class="font-black">{{ section.title }}</h4>
                        <div
                          class="mt-3 mb-4"
                          :class="
                            section.wide
                              ? 'm__dropdown__section__item__wrapper--col-2'
                              : ''
                          "
                        >
                          <DropdownItem
                            v-for="(
                              dropdownItem, dropdownItemKey
                            ) in section.items"
                            :key="`dropdown-item${dropdownItemKey}`"
                            :icon="dropdownItem.icon"
                            :title="dropdownItem.title"
                            :description="dropdownItem.description"
                            :url="dropdownItem.url"
                            :badge-txt="dropdownItem.badgeTxt"
                          />
                        </div>
                        <Button
                          v-if="section.seeMore"
                          classes="text-light-dark text-sm outline-none m__btn m__link mb-4"
                          :text="section.seeMore.text"
                        />
                      </div>
                    </div>
                  </div>
                </template>
              </Dropdown>
              <a v-else :href="navItem.url" class="px-4">{{ navItem.title }}</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="m__nav block lg:hidden">
      <div class="flex px-8">
        <Logo />
        <nav class="m__nav__wrapper flex grow justify-end">
          <div class="flex justify-center items-center">
            <div
              class="m__hamburger-menu"
              :class="mobileOpen ? 'open' : ''"
              @click="toggleMobileNav"
            >
              <span class="m__hamburger-menu__line"></span>
              <span class="m__hamburger-menu__line"></span>
              <span class="m__hamburger-menu__line"></span>
              <span class="m__hamburger-menu__line"></span>
            </div>
          </div>
        </nav>
      </div>
      <div v-if="mobileOpen" class="m__nav__mobile__content">
        <div
          v-for="(navItem, index) in navMenuItems.navLeftSide"
          :key="`nav-item-${navItem.title}-${index}`"
          style="border-bottom: 1px solid #f1f1f1"
        >
          <Dropdown
            v-if="navItem.isDropdown"
            classes="text-xl font-light m__nav__item"
            :is-opened="navItem.isOpened"
            :title="navItem.title"
            @updateVisibility="handleDropdownVisibility"
          >
            {{ navItem.title }}
            <template #content>
              <div
                v-for="(section, sectionIndex) in navItem.sections"
                :key="`nav-section-${sectionIndex}`"
                class="m__dropdown__section ml-3 mb-9"
              >
                <h4
                  class="font-black py-3"
                  style="border-bottom: 1px solid #f1f1f1"
                >
                  {{ section.title }}
                </h4>
                <div class="lg:mt-3 lg:mb-4">
                  <DropdownItem
                    v-for="(dropdownItem, dropdownItemKey) in section.items"
                    :key="`dropdown-item-mobile-${dropdownItemKey}`"
                    :title="dropdownItem.title"
                    :url="dropdownItem.url"
                    :badge-txt="dropdownItem.badgeTxt"
                  />
                </div>
              </div>
            </template>
          </Dropdown>
          <a
            v-else
            :href="navItem.url"
            class="text-xl font-light m__nav__item flex"
          >
            <span>
              {{ navItem.title }}
            </span>
          </a>
        </div>
        <div
          v-for="(navItem, index) in navMenuItems.navRightSide"
          :key="`nav-item-${navItem.title}-${index}`"
          style="border-bottom: 1px solid #f1f1f1"
        >
          <a :href="navItem.url" class="text-xl font-light m__nav__item flex">
            <span>
              {{ navItem.title }}
            </span>
          </a>
        </div>
        <div class="mt-8">
          <a href="#">
            <img
              alt="google play"
              class="w-44 mx-auto"
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/apps/google_play.png"
            />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import vClickOutside from "v-click-outside";
import Logo from "@/components/atoms/Logo";
import Button from "@/components/atoms/Button";
import Dropdown from "@/components/molecules/Dropdown";
import DropdownItem from "@/components/atoms/DropdownItem";
import { navMenuItems } from "~/data/navigationItems";

export default {
  name: "Navigation",
  components: { Dropdown, Logo, Button, DropdownItem },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      mobileOpen: false,
      navMenuItems,
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobileOpen = !this.mobileOpen;
      if (this.mobileOpen) {
        this.hideBodyScroll();
      } else {
        this.addBodyScroll();
      }
    },
    hideBodyScroll() {
      document
        .getElementsByTagName("BODY")[0]
        .classList.add("m__body--hide-scroll");
    },
    addBodyScroll() {
      document
        .getElementsByTagName("BODY")[0]
        .classList.remove("m__body--hide-scroll");
    },
    onClickOutside() {
      this.navMenuItems.navLeftSide.forEach((item) => {
        item.isOpened = false;
      });
      this.removeBlurFromBody();
    },
    addBlurToBody() {
      document.getElementById("main-body").classList.add("m__body--blur");
    },
    removeBlurFromBody() {
      document.getElementById("main-body").classList.remove("m__body--blur");
    },
    handleDropdownVisibility(data) {
      this.navMenuItems.navLeftSide.forEach((item) => {
        if (item.title === data.title) {
          item.isOpened = data.isOpened;
          if (item.isOpened) {
            this.addBlurToBody();
          } else {
            this.removeBlurFromBody();
          }
        } else if (item.isDropdown && item.title !== data.title) {
          item.isOpened = false;
        }
      });
    },
  },
};
</script>
