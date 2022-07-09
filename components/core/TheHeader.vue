<template>
  <header class="header" ref="header">
    <div class="container header__container">
      <div class="header__logo">
        <nuxt-link to="/">
          <img src="~/assets/images/header/logo.png" alt="logo">
          <span class="header__logo-span">STORE</span>
        </nuxt-link>
      </div>
      <div class="header__menu">
        <div class="header__item">
          <nuxt-link to="/favorites">
            <img src="~/assets/images/header/like.svg" alt="favorite">
          </nuxt-link>
        </div>
        <div class="header__item">
          <img src="~/assets/images/header/search.svg" alt="search">
        </div>
        <div class="header__item">
          <nuxt-link to="/cart">
            <img src="~/assets/images/header/cart.svg" alt="search">
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
// import CartSvg from '~~/assets/images/header/cart.svg?inline'
export default {
  components: {
    // CartSvg
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler)
    this.scrollHandler()
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler)
  },
  methods: {
    scrollHandler() {
      console.log(window.pageYOffset)
      console.log(this.$refs.header)
      window.pageYOffset > 10 ? this.$refs.header.classList.add('header--opacity') : this.$refs.header.classList.remove('header--opacity')
    },
  },
}
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 84px;
  width: 100%;
  transition: background-color .1s linear;
  &--opacity {
    background-color: rgba(245, 245, 245, 0.9);
  }
  padding: 10px 0;
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    cursor: pointer;
    & > a {
      display: flex;
      align-items: center;
    }
    &-span {
      font-size: 20px;
      margin-left: 10px;
    }
  }
  &__menu {
    display: flex;
    align-items: center;
  }
  &__item {
    width: 20px;
    height: 20px;
    margin-left: 15px;
    cursor: pointer;
  }
}
//.svg1 {
//  margin-right: 3px;
//  width: 40px;
//  fill: #000;
//  // noselect
//  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
//  -moz-user-select: none; /* mozilla browsers */
//  -khtml-user-select: none; /* webkit (konqueror) browsers */
//  -ms-user-select: none; /* IE10+ */
//  fill: red;
//}
</style>
