<template>
  <nuxt />
</template>

<script>
export default {
  head () {
    const canonical = `https://mysite.com${this.$route.path
      .toLowerCase()
      .replace(/\/$/, '')}`
    // console.log('canonical  ', canonical) //  https://mysite.com
    return {
      meta: [
        ...this.meta,
      ],
      script: [
        // { src: 'https://markknol.github.io/console-log-viewer/console-log-viewer.js' } //debug phone
      ],
      link: [
        {
          rel: 'canonical',
          href: canonical,
        },
      ],
    }
  },
  computed: {
    meta () {
      return [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no'
        },
        { hid: 'description', name: 'description', content: 'Главная' }
      ]
    },
  },
}
</script>
