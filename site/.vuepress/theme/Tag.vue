<template>
  <div>tag</div>
  <li v-for="e in this.$frontmatterKey.list">{{ e }}</li>
</template>

<script>
export default {
  name: "Tag",
  mounted() {
    console.log(this.$frontmatterKey.list);
  },
};
</script>
