<template>
  <div class="nav">
    <nav>
      <img class="logo" src="../../public/images/logo.png" alt="">
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

<style lang="less">
.nav {
  nav {
    background: #002f6f;
    color: #fff;

    padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      height: 2rem;
    }

    .main-list {
      display: flex;

      li {
        margin: 0 1rem;
        list-style: none;

        &:hover {
          .secondary-list {
            display: block;
          }
        }

        a {
          color: #fff;
          text-decoration: none;
        }

        .secondary-list {
          background-color: #333;
          display: none;
          position: absolute;

          li {
            margin: 0;
            padding: 0.3rem 0;
          }
        }
      }
    }
  }
}
</style>