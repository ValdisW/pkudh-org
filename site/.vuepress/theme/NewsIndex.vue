<template>
  <!-- 新闻动态-首页 -->
  <Page class="news">
    <main>
      <h1>新闻动态</h1>

      <div class="content">
        <!-- 新闻列表 -->
        <div class="news-list">
          <div class="items">
            <NewsItem
              v-for="e in $pagination.pages"
              :key="e.key"
              :path="e.path"
              :title="e.title"
              :date="e.frontmatter.date"
              :image="e.frontmatter.image"
            />
          </div>

          <div class="page-divider-wrap">
            <PageDivider @turnTo="alterPage" :items_sum="28" :each_page_items="10" ref="page-divider" />
          </div>
        </div>

        <!-- 分类与标签 -->
        <div class="filter">
          <div>
            <h3>分类</h3>
            <Categories />
          </div>
          <div>
            <h3>标签</h3>
            <Tags />
          </div>
        </div>
      </div>
    </main>
  </Page>
</template>

<script>
import Page from "./components/Page.vue";
import NewsItem from "./components/NewsItem.vue";
import Categories from "./components/Categories.vue";
import Tags from "./components/Tags.vue";
import PageDivider from "./components/PageDivider.vue";

export default {
  name: "NewsIndex",
  components: {
    Page,
    NewsItem,
    Categories,
    Tags,
    PageDivider,
  },
  data() {
    return {};
  },
  methods: {
    alterPage(page) {
      if (page == 1) this.$router.push(`/news/`);
      else this.$router.push(`/news/page/${page}/`);
    },
  },
  mounted() {
    console.log(this);
    console.log(this.$pagination);
    // this.getTags();
  },
};
</script>

<style lang="less" scoped>
.news {
  main {
    h1 {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      margin: 2rem 0;
    }
    .content {
      display: flex;
      justify-content: center;
      .filter {
        max-width: 15rem;
        margin: 0 1rem;
        div {
          margin: 0 0 1.5rem;
          h3 {
            margin: 0 0 0.8rem;
          }
        }
      }
      .news-list {
        margin: 0 1rem;
        .items {
          width: fit-content;
          margin: 0 auto;
          width: 30rem;
          a {
            display: flex;
            padding: 1rem 0;
            width: 100%;
            border-bottom: 1px solid #e7eaeb;
            text-decoration: none;
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
              background: #f6f6f9;
            }
          }
        }
        .page-divider-wrap {
          margin: 1.5rem 0;
        }
      }
    }
  }
}
</style>
