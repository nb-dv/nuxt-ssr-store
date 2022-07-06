<template>
  <div class="container">
<!--<h1>Интернет-магазин "Кемпинг"</h1>-->
    <CategoriesList :categories="categories" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CategoriesList from '../components/commons/CategoriesList'

export default {
  components: {
    CategoriesList,
  },
  async asyncData ({ error, store }) {
    try {
      await store.dispatch('getCategoriesList')
    } catch (err) {
      console.log(err)
      return error({
        statusCode: 404,
        message: 'Категории не найдены или сервер не доступен'
      })
    }
  },
  computed: {
    ...mapState({
      categories: 'categoriesList'
    })
  },
}
</script>
