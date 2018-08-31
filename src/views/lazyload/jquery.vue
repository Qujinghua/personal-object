<template>
  <div class="jquerylazy">
    <div class="jquerylazy-box"></div>
    <img src="../../assets/lazyload/loading.gif" data-src="/img/flower.d93dfe26.jpg">
    <img src="../../assets/lazyload/loading.gif" data-src="/img/sky.1048b94b.jpg">
    <img src="../../assets/lazyload/loading.gif" data-src="/img/time.11e7b48e.jpg">
    <img src="../../assets/lazyload/loading.gif" data-src="/img/time2.e53f1801.jpg">
    <img src="../../assets/lazyload/loading.gif" data-src="/img/time3.cfa4c564.jpg">
    <img src="../../assets/lazyload/loading.gif" data-src="/img/time4.5afddf88.jpg">
    <img src="../../assets/lazyload/loading.gif" data-src="/img/time5.d5b69446.jpg">
    <!-- <img src="../../assets/lazyload/flower.jpg">
    <img src="../../assets/lazyload/sky.jpg">
    <img src="../../assets/lazyload/time.jpg">
    <img src="../../assets/lazyload/time2.jpg">
    <img src="../../assets/lazyload/time3.jpg">
    <img src="../../assets/lazyload/time4.jpg">
    <img src="../../assets/lazyload/time5.jpg"> -->
  </div>
</template>
<script>
import $ from "jquery"
import _ from "underscore"
export default {
  data () {
    return {

    }
  },
  mounted () {
    // 注意: 需要引入jQuery和underscore
  $(function() {
    // 获取window的引用:
    var $window = $(window);
    // 获取包含data-src属性的img，并以jQuery对象存入数组:
    var lazyImgs = _.map($('img[data-src]').get(), function (i) {
        return $(i);
    });
    // 定义事件函数:
    var onScroll = function() {
        // 获取页面滚动的高度:
        var wtop = $window.scrollTop();
        // 判断是否还有未加载的img:
        if (lazyImgs.length > 0) {
            // 获取可视区域高度:
            var wheight = $window.height();
            // 存放待删除的索引:
            var loadedIndex = [];
            // 循环处理数组的每个img元素:
            _.each(lazyImgs, function ($i, index) {
                // 判断是否在可视范围内:
                if ($i.offset().top - wtop < wheight) {
                    // 设置src属性:
                    $i.attr('src', $i.attr('data-src'));
                    // 添加到待删除数组:
                    loadedIndex.unshift(index);
                }
            });
            // 删除已处理的对象:
            _.each(loadedIndex, function (index) {
                lazyImgs.splice(index, 1);
            });
        }
    };
    // 绑定事件:
    $window.scroll(onScroll);
    // 手动触发一次:
    onScroll();
    })
  },
}
</script>
<style lang="less" scoped>
.jquerylazy {
  &-box{
    height: 500px;
    width: 100%;
  }
  & img {
    width: 40%;
    margin-left: 10%;
  }
}
</style>


