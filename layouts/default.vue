<template>
  <div>
    <Navigation />
    <div id="main-body">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/organisms/Navigation";

export default {
  name: "Default",
  components: { Navigation },
};
</script>

<style scoped></style>
