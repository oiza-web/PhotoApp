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
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Toast } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import NavBar from "./components/NavBar.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterSection,
  },
  mounted() {
     //inti toast
     Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))}
};
</script>

<style></style>
