<template>
  <div class="stable panel">
    <div class="panel-title">{{$t('stableCoin.title')}}</div>
    <div class="stable-content">
      <div class="stable-content-title clearfix">
        <span>{{$t('stableCoin.problem')}}</span>
        <span>{{$t('stableCoin.solve')}}</span>
      </div>
      <div class="stable-content-list clearfix">
        <div class="section" v-for="n in 10">
          <div class="section-img">
            <img class="stable-img" :src="'/static/assets/home/stableCoin-'+n+'.png'" alt="">
          </div>
          <div class="section-desc">
            {{$t(`stableCoin.detail-${n}`)}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StableCoin'
  }
</script>

<style lang="scss" scoped>
  .stable {
    &-content {
      &-title {
        font-size: 20px;
        margin: 0 auto 60px;
        > span {
          float: left;
          width: 50%;
          text-align: center;
          &:nth-child(2n-1) {
            padding-right: 40px;
          }
          &:nth-child(2n) {
            padding-left: 40px;
          }
        }
      }
      .section {
        float: left;
        width: 50%;
        height: 150px;
        font-size: 0;
        &:nth-child(2n-1) {
          padding-right: 40px;
        }
        &:nth-child(2n) {
          padding-left: 40px;
        }
        &-img {
          display: inline-block;
          vertical-align: middle;
          width: 80px;
          .stable-img {
            width: 100%;
          }
        }
        &-desc {
          display: inline-block;
          vertical-align: middle;
          width: calc(100% - 100px);
          padding-left: 20px;
          text-align: left;
          margin: 0 auto;
          font-size: 16px;
          font-family: Verdana;
        }
      }
    }
  }
</style>
