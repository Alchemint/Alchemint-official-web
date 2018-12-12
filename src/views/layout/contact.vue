<template>
  <div class="contact">
    <div class="contact-list">
      <a class="contact-item" href="https://twitter.com/Alchemint_io" target="_blank">
        <img class="img" src="/static/assets/contact/twitter.png" alt="twitter">
      </a>
      <a class="contact-item" href="https://t.me/alchemint" target="_blank">
        <img class="img" src="/static/assets/contact/t-en.png" alt="t.me">
      </a>
      <a class="contact-item" href="https://t.me/AlchemintCN" target="_blank">
        <img class="img" src="/static/assets/contact/t-china.png" alt="t.me">
      </a>
      <el-popover placement="top"
                  width="150"
                  class="contact-item we-chart"
                  popper-class="qr-weixin-container"
                  trigger="hover">
        <img slot="reference" class="img" src="/static/assets/contact/wechart.png" alt="wechart">
        <img class="qr-weixin" src="/static/assets/contact/qr-weixin.png" alt="qr-weixin">
      </el-popover>
      <a class="contact-item" href="https://www.youtube.com/channel/UCwrtClCx049XDnyYFB6P2qw" target="_blank">
        <img class="img" src="/static/assets/contact/youtube.png" alt="youtube">
      </a>
      <a class="contact-item" href="https://medium.com/@alchemintio" target="_blank">
        <img class="img" src="/static/assets/contact/medium.png" alt="medium">
      </a>
      <a class="contact-item" href="https://www.reddit.com/r/Alchemint/" target="_blank">
        <img class="img" src="/static/assets/contact/reddit.png" alt="reddit">
      </a>
      <a class="contact-item" href="https://github.com/Alchemint/" target="_blank">
        <img class="img" src="/static/assets/contact/github.png" alt="github">
      </a>
      <el-popover placement="top"
                  class="contact-item email"
                  popper-class="email-copy-container"
                  width="180"
                  trigger="hover">
        <img class="img" slot="reference" src="/static/assets/contact/email.png" alt="email">
        <div class="email-content">service@alchemint.io</div>
      </el-popover>
      <p align="center" style="
          font-size: 18px;
          margin-top: 26px;
      ">Alchemint Foundation Limited</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .contact {
    position: relative;
    width: 100%;
    height: 320px;
    background: #00043a;
    margin-top: 200px;
    color: #fff;
    font-family: DINAlternate-Bold;
    width: 100%;
    min-width: 1000px;
    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 32px;
    }
    .contact-list {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 720px;
      font-size: 0;
      .contact-item {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        margin: 0 20px;
        border-radius: 4px;
        background-image: linear-gradient(45deg, #4a35e5 0%, #3714a5 100%);
        box-shadow: 2px 4px 5px 0 rgba(0, 3, 44, 0.59);
        border-radius: 4px;
        transition: all .2s linear;
        cursor: pointer;
        &:hover {
          background-image: linear-gradient(45deg, #00dcf1 0%, #0067db 100%);
          &.we-chart, &.email {
            transform: scale(1.2);
          }
        }
        .img {
          width: 24px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        &.we-chart {
          .img {
            width: 40px;
            padding: 8px;
          }
        }
        &.email {
          .img {
            width: 40px;
            padding: 7.5px;
          }
        }
      }
    }
  }
</style>

<style lang="scss">
  .qr-weixin-container {
    padding: 0 !important;
    .qr-weixin {
      width: 150px;
      height: 150px;
    }
  }

  .email-copy-container {
    .email-content {
      text-align: center;
    }
  }
</style>

