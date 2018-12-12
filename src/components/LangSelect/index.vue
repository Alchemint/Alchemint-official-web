<template>
  <div>
    <el-dropdown trigger="click" class='lang' @command="handleSetLanguage" placement="bottom-start">
      <div class="lang-select">
        <img :src="'/static/assets/home/'+language+'.png'" alt="lang">
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu slot="dropdown" class="lang-select-dropdown">
        <el-dropdown-item class="select-item" command="zh">
          <img src="/static/assets/home/zh.png" alt="zh">
        </el-dropdown-item>
        <el-dropdown-item class="select-item" command="en">
          <img src="/static/assets/home/en.png" alt="en">
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    computed: {
      language() {
        return this.$store.getters.language;
      }
    },
    methods: {
      handleSetLanguage(lang) {
        this.$i18n.locale = lang;
        this.$store.dispatch("setLanguage", lang);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .lang {
    cursor: pointer;
    &-select {
      > img {
        display: inline-block;
        vertical-align: middle;
        width: 34px;
      }
      .el-icon-caret-bottom {
        display: inline-block;
        vertical-align: middle;
        color: #fff;
        font-size: 16px;
      }
    }
  }

  .lang-select-dropdown {
    padding: 0;
    border: 0;
    margin-left: -5px;
    background: #102567;
    .select-item {
      padding: 5px;
      line-height: 1;
      background: #102567;
      &:hover,
      &:focus {
        background: #107bd7;
      }
      > img {
        width: 34px;
      }
    }
  }

  .switch-token {
    // width: 812.8px;
    // height: 540.8px;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 1000px;
    text-align: center;
    z-index: 99999;
  }

  .switch-token-btn {
    position: fixed;
    width: 120px;
    height: 40px;
    top: 91%;
    left: 51%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    // border: 2px solid red;
  }
</style>

<style lang="scss">
  .el-dropdown-menu {
    .popper__arrow {
      display: none !important;
    }
  }
</style>



