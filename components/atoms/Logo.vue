<template>
  <a href="/" target="_self">
    <img class="app-logo" src="~/assets/img/logo.png" alt="" />
  </a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Logo",
});
</script>

<style scoped lang="scss">
.app-logo {
  max-width: 167px;
  margin-right: 16px;
  object-fit: contain;
  height: 67px;
}
</style>
