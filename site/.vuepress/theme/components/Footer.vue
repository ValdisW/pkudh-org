<template>
  <footer>
    <div class="left">
      <img src="../../public/images/logo-footer.svg" alt="logo" />
      <p v-text="`© 2020-${new Date().getFullYear()} 北京大学数字人文研究中心 `"></p>
    </div>
    <div class="right">
      <p>北京市海淀区颐和园路 5 号北京大学方李邦琴楼</p>
      <p>gdhc@pku.edu.cn</p>
      <div class="media">
        <span class="icon"></span>
        <a class="icon" href="https://space.bilibili.com/523934070" target="_blank"></a>
      </div>
    </div>
  </footer>
</template>

<style lang="less" scoped>
footer {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #41466e;
  color: #fff;
  font-size: 0.7rem;
  .left {
    margin: 0 2rem 0 0;
    img {
      height: 3.6rem;
    }
  }
  .right {
    .media {
      display: flex;
      .icon {
        display: block;
        margin: 0 0.5rem;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
          filter: brightness(0.8);
        }
      }
      .icon:nth-child(1) {
        background: #fff url("../../public/images/icon-weixin.svg") no-repeat center;
      }
      .icon:nth-child(2) {
        background: #fff url("../../public/images/icon-bilibili.svg") no-repeat center;
      }
    }
  }
}
</style>
