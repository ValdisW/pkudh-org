<template>
  <!-- 新闻列表项 -->
  <router-link class="news-item" :to="path">
    <div class="left">
      <p class="title">{{ title }}</p>
      <p class="date">
        {{
          new Date(date).toLocaleDateString("zh-CN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        }}
      </p>
    </div>
    <div class="right">
      <div class="img-wrap">
        <img v-if="image" :src="image" :alt="title" />
        <div class="temp" v-else></div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "NewsItem",
  props: {
    path: {
      type: String,
      default: () => "无标题",
    },
    title: {
      type: String,
      default: () => "无标题",
    },
    date: {
      type: String,
      default: () => "",
    },
    image: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="less" scoped>
.news-item {
  display: flex;
  padding: 1rem 0;
  width: 100%;
  border-bottom: 1px solid #e7eaeb;
  text-decoration: none;
  .left {
    flex: 0 0 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      color: #333;
      font-size: 0.8rem;
      margin: 0;
    }
    .title {
      font-size: 0.9rem;
      font-weight: bold;
    }
    .date {
      font-size: 0.6rem;
      color: #999;
    }
  }
  .right {
    flex: 0 0 30%;
    .img-wrap {
      height: 5rem;
      width: 8rem;
      background: #333;
      overflow: hidden;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      color: #fff;
      font-size: 0.6rem;
    }
    .temp {
      width: 100%;
      height: 100%;
      background: #ccc;
    }
  }

  &:hover {
    background: #f6f6f9;
  }
}
</style>
