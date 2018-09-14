<template>
  <div>
    <h2>这是子组件，接收的值为{{getTransmit}}</h2>
    <el-button @click="change">子组件改变值为2</el-button>
  </div>
</template>
<script>
export default {
  props: ['transmit'],
  data () {
    return {
      getTransmit: this.transmit
    }
  },
  computed: {

  },
  methods: {
    change () {
      this.getTransmit = 2
      this.$emit('childChange', this.getTransmit)
    }
  }
}
</script>
