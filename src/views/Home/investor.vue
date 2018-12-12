<template>
  <div class="panel investor">
    <div class="panel-title">{{$t('investors.title')}}</div>
    <ul class="investor-list clearfix">
      <li class="investor-img" v-for="n in 12"
          :style="{backgroundImage: 'url(/static/assets/investors/investor-'+n+'.png)'}">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Investor',
  }
</script>

<style lang="scss" scoped>
  .investor {
    .investor-list {
      margin-top: 60px;
      .investor-img {
        float: left;
        width: 140px;
        height: 70px;
        margin-bottom: 34px;
        background-repeat: no-repeat;
        background-size: cover;
        &:not(:nth-child(6n)) {
          margin-right: 32px;
        }
      }
    }
  }
</style>

