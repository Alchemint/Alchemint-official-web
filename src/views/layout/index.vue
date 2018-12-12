<template>
  <div class="app-container">
    <nav-bar></nav-bar>
    <div class="app-main">
      <router-view></router-view>
    </div>
    <contact></contact>
    <div class="rotate-container">
      <img class="rotate" src="/static/assets/rotate.svg" alt="">
      <a class="rotate-info" href="http://testnet.alchemint.io/" target="_blank">Live on Testnet</a>
    </div>
  </div>
</template>

<script>
  import navBar from './navBar'
  import contact from './contact'

  export default {
    name: 'Layout',
    components: {
      navBar,
      contact,
    }
  }
</script>

<style lang="scss" scoped>
  .app-main {
    margin: 0 auto;
  }

  .rotate-container {
    position: fixed;
    right: 60px;
    bottom: 100px;
    z-index: 1000;
    .rotate {
      width: 180px;
      animation: rotation 10s linear infinite;
    }
    .rotate-info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #009BA9;
      border-radius: 40px;
      width: 130px;
      text-align: center;
      padding: 8px 0;
    }
  }

  @keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
</style>
