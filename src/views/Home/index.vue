<template>
  <div class="home-container">
    <home></home>
    <console-pane></console-pane>
    <c-module></c-module>
    <stable-coins></stable-coins>
    <road-map></road-map>
    <investor></investor>
  </div>
</template>

<script>
  import home from './home.vue';
  import consolePane from '../console/index'
  import cModule from './cModule.vue';
  import stableCoins from './stableCoins.vue'
  import roadMap from './roadMap.vue';
  import investor from './investor.vue';

  export default {
    name: 'Home',
    data() {
      return {}
    },
    components: {
      home,
      consolePane,
      cModule,
      stableCoins,
      roadMap,
      investor,
    },
    /*mounted() {
      this.getAnchor();
    },
    methods: {
      getAnchor() {
        let query = this.$route.query;
        if (query.tab && query.tab === 'console') {
          this.$el.querySelector('#console').scrollIntoView();
        }
      }
    },
    watch: {
      $route(newVal, oldVal) {
        this.getAnchor();
      }
    }*/
  }
</script>
