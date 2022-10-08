<template>
  <div>
    <Navigation />
    <main id="main-body">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "@/components/organisms/Navigation.vue";
import Footer from "~/components/organisms/Footer.vue";

export default Vue.extend({
  name: "Default",
  components: { Navigation, Footer },
});
</script>

<style lang="scss" scoped></style>
