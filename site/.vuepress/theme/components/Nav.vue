<template>
  <header class="nav">
    <nav>
      <img class="logo" src="../../public/images/logo.png" alt="" />
      <ul class="main-list">
        <li v-for="e in $site.themeConfig.nav" :key="e.text">
          <!-- 链接 -->
          <router-link v-if="e.link && !isExternalLink(e.link || '')" :to="e.link" v-text="e.text"></router-link>
          <a v-if="e.link && isExternalLink(e.link || '')" :href="e.link" target="_blank" v-text="e.text"></a>

          <!-- 折叠带单 -->
          <span v-if="e.items">{{ e.text }}</span>
          <ul v-if="e.items" class="secondary-list">
            <li v-for="s in e.items" :key="s.text">
              <router-link v-if="s.link && !isExternalLink(s.link || '')" :to="s.link" v-text="s.text"></router-link>
              <a v-if="s.link && isExternalLink(s.link || '')" :href="s.link" target="_blank" v-text="s.text"></a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { isExternalLink } from "../utils";

export default {
  name: "Nav",
  methods: {
    isExternalLink,
  },
};
</script>

<style lang="less">
@nav-height: 3.6rem;
@secondary-list-offset: 0.6rem;

.nav {
  nav {
    user-select: none;
    background: #41466e;
    color: #fff;

    padding: 0 3rem;
    height: @nav-height;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      height: 1.8rem;
      padding: 0.1rem 0;
    }

    .main-list {
      display: flex;
      font-size: 0.7rem;
      height: @nav-height;
      a {
        color: #fff;
      }
      li {
        list-style: none;
      }

      > li {
        margin: 0 0 0 2rem;
        cursor: pointer;
        position: relative;

        &:hover {
          color: #fdd000;
          .secondary-list {
            display: block;
          }
        }

        > a {
          height: @nav-height;
          line-height: @nav-height;
          display: block;
          text-decoration: none;
          &:hover {
            color: #fdd000;
          }
        }

        span {
          display: flex;
          height: @nav-height;
          height: 3.6rem;
          align-items: center;
          &:after {
            content: "";
            border-top: 0.2rem solid #ccc;
            border-left: 0.2rem solid transparent;
            border-right: 0.2rem solid transparent;
            margin: 0.2rem 0 0 0.2rem;
            display: inline-block;
          }
        }

        .secondary-list {
          background-color: #707495;
          display: none;
          position: absolute;
          top: @nav-height;
          left: -@secondary-list-offset;
          z-index: 100;
          width: max-content;

          li {
            margin: 0;
            height: auto;
            a {
              text-decoration: none;
              display: flex;
              padding: 0.6rem @secondary-list-offset;
            }
            &:hover {
              a {
                color: #fdd000;
              }
            }
          }
        }
      }
    }
  }
}
</style>
