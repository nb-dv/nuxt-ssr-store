<template>
  <div class="container">
    <h1>{{ category.name }}</h1>
    <p class="category__descr">{{ category.descr }}</p>
    <div class="category__list">
      <ProductCard
        v-for="product in category.products"
        :key="product.id"
        class="category__item"
        :product="product"
      />
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
  async asyncData({ store, route, error }) {
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
  head() {
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

<style lang="scss" scoped>
.category {
  &__descr {
    font-size: 16px;
    font-weight: 600;
    margin: 15px 0;
  }
  &__list {
    display: grid;
    column-gap: 10px;
    row-gap: 60px;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1100px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
