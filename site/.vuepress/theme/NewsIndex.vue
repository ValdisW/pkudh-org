<template>
  <!-- 新闻动态-首页 -->
  <div class="news">
    <Nav />
    <h1>新闻动态</h1>

    <!-- 新闻列表 -->
    <div class="items">
      <router-link v-for="e in $pagination.pages" :key="e.key" :to="e.path">
        <div class="left">
          <p class="title">{{ e.title }}</p>
          <p class="date">
            {{
              new Date(e.frontmatter.date).toLocaleDateString("zh-CN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            }}
          </p>
        </div>
        <div class="right">
          <div class="img-wrap">
            <img :src="e.frontmatter.image" alt="" />
          </div>
        </div>
      </router-link>
    </div>

    <PageDivider @turnTo="alterPage" :items_sum="28" :each_page_items="10" ref="page-divider" />

    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import PageDivider from "./components/PageDivider.vue";

export default {
  name: "NewsIndex",
  components: {
    Nav,
    Footer,
    PageDivider,
  },
  methods: {
    alterPage(page) {
      if (page == 1) this.$router.push(`/news/`);
      else this.$router.push(`/news/page/${page}/`);
    },
  },
  mounted() {
    console.log(this.$site);
    console.log(this.$pagination);
  },
};
</script>

<style lang="less" scoped>
.news {
  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
  }
  .items {
    width: fit-content;
    margin: 0 auto;
    a {
      display: flex;
      padding: 1rem 0;
      width: 30rem;
      border-bottom: 1px solid #ccc;
      .left {
        flex: 0 0 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          color: #333;
          font-size: 0.8rem;
          margin: 0;
        }
        .title {
          font-size: 0.9rem;
          font-weight: bold;
        }
        .date {
          font-size: 0.6rem;
          color: #999;
        }
      }
      .right {
        flex: 0 0 30%;
        .img-wrap {
          height: 100%;
          width: 8rem;
          background: #333;
          overflow: hidden;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &:hover {
        background: #efefef;
      }
    }
  }
}
</style>
