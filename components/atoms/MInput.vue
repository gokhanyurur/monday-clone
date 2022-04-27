<template>
  <div class="m__input__wrapper">
    <input
      class="m__input"
      type="text"
      :class="classes"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "MInput",
  props: {
    classes: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Enter your work email",
    },
  },
};
</script>

<style scoped lang="scss">
.m__input {
  margin-bottom: 10px;
  font-size: 16px;
  padding: 16px 8px;
  margin-right: 0;
  text-align: center;
  min-width: 264px;
  max-width: 305px;
  width: 100%;
  border-radius: 8px;
  background-color: #f5f5f5;
  color: #333333;
  border: 1px solid grey;
  outline: none;
  &:focus {
    background-color: #ffffff;
    &::placeholder {
      color: #0b0b4a;
    }
  }
  &__wrapper {
    margin: 8px 0;
    align-items: center;
    justify-content: center;
    display: flex;
  }
}
</style>
