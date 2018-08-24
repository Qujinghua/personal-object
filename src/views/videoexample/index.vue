<template>
  <div>
      <ul>
        <li v-for="product in products">{{product}}</li>
      </ul>
    <!-- <h2>{{ product }} are in stock.</h2> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
        'Boots',
        'Jacket',
        'Hiking Socks'
      ]
    }
  },
  components: {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

