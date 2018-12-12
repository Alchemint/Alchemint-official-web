<template>
  <div class="FAQ panel" id="faq">
    <div class="panel-title">{{$t('faq.title')}}</div>
    <el-collapse accordion>
      <el-collapse-item v-for="n in 8" :key="n">
        <template slot="title">{{$t(`faq.desc-${n}.question`)}}</template>
        <div v-html="$t(`faq.desc-${n}.answer`)"></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  export default {
    name: 'FAQ',
  }
</script>

<style lang="scss">
  .FAQ {
    padding-top: 110px;
    .link {
      color: #42bffe;
      text-decoration: underline;
      &:hover, &:active {
        color: #42bffe;
        text-decoration: underline;
      }
    }
  }
</style>
<style lang="scss">
  .FAQ {
    .el-collapse {
      border: 0;
      text-align: left;
    }
    .el-carousel__mask, .el-cascader-menu, .el-cascader-menu__item.is-disabled:hover, .el-collapse-item__header, .el-collapse-item__wrap {
      background-color: #06044D;
    }
    .el-collapse-item__header {
      border: 0;
      color: #42bffe;
      font-size: 16px;
    }
    .el-collapse-item__arrow {
      margin-right: 16px;
      float: left;
    }
    .el-collapse-item__wrap {
      border: 0;
    }
    .el-collapse-item__content {
      padding: 20px 28px;
      color: rgba(255, 255, 255, 0.8);
      text-align: justify;
    }
  }
</style>
