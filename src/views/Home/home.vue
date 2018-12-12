<template>
  <div class="home">
    <div class="banner" :style="{height:parseFloat(height)-100+'px',width:width}">
      <div class="banner-inner">
        <img class="banner-logo" src="/static/assets/home/alchemint.png" alt="logo">
        <div class="banner-sub">{{$t('banner.title')}}</div>
        <div class="banner-intro" v-html="$t('banner.desc')"></div>
        <a class="banner-btn" target="_blank"
           :href="`/static/pdf/${language==='zh'?'阿基米德_白皮书_v1.1':'Alchemint_Whitepaper_v1.2'}.pdf`">
          {{$t('banner.btn')}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    computed: {
      width() {
        return this.$store.getters.backWidth;
      },
      height() {
        return this.$store.getters.backHeight;
      },
      language() {
        return this.$store.getters.language
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    min-width: 1000px;
    .banner {
      position: relative;
      &-inner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1000px;
        text-align: center;
      }
      &-logo {
        width: 340px;
      }
      &-sub {
        font-size: 44px;
        margin-top: 70px;
      }
      &-intro {
        margin-top: 54px;
        font-size: 16px;
        line-height: 20px;
      }
      &-btn {
        display: block;
        margin: 80px auto 0;
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #151d84;
        box-shadow: 0 0 5px 0 rgba(0, 2, 43, 0.45);
        border-radius: 4px;
        color: #fff;
        font-family: Verdana-Bold;
        font-size: 18px;
      }
    }
  }
</style>
