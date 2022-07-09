import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

export default (context, inject) => {
  Vue.use(VueLazyload, {
    preLoad: 0,
    error: 'https://via.placeholder.com/300',
    loading: require(`${'~/assets/images/giphy-loader.gif'}`),
    attempt: 3,
    lazyComponent: true,
    observer: true,
    throttleWait: 500
  })
}
