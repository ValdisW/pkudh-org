<template>
  <div class="page">
    <Nav />
    <main v-if="type == 'article'" class="article">
      <slot></slot>
    </main>
    <main v-else-if="type == 'home'" class="home">
      <slot></slot>
    </main>
    <main v-else class="plain">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    Nav,
    Footer,
  },
  props: {
    type: {
      type: String,
      default: "plain",
    },
  },
};
</script>

<style>
main {
  min-height: calc(100vh - 16rem);
}
main.article {
  width: 38.4rem;
  margin: 0 auto 4rem;
  padding: 0 1rem;
}
main.home {
  margin: 0 auto 4rem;
}
main.plain {
  margin: 0 10% 4rem;
  padding: 0 1rem;
}
</style>
