<template>
  <div class="panel road-map">
    <div class="panel-title">{{$t('roadMap.title')}}</div>
    <template v-if="language==='zh'">
      <img class="genesis-img" src="/static/assets/roadMap/genesis-zh.png" alt="">
      <img class="expedition-img" src="/static/assets/roadMap/expedition-zh.png" alt="">
      <img class="elysium-img" src="/static/assets/roadMap/elysium-zh.png" alt="">
    </template>
    <template v-else>
      <img class="genesis-img" src="/static/assets/roadMap/genesis-en.png" alt="">
      <img class="expedition-img" src="/static/assets/roadMap/expedition-en.png" alt="">
      <img class="elysium-img" src="/static/assets/roadMap/elysium-en.png" alt="">
    </template>
  </div>
</template>

<script>
  export default {
    name: 'RoadMap',
    computed: {
      language() {
        return this.$store.getters.language
      }
    },
  }
</script>

<style lang="scss" scoped>
  .road-map {
    .genesis-img {
      width: 1111px;
      margin-left: -55.5px;
    }
    .expedition-img {
      width: 952px;
      margin: 0 auto;
    }
    .elysium-img {
      width: 1000px;
    }
  }
</style>
