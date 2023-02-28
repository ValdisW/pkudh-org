<template>
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
    console.log(this.$site);
    console.log(this.$page);
  },
};
</script>
