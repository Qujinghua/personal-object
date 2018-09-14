<template>
  <div>
    <h1>这是父组件<span v-if="childData">{{childData}}</span></h1>
    <child :transmit="pData" v-on:childChange="childChangeValue"></child>
  </div>
</template>
<script>
import child from './child.vue'
export default {
  data () {
    return {
      pData: 1,
      childData: null
    }
  },
  components: {
    child
  },
  methods: {
    childChangeValue (data) {
      this.childData = data
    }
  }
}
</script>


