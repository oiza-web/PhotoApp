<template>
  <div>
    <NavBar />
    <ErrorToast
       />
    <router-view />
    <FooterSection />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterSection,
  },
};
</script>

<style></style>
