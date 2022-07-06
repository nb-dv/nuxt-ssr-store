<template>
  <div class="container">
    <h2>Список категорий</h2>
    <div :class="$style.wrapper">
      <div
        v-for="category in categories"
        :key="category.slug"
        :class="$style.block"
      >
        <nuxt-link :to="`/category/${category.slug}`">
          <p>{{ category.name }}</p>
          <img :src="category.image" :class="$style.image" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesList',
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  justify-content: space-between;
}
.block {
  display: flex;
  flex-direction: column;
}
.image {
  width: 300px;
  height: 300px;
}
</style>
