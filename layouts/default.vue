<template>
  <div>
    <Navigation />
    <main id="main-body">
      <Nuxt />
    </main>
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
