<template>
  <!-- 研究平台展示-首页 -->
  <div class="projects">
    <Nav />
    <h1>项目展示</h1>
    <div class="items">
      <router-link v-for="e in projects" :style="`background-image:url(${e.frontmatter.image})`" :to="e.path">{{
        e.title
      }}</router-link>
      <a href="#"></a>
      <a href="#"></a>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "NewsIndex",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    this.projects = this.$pagination.pages;
    this.projects.sort(function (a, b) {
      return b.frontmatter.index - a.frontmatter.index;
    });
  },
};
</script>

<style lang="less" scoped>
.projects {
  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
  }
  .items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    a {
      flex: 1 1 30%;
      height: 8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-size: cover;
    }
  }
}
</style>
