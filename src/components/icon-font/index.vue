<template>
  <i class="icon iconfont" :class="this.name"></i>
</template>

<style lang="scss">
  @import "./lib/iconfont.css";
</style>

<script>
  export default {
    props: {
      name: String,
      required: true
    }
  }
</script>

<style lang="scss" scoped="">
  .iconfont {
    font-size: 22px;
  }
</style>
