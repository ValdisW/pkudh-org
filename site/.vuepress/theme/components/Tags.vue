<template>
  <div class="tags">
    <ul>
      <li v-for="tag in tags" :key="tag">
        <router-link :to="`/tag/${tag}`" v-text="tag"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tags",
  data() {
    return {
      tags: [],
    };
  },
  methods: {
    // 获取所有文章的标签
    getTags() {
      let tags = [];
      this.$site.pages.forEach((e) => {
        if (e.path.includes("/news/") && e.frontmatter.tags) {
          e.frontmatter.tags.forEach((tag) => {
            if (!tags.includes(tag)) tags.push(tag);
          });
        }
      });
      this.tags = tags;
    },
  },

  created() {
    this.getTags();
  },
};
</script>

<style lang="less" scoped>
.tags {
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    li {
      margin: 0 0.8rem 0.8rem 0;
      padding: 0.2rem 0.5rem;
      border-radius: 0.3rem;
      border: 1px solid #333;
      font-size: 0.7rem;
      cursor: pointer;
      &:hover {
        filter: brightness(0.8);
      }
      a {
        color: #333;
        text-decoration: none;
      }
    }
  }
}
</style>
