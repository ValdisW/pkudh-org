<template>
  <!-- 在md中指定页面的渲染 -->
  <div class="plain-container">
    <Nav />
    <main>
      <h1 class="title" v-text="$page.title"></h1>

      <!-- 封面图 -->
      <Content class="plain-content" />
    </main>
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
