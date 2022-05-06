<template>
  <div>
    <Header />
    <TrustBadges />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/organisms/Header.vue";
import TrustBadges from "~/components/molecules/TrustBadges.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { TrustBadges, Header },
});
</script>
