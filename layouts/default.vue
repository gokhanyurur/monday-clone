<template>
  <div>
    <Navigation />
    <main id="main-body">
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "@/components/organisms/Navigation";

export default Vue.extend({
  name: "Default",
  components: { Navigation },
});
</script>

<style lang="scss" scoped></style>
