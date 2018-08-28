<template>
  <div class="example">
    <div class="example-content" v-for="product in products">
      <el-input v-model.number="product.quantity" style="width:150px"></el-input>
      <span>
        {{product.quantity}} {{ product.name }}
        <span v-if="product.quantity === 0">
          已售罄
        </span>
      </span>
      
      <el-button @click="product.quantity += 1">
        Add
      </el-button>
      <el-button @click="product.quantity -= 1">
        Reduce
      </el-button>
    </div>
    <h2>Total Inventory: {{ totalProducts }}</h2>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      products: [
        'Boots',
        'Jacket',
        'Hiking Socks'
      ],

    }
  },
  components: {
    
  },
  computed: {
    totalProducts () {
      return this.products.reduce((sum, product) => {
        return sum + product.quantity
      }, 0)
    }
  },
  mounted() {
    this.getProduct()
  },
  methods: {
    // firstApi () {
    //   axios.post('/news/index', 'type=top&key=123456')
    //   .then(data => {
    //       console.log(data)
    //   })
    // },
    getProduct () {
      axios.get('/news/product')
      .then(data => {
        //   console.log(data.data)
          this.products = data.data
      })
    },
  }
}
</script>
<style lang="less" scoped>
.example {
  &-content {
    display: flex;
    justify-content: center;
    span:nth-child(2) {
      display: block;
      line-height: 40px;
      width: 200px;
    }
  }
}
</style>


