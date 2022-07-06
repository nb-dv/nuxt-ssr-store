<template>
  <div :class="$style.wrapper">
    <nuxt-link :to="`/product/${product.slug}`">
      <p>{{ product.name }}</p>
      <img :class="$style.image" v-lazy="product.image" />
    </nuxt-link>
    <p>Цена {{ product.price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
}
.image {
  width: 300px;
  height: 300px;
}
</style>
