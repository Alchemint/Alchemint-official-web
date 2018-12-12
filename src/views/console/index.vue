<template>
  <div id="console" class="panel console">
    <div class="panel-title">{{$t('console.title')}}</div>
    <el-carousel height="450px"
                 class="carousel"
                 :interval="5000">
      <el-carousel-item v-for="n in 4" :key="n">
        <img :src="'/static/assets/console/console-'+n+'.png'" alt="">
        <div class="carousel-info">{{$t(`console.desc-${n}`)}}</div>
      </el-carousel-item>
    </el-carousel>
    <div class="console-info" v-html="$t('console.info')"></div>
    <a class="console-btn"
       href="https://testnet.alchemint.io/"
       target="_blank">{{$t('console.btn')}}</a>
  </div>
</template>

<style lang="scss" scoped>
  .console {
    .carousel {
      width: 800px;
      margin: 0 auto;
      &-info {
        position: absolute;
        bottom: 0;
        height: 50px;
        line-height: 50px;
        width: 800px;
        background: linear-gradient(180deg, rgba(8, 13, 49, 0) 0%, rgba(8, 13, 49, 0.4) 100%);
        color: #fff;
        text-align: left;
        padding: 0 20px;
      }
    }
    &-info {
      margin-top: 40px;
      line-height: 22px;
      font-weight: bold;
    }
    &-btn {
      display: block;
      width: 170px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: rgba(22, 29, 133, 1);
      box-shadow: 0px 0px 3px 0px rgba(0, 3, 43, 0.46);
      border-radius: 4px;
      color: #fff;
      font-family: Verdana-Bold;
      font-size: 16px;
      margin: 50px auto 0;
    }
  }
</style>
