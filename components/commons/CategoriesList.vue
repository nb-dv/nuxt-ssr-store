<template>
  <div class="container">
    <h2 :class="$style.categories">Категории</h2>
    <div :class="$style.wrapper">
      <div
        v-for="category in categories"
        :key="category.slug"
        :class="$style.block"
      >
        <nuxt-link :to="`/category/${category.slug}`" :class="$style.link">
          <p :class="$style.name">
            {{ category.name }}
          </p>
          <img :src="category.image" :class="$style.image" :alt="category.slug"/>
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
  display: grid;
  column-gap: 10px;
  row-gap: 32px;
  grid-template-columns: 1fr;
  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
.categories {
  color: #413e3e;
}
.block {
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow: hidden;
  border-radius: 10px;
  @media (min-width: 750px) {
    max-height: 400px;
  }
}
.image {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.link {
  display: block;
  height: 100%;
}
.name {
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
  color: #413e3e;
}
</style>
