<template>
  <div class="banner" :style="`background: url(${banner_list[current_index].pic_url}) no-repeat center;`">
    <div class="banner-filter">
      <div class="banner-content" @mouseenter="() => clearInterval()" @mouseleave="() => startInterval()">
        <div
          class="poster"
          :style="`background: linear-gradient(-45deg, transparent 0.5rem, ${banner_list[current_index].colors[2]} 0) no-repeat bottom right, linear-gradient(-135deg, transparent 0.5rem, ${banner_list[current_index].colors[2]} 0) no-repeat top right;`"
        >
          <div class="content">
            <div class="img-wrap" :style="`background: ${banner_list[current_index].colors[1]}`">
              <img :src="banner_list[current_index].pic_url" alt="" />
            </div>
            <div class="text">
              <h2
                :style="`color: ${banner_list[current_index].colors[0]}`"
                v-text="banner_list[current_index].title"
              ></h2>
              <p v-text="banner_list[current_index].intro"></p>
              <div class="buttons">
                <router-link
                  class="button detail"
                  :style="`color: ${banner_list[current_index].colors[0]}; border-color: ${banner_list[current_index].colors[0]}`"
                  :to="banner_list[current_index].link_url"
                >
                  查看详情
                </router-link>
                <a
                  class="button site"
                  :style="`background: ${banner_list[current_index].colors[0]}`"
                  :href="banner_list[current_index].link"
                  target="_blank"
                >
                  访问系统
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- 列表 -->
        <ul class="control">
          <li
            v-for="(n, i) in banner_list"
            :key="n.title"
            :class="{ active: i == current_index }"
            v-text="n.title"
            @click="() => toggle(i)"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    banner_list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      current_index: 0,
      interval: null,
    };
  },
  methods: {
    toggle(index) {
      this.current_index = index;
    },
    next() {
      this.current_index = (this.current_index + 1) % this.banner_list.length;
    },
    // 鼠标移入banner时，暂停轮播
    clearInterval() {
      clearInterval(this.interval);
    },
    startInterval() {
      this.interval = setInterval(() => {
        this.next();
      }, 5000);
    },
  },
  mounted() {
    this.startInterval();
  },
};
</script>

<style scoped lang="less">
@control-width: 18rem;
@control-color: #333;

.banner {
  position: relative;
  overflow: hidden;
  background-size: cover !important;
  transition: 0.3s;
  .banner-filter {
    width: 100%;
    height: 100%;
    padding: 6vh;
    box-sizing: border-box;
    background-color: #efefef99;
    backdrop-filter: blur(0.5rem);
    .banner-content {
      display: flex;
      height: 20rem;
      box-shadow: inset 0 0 1.6rem 0.25rem rgba(14, 21, 47, 0.12), 0 0 1.6rem 0.25rem rgba(14, 21, 47, 0.12);
      .poster {
        width: calc(100% - @control-width);
        display: flex;
        background-size: 100% 60% !important;
        justify-content: center;
        align-items: center;
        height: 100%;

        .content {
          margin: 3rem;
          transition: 0.3s;

          width: 100%;
          box-sizing: border-box;
          height: 100%;

          height: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
          .img-wrap {
            box-sizing: border-box;
            background: #478bdf;
            height: 100%;
            width: 27rem;
            padding: 2vh;
            img {
              display: block;
              height: 100%;
              width: 100%;
              object-fit: cover;
            }
          }

          .text {
            margin: 0 0 0 1.4rem;
            flex: 0 0 20rem;
            border-left: 2px dashed #ccc;
            padding: 0 0 0 1.4rem;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h2 {
              font-weight: normal;
              font-size: 1.3rem;
            }
            h2,
            p {
              color: #478bdf;
              margin: 0 0 0.7rem;
              letter-spacing: 0.05rem;
            }
            p {
              color: #777;
              font-size: 0.7rem;
              line-height: 1.1rem;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 7;
              overflow: hidden;
            }
            .buttons {
              text-align: right;
              a.button {
                padding: 0.3rem 0.6rem;
                border: none;
                color: #fff;
                font-size: 0.6rem;
                border-radius: 0.2rem;
                user-select: none;
                display: inline-block;
              }
              a.detail {
                border-width: 1px;
                border-style: solid;
              }
            }
          }
        }
      }
      .control {
        width: @control-width;
        height: 100%;
        background: linear-gradient(45deg, transparent 0.5rem, @control-color 0) no-repeat bottom left,
          linear-gradient(135deg, transparent 0.5rem, @control-color 0) no-repeat top left;
        background-size: 100% 60%;
        color: #fff;
        list-style: none;
        height: 100%;
        font-size: 0.8rem;
        padding: 1rem 0;
        box-sizing: border-box;

        li {
          cursor: pointer;
          margin: 0 1.2rem;
          padding: 0.4rem 0.6rem;
          border-bottom: 1px solid #666;
          &:hover,
          &.active {
            background: #fff2;
          }
        }
      }
    }
  }
}
</style>
