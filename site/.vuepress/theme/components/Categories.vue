<template>
  <div class="categories">
    <ul>
      <li v-for="category in categories" :key="category">
        <router-link :to="`/category/${category}`" v-text="category"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    // 获取所有文章的分类
    getCategories() {
      let categories = [];
      this.$site.pages.forEach((e) => {
        if (e.path.includes("/news/") && e.frontmatter.categories) {
          let category = e.frontmatter.categories;
          if (!categories.includes(category)) categories.push(category);
        }
      });
      this.categories = categories;
    },
  },

  created() {
    this.getCategories();
  },
};
</script>

<style lang="less" scoped>
.categories {
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    li {
      margin: 0 0.8rem 0.8rem 0;
      padding: 0.2rem 0.5rem;
      border-radius: 0.3rem;
      background: #41466e;
      font-size: 0.7rem;
      cursor: pointer;
      &:hover {
        filter: brightness(0.8);
      }
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
