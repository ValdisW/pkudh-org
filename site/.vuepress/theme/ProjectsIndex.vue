<template>
  <!-- 研究平台展示-首页 -->
  <Page class="projects">
    <main>
      <h1>研究平台</h1>

      <!-- 项目列表 -->
      <div class="items">
        <router-link v-for="e in projects" :to="e.path">
          <img :src="e.frontmatter.image" alt="" />
          <div class="detail">
            <h2 v-text="e.title"></h2>
            <p v-text="e.frontmatter.intro"></p>
          </div>
        </router-link>
      </div>
    </main>
  </Page>
</template>

<script>
import Page from "./components/Page.vue";

export default {
  name: "NewsIndex",
  components: {
    Page,
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
    console.log(this.projects);
  },
};
</script>

<style lang="less" scoped>
.projects {
  main {
    h1 {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      margin: 2rem 0;
    }
    .items {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      width: 50rem;
      margin: 0 auto;
      a {
        flex: 0 0 calc(25% - 2rem);
        text-decoration: none;
        padding: 1rem;
        transition: 0.2s;
        &:hover {
          background: #f5f5f5;
        }
        img {
          width: 100%;
          height: 6rem;
          object-fit: cover;
          display: block;
        }
        .detail {
          width: 100%;
          h2 {
            font-size: 0.75rem;
            letter-spacing: 0.02rem;
            margin: 0.4rem 0;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          p {
            font-size: 0.6rem;
            color: #999;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
        }
        // flex: 1 1 30%;
        // height: 8rem;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // background-size: cover;
      }
    }
  }
}
</style>
