<template>
  <div>
    <ul>
      <li v-for="product in products">
        <input type="number" v-model.number="product.quantity">
        {{product.quantity}} {{ product.name }}
        <span v-if="product.quantity === 0">
          - OUT OF STOCK
        </span>
        <button @click="product.quantity += 1">
          Add
        </button>
      </li>
    </ul>
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

