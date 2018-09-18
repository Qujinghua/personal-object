<template>
  <div class="body">
    <span>IPv6</span>
    <el-input v-model="input" @change="regular" style="width:300px;"></el-input>
    <p>{{ isPass }}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      input: '',
      isPass: ''
    }
  },
  methods: {
    regular () {
      function isIPv6 (data) {
        let arr = data.split('/')
        if(arr.length != 2) {
          return false
        } else {
          if(!/^\d{1,2}$/.test(arr[1])) {
            return false
          }
          let arr2 = arr[0].split(':')
          if(arr2.length < 9) {
            let isHex = false
            let nullNum = 0
            let hex = /^[\da-f]{1,4}$/i
            arr2.forEach(el => {
              if(el == '') {
                nullNum ++
                isHex = true
              } else {
                isHex = hex.test(el)
              }
            })
            return isHex && nullNum < 4
          }else {
            return false
          }
        }
      }
      if(isIPv6(this.input)) {
        this.isPass = true
      } else {
        this.isPass = false
      }
    }
  }
}
</script>

