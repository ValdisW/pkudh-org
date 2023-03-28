<template>
  <div class="page-404">
    <Nav />
    <main>哈哈哈哈哈哈哈哈哈你迷路了好像</main>
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Layout",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style lang="less" scoped>
.page-404 {
  main {
    min-height: 100vh;
  }
}
</style>
