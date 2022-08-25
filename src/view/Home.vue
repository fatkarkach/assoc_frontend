<template>
<Navbar></Navbar>
  <Header></Header>
  <!-- Page section example for content below the video header -->
<servicecards></servicecards>
<sliderassoc></sliderassoc>

  <!-- Page section example for content below the video section -->
  <!-- c'est la partie des postes  -->
  <posts></posts>
  <!-- c'est la partie des about  -->
  <aboutus></aboutus>

  <Footer></Footer>
</template>

<script>
import Navbar from "../components/Navbar";
import Header from "@/components/Header";
import sliderassoc from "@/components/sliderassoc";
import Footer from "@/components/Footer";
import posts from "@/components/posts";
import servicecards from "@/components/servicecards";
import aboutus from "@/components/aboutus";
export default {
  name: `Home`,
  components: {
    Navbar,
    Header,
    sliderassoc,
    Footer,
    posts,
    servicecards,
    aboutus,

  },

}
</script>
<style scoped>


</style>