<template>
  <a :href="url" class="px-2 py-4 mr-4 flex m__dropdown__item">
    <div class="mr-4">
      <img
        class="m__dropdown__section__svg-icon"
        :src="getImgUrl(icon)"
        :alt="title"
        width="30px"
        height="30px"
      />
    </div>
    <div class="dropdown-item-content">
      <div class="flex">
        <span class="font-bold text-dark">{{ title }}</span>
        <div v-if="badgeTxt !== undefined" class="ml-2">
          <span
            v-if="badgeTxt.trim() !== ''"
            class="bg-light-blue text-dark text-xs py-1 px-2 rounded-sm"
            >{{ badgeTxt }}</span
          >
        </div>
      </div>
      <span>
        <div class="mt-1 text-sm m__dropdown__section__page__desc">
          {{ description }}
        </div>
      </span>
    </div>
  </a>
</template>

<script>
export default {
  name: "DropdownItem",
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "#",
    },
    badgeTxt: {
      type: String,
      default: undefined,
    },
  },
  methods: {
    getImgUrl(icon) {
      return require("@/assets/icons/" + icon);
    },
  },
};
</script>

<style scoped lang="scss">
.dropdown-item-content {
  max-width: 235px;
}
</style>
