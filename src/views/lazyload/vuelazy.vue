<template>
  <div class="vuelazy">
    <!-- 普通用法 -->
    <div v-lazy-container="{ selector: 'img', loading: '../../assets/loading.gif' }">
      <img data-src="/img/flower.d93dfe26.jpg">
      <img data-src="/img/sky.1048b94b.jpg">
      <img data-src="/img/time.11e7b48e.jpg">  
      <img data-src="/img/time2.e53f1801.jpg">
      <img data-src="/img/time3.cfa4c564.jpg">
      <img data-src="/img/time4.5afddf88.jpg">  
      <img data-src="/img/time5.d5b69446.jpg">  
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: ['/img/flower.d93dfe26.jpg','/img/sky.1048b94b.jpg']
    }
  },
  components: {

  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.vuelazy {
  & img {
    width: 40%;
    margin-left: 10%;
  }
}
</style>


