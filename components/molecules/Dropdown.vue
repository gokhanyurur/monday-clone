<template>
  <div>
    <template>
      <a
        href="#"
        :class="[classes, { 'text-dark-blue': isOpened }]"
        class="cursor-pointer flex justify-center items-center"
        @click="handleClick"
      >
        <span>
          <slot />
        </span>
        <span class="pl-2">
          <svg
            width="8"
            height="8"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            class="m__dropdown__icon"
            :class="{ 'm__dropdown__icon--rotate': isOpened }"
          >
            <path
              d="M0 66.73c0 2.66.981 5.33 2.955 7.41l117.332 123.323a10.64 10.64 0 0 0 7.712 3.314c2.912 0 5.696-1.19 7.712-3.314L253.043 74.14c4.074-4.278 3.914-11.077-.331-15.163a10.627 10.627 0 0 0-15.083.333L128 174.536 18.379 59.32c-4.075-4.279-10.827-4.429-15.083-.343A10.76 10.76 0 0 0 0 66.73z"
              fill-rule="nonzero"
            ></path>
          </svg>
        </span>
      </a>
    </template>
    <template>
      <span
        class="m__dropdown__content pt-6 pb-6"
        :class="!isOpened ? 'hidden' : ''"
      >
        <slot name="content" />
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    classes: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
      default: "#000",
    },
    title: {
      type: String,
      default: "",
    },
    isOpened: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleClick() {
      const data = {
        title: this.title,
        isOpened: !this.isOpened,
      };
      this.$emit("updateVisibility", data);
    },
  },
};
</script>

<style scoped></style>
