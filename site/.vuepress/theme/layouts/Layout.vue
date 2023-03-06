<template>
  <!-- 影响全部的页面 -->
  <div>
    <Nav />
    <Content />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";

export default {
  name: "Layout",
  components: {
    Nav,
  },
  mounted() {
    console.log(this);
    console.log("this.$site", this.$site);
    console.log("this.$page", this.$page);
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

img {
  max-width: 100%;
}
</style>