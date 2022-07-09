<template>
  <div :class="$style.wrapper">
    <nuxt-link :class="$style.link" :to="`/product/${product.slug}`">
      <img v-lazy="product.image" :class="$style.image" />
      <p :class="$style.name">
        {{ product.name }}
      </p>
      <p :class="$style.price">
        Цена {{ product.price }}
      </p>
    </nuxt-link>
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
  margin: 5px;
  border-radius: 10px;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.name {
  margin-top: 10px;
  text-transform: uppercase;
}
.price {
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
}
</style>
