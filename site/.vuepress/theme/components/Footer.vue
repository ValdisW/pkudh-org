<template>
  <footer>
    <div class="left">
      <img src="../../public/images/logo-footer.svg" alt="logo" />
      <p v-text="`© 2020-${new Date().getFullYear()} 北京大学数字人文研究中心 `"></p>
    </div>
    <div class="right">
      <p>地址：北京市海淀区颐和园路 5 号北京大学方李邦琴楼</p>
      <p>邮箱：gdhc@pku.edu.cn</p>
      <div class="media">
        <span class="icon">
          <div class="wechat-qrcode">
            <div class="content">
              <img src="../../public/images/qr.png" alt="" />
              <p>微信公众号：数字人文开放实验室</p>
            </div>

            <div class="arrow"></div>
          </div>
        </span>
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
  margin: 3rem 0 0;
  .left {
    margin: 0 2rem 0 0;
    img {
      height: 3.6rem;
    }
    p {
      font-size: 0.7rem;
      margin: 0.3rem 0 0;
      color: #fffc;
    }
  }
  .right {
    color: #fffc;
    p {
      font-size: 0.7rem;
      margin: 0.3rem 0;
    }
    .media {
      display: flex;
      margin: 0.6rem 0 0;
      .icon {
        display: block;
        margin: 0 0.8rem 0 0;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
          background-color: #ddd !important;
        }
      }
      .icon:nth-child(1) {
        position: relative;
        background: #fff url("../../public/images/icon-weixin.svg") no-repeat center;
        &:hover {
          .wechat-qrcode {
            display: block;
          }
        }
        .wechat-qrcode {
          display: none;
          position: absolute;
          bottom: calc(100% + 0.6rem);
          left: 50%;
          transform: translateX(-50%);
          .content {
            padding: 0.5em 0.8rem;
            text-align: center;
            width: 7rem;
            background: #fff;
            box-shadow: 0 0 1rem 0 #0003;
            img {
              width: 100%;
            }
            p {
              color: #000;
              font-size: 0.7rem;
            }
          }

          .arrow {
            margin: 0 auto;
            border-top: 1rem solid #fff;
            border-left: 0.5rem solid transparent;
            border-right: 0.5rem solid transparent;
            width: 0;
          }
        }
      }
      .icon:nth-child(2) {
        background: #fff url("../../public/images/icon-bilibili.svg") no-repeat center;
      }
    }
  }
}
</style>
