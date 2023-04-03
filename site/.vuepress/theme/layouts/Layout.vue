<template>
  <!-- 影响全部的默认页面 -->
  <div class="plain-container">
    <Nav />
    <main>
      <h1 class="title" v-text="$page.title"></h1>
      <p class="date">
        {{
          $page.frontmatter.date
            ? new Date($page.frontmatter.date).toLocaleDateString("zh-CN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : ""
        }}
      </p>
      <!-- 封面图 -->
      <img class="cover" :src="$page.frontmatter.image" :alt="$page.frontmatter.image" />
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
  mounted() {
    console.log(this);
    console.log("this.$site", this.$site);
    console.log("this.$page", this.$page);
  },
};
</script>

<style lang="less">
html {
  font-size: 20px;
  background: #ffffff;
}
.plain-container {
  min-height: 100vh;
  main {
    width: 38.4rem;
    margin: 0 auto 4rem;
    padding: 0 1rem;

    h1.title {
      margin: 3rem 0 0;
      font-size: 1.6rem;
    }
    .date {
      color: #999;
      margin: 0.3rem 0 1rem;
      font-size: 0.7rem;
    }
    img.cover {
      width: 100%;
      display: block;
      margin: 0 0 1rem;
    }
    .plain-content {
      h1,
      h2 {
        margin: 2rem 0 1rem;
      }
      h3,
      h4,
      h5,
      h6 {
        margin: 1.4rem 0 0.7rem;
      }
      p {
        margin: 0 0 1.2rem;
        letter-spacing: 0.04rem;
        line-height: 1.5rem;
        color: #454545;
      }
      center {
        font-size: 0.7rem;
        color: #666;
        margin: 0.6rem 0;
      }
      img {
        max-width: 100%;
        margin: 0 auto;
        display: block;
      }
      table {
        font-size: 0.8rem;
        tr {
          td {
            padding: 0.3rem 0.6rem;
            color: #454545;
            letter-spacing: 0.04rem;
          }
        }
      }
      ul,
      ol {
        padding: 0 0 0 1rem;
        margin: 0 0 1.2rem;
      }
      li {
        font-size: 0.8rem;
        margin: 0.3rem 0;
        color: #454545;
        line-height: 1.5rem;
        letter-spacing: 0.04rem;
      }
    }
  }
}
</style>
