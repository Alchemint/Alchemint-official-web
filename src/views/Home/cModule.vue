<template>
  <div class="c-module panel">
    <div class="panel-title">{{$t('cModule.title')}}</div>
    <video id="explanation-video" class="explanation-video" controls preload="auto" width="1000" height="562"
           poster="/static/assets/home/c-module.png">
      <source src="/static/video/Alchemint-SDUSD.mp4" type="video/mp4">
      To view this video please enable JavaScript, and consider upgrading the web browser.
    </video>
  </div>
</template>

<script>
  export default {
    name: 'CModule'
  }
</script>
