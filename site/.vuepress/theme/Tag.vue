<template>
  <Page>
    <Nav />
    <div>tags</div>
    <li v-for="e in this.$frontmatterKey.list">{{ e }}</li>
    <Footer />
  </Page>
</template>

<script>
import Page from "./components/Page.vue";

export default {
  name: "Tag",
  components: {
    Page,
  },
  mounted() {
    console.log(this.$frontmatterKey.list);
  },
};
</script>
