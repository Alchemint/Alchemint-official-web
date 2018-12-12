<template>
  <div class="nav-bar">
    <div class="banner-img" :style="{height:height,width:width,display:this.$route.path=='/home'?'block':'none'}"></div>
    <div class="nav-content w-1000 clearfix">
      <img @click="handleClick" class="logo" src="/static/assets/home/logo.png" alt="logo">
      <div class="nav-right">
        <router-link class="router" to="home">{{$t('navbar.home')}}</router-link>
        <router-link class="router" to="faq">{{$t('navbar.faq')}}</router-link>
        <a class="twitter" href="https://twitter.com/Alchemint_io" target="_blank">
          <icon-font name="icon-twitter"></icon-font>
        </a>
        <a class="telegram" :href="'https://t.me/'+(language==='en'?'alchemint':'AlchemintCN')" target="_blank">
          <icon-font name="icon-telegram"></icon-font>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import LangSelect from '../../components/LangSelect/index.vue'

  export default {
    name: 'Header',
    data() {
      return {
        currentImg: '/static/assets/home/USA.png',
        width: '',
        height: '',
      }
    },
    computed: {
      language() {
        return this.$store.getters.language
      }
    },
    components: {
      LangSelect,
    },
    mounted() {
      this.$nextTick(() => {
        this.getSize();
        window.addEventListener('resize', this.getSize, false);
      });
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.getSize, false);
    },
    methods: {
      handleClick() {
        this.$router.push({path: '/'});
      },
      getSize() {
        let width = document.documentElement.offsetWidth;
        width = width > 1000 ? width : 1000;
        this.width = width + 'px';
        this.height = width * 0.54 + 'px';
        this.$store.dispatch('setWidth', this.width);
        this.$store.dispatch('setHeight', this.height);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    min-width: 1000px;
    background: rgba(6, 4, 77, .1);
    height: 100px;
    line-height: 100px;
    .banner-img {
      position: absolute;
      background: url('/static/assets/home/banner.png') no-repeat 50%;
      background-size: contain;
      z-index: -10;
    }
    .nav-content {
      margin: 0 auto;
      position: relative;
      height: 100%;
      overflow-y: hidden;
    }
    .logo {
      float: left;
      height: 58px;
      margin: 21px 0;
    }
    .nav-right {
      float: right;
      font-family: DINAlternate-Bold;
      font-size: 22px;
      .router {
        margin-right: 50px;
        padding: 2px 5px;
        &:hover {
          background: #2992ed;
        }
      }
      .twitter {
        margin-left: 20px;
        &:hover {
          color: #2992ed;;
        }
      }
      .telegram {
        margin-left: 30px;
        &:hover {
          color: #2992ed;
        }
      }
      .lang-select-container {
        float: right;
        line-height: 1;
        padding: 33px 0;
        margin-left: 80px;
      }
    }
  }
</style>

<style lang="scss">
  .router-link-active {
    background: transparent;
  }
</style>
