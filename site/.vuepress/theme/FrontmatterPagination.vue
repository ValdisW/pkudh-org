<template>
  <Page>
    <h1 v-text="$page.frontmatter.title"></h1>
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
  </Page>
</template>

<script>
import Page from "./components/Page.vue";
import NewsItem from "./components/NewsItem.vue";

export default {
  name: "fdvdftb",
  components: {
    Page,
    NewsItem,
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style lang="less" scoped>
h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0;
}
.items {
  width: 30rem;
  margin: 0 auto;
}
</style>
