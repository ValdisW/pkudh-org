<template>
  <Page class="intro-content">
    <h1 class="title" v-text="$page.title"></h1>

    <!-- 对应intro.md中的:::slot preface的内容 -->
    <Content class="plain-content" slot-key="preface" />

    <!-- 指导老师 -->
    <section class="supervisors">
      <h2 v-text="members.supervisors.title"></h2>
      <ul>
        <li v-for="e in members.supervisors.members" :key="e.name">
          <router-link :to="e.link">
            <img :src="e.image" alt="e.name" />
            <div>
              <h3 v-text="e.name"></h3>
              <p v-text="e.content"></p>
            </div>
          </router-link>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>

    <!-- 研究成员 -->
    <section class="researchers">
      <h2 v-text="members.researchers.title"></h2>
      <ul>
        <li v-for="e in members.researchers.members" :key="e.name">
          <router-link :to="e.link">
            <img :src="e.image" alt="e.name" />
            <div>
              <h3 v-text="e.name"></h3>
              <p v-text="e.content"></p>
            </div>
          </router-link>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>

    <!-- 新近毕业生 -->
    <section class="graduates">
      <h2 v-text="members.graduates.title"></h2>
      <ul>
        <li v-for="e in members.graduates.members" :key="e.name">
          <router-link :to="e.link">
            <img :src="e.image" alt="e.name" />
            <div>
              <h3 v-text="e.name"></h3>
              <p v-text="e.content"></p>
            </div>
          </router-link>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>

    <Content class="plain-content" />
  </Page>
</template>

<script>
import members from "../data/members.json";
import Page from "../components/Page.vue";

export default {
  name: "Layout",
  components: {
    Page,
  },
  data() {
    return {
      members: members,
    };
  },
};
</script>

<style lang="less">
.intro-content {
  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
  }

  .plain-content {
    h1,
    h2 {
      margin: 2rem 0 1rem;
    }
    h3,
    h4,
    h5,
    h6 {
      margin: 1.4rem 0 0.7rem;
    }
    p {
      margin: 0 0 1.2rem;
      letter-spacing: 0.04rem;
      line-height: 1.5rem;
      color: #454545;
    }
    img {
      max-width: 100%;
    }
    table {
      font-size: 0.8rem;
      tr {
        td {
          padding: 0.3rem 0.6rem;
          color: #454545;
          letter-spacing: 0.04rem;
        }
      }
    }
    ul,
    ol {
      padding: 0 0 0 1rem;
    }
    li {
      font-size: 0.8rem;
      margin: 0.3rem 0;
      color: #454545;
      line-height: 1.5rem;
      letter-spacing: 0.04rem;
    }
  }
  section {
    h2 {
      margin: 0 0 1rem;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      li {
        flex: 1 0 8rem;
        margin: 1rem;
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: #000;
          img {
            object-fit: cover;
          }
          div {
            h3 {
              font-size: 1rem;
            }
            p {
              text-align: center;
              font-size: 0.7rem;
              color: #666;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
          }
        }
      }
    }
    &.supervisors {
      ul {
        li {
          flex: 1 1 calc(33% - 6rem);
          margin: 1rem 3rem;
          a {
            img {
              width: 9rem;
              height: 10rem;
              border-radius: 0.3rem;
              object-fit: cover;
              background: #efefef;
            }
            div {
              h3 {
                text-align: center;
                margin: 0.3rem 0 0.2rem;
              }
            }
          }
        }
      }
    }

    &.graduates,
    &.researchers {
      ul {
        li {
          flex: 1 1 calc(25% - 2rem);
          a {
            display: flex;
            img {
              width: 6.5rem;
              height: 6.5rem;
              border-radius: 50%;
              flex: 0 0 6.5rem;
            }
            div {
              h3 {
                margin: 0.5rem 0 0.3rem;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
