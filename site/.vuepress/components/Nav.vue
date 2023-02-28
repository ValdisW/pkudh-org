<template>
  <div class="nav">
    <nav>
      <ul class="main-list">
        <li v-for="e in $site.themeConfig.nav" :key="e.text">
          <router-link v-if="e.link" :to="e.link">{{ e.text }}</router-link>
          <span v-if="e.items">{{ e.text }}</span>
          <ul v-if="e.items" class="secondary-list">
            <li v-for="s in e.items" :key="s.text">
              <router-link v-if="s.link" :to="s.link">{{ s.text }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>
