<template>
  <div class="lazyload">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="jquery实现图片懒加载" name="first">
        <jquery-load></jquery-load>
      </el-tab-pane>
      <el-tab-pane label="Vue实现图片懒加载" name="second">
        <vue-load></vue-load>
      </el-tab-pane>
    </el-tabs>
    
  </div>
</template>
<script>
import jqueryLoad from './jquery.vue'
import vueLoad from './vuelazy.vue'
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    jqueryLoad,
    vueLoad
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
<style lang="less" scoped>

</style>


