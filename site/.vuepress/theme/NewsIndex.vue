<template>
  <div>
    <Nav />
    <h1>新闻动态</h1>
    <ul>
      <li v-for="e in $pagination.pages">
        <router-link :to="e.path">{{ e.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "NewsIndex",
  components: {
    Nav,
  },
};
</script>
