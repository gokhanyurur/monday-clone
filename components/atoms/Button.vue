<template>
  <button
    :class="classes"
    class="relative"
    style="width: fit-content"
    @click="handlePress()"
  >
    <div class="flex justify-center items-center">
      <span class="text-sm">{{ text }}</span>
      <span class="pl-2 pr-1 icon">
        <svg
          width="10"
          height="14"
          viewBox="0 0 9 7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z"
          ></path>
        </svg>
      </span>
    </div>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    classes: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Get Started",
    },
  },
  methods: {
    handlePress() {
      console.log("clicked");
    },
  },
};
</script>

<style scoped></style>
