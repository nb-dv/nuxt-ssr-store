<template>
  <div class="container">
    <h1>{{ category.name }}</h1>
    <p>{{ category.descr }}</p>
    <div :class="$style.productList">
      <div
        v-for="product in category.products"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductCard from '../../components/category/ProductСard'

export default {
  components: {
    ProductCard,
  },
  async asyncData ({ store, route, error }) {
    try {
      await store.dispatch('getCurrentCategory', { route })
    } catch (err) {
      console.log(err)
      return error({
        statusCode: 404,
        message: 'Категория не найдена или сервер не доступен'
      })
    }
  },
  head () {
    return {
      title: this.category.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.category.metaDescr
        }
      ]
    }
  },
  computed: {
    ...mapState({
      category: 'currentCategory'
    })
  },
}
</script>

<style lang="scss" module>
.productList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
