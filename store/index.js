// function for mock API
const sleep = m => new Promise(r => setTimeout(r, m))

const categories = [
  {
    id: 'backpacks',
    name: 'Рюкзаки',
    slug: 'backpacks',
    image: 'https://images.unsplash.com/photo-1480859786001-3f3bfdf20f2c',
    title: 'Рюкзаки',
    descr: 'Описание',
    metaDescr: 'Мета описание',
    products: [],
  },
  {
    id: 'tents',
    name: 'Палатки',
    slug: 'tents',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4',
    title: 'Палатки',
    descr: 'Описание',
    metaDescr: 'Мета описание',
    products: [],
  },
  {
    id: 'thermoses',
    name: 'Термосы',
    slug: 'thermoses',
    image: 'https://images.unsplash.com/photo-1488917577739-61048c7940ff',
    title: 'Термосы',
    descr: 'Описание',
    metaDescr: 'Мета описание',
    products: [],
  },
  {
    id: 'hike',
    name: 'Все для похода',
    slug: 'hike',
    image: 'https://images.unsplash.com/photo-1625773698651-074f0379983e',
    title: 'Разное',
    descr: 'Описание',
    metaDescr: 'Мета описание',
    products: [],
  }
]
function addProductsToCategory (products, category) {
  const categoryInner = { ...category, products: [] }
  products.forEach(product => {
    if (product.category_id === category.id) {
      categoryInner.products.push({
        id: product.id,
        name: product.pName,
        slug: product.pSlug,
        price: product.pPrice,
        image: `https://source.unsplash.com/300x300/?${product.pName}`
      })
    }
  })
  return categoryInner
}

export const state = () => ({
  categoriesList: [],
  currentCategory: {},
})

export const mutations = {
  SET_CATEGORIES_LIST (state, categories) {
    state.categoriesList = categories
  },
  SET_CURRENT_CATEGORY (state, category) {
    state.currentCategory = category
  }
}

export const actions = {
  async getCategoriesList ({ commit }) {
    try {
      await sleep(1000)
      await commit('SET_CATEGORIES_LIST', categories)
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  async getCurrentCategory ({ commit }, { route }) {
    await sleep(1000)
    const category = categories.find(cat => cat.slug === route.params.CategorySlug)
    const products = await this.$axios.$get('/mock/products.json')
    await commit('SET_CURRENT_CATEGORY', addProductsToCategory(products, category))
  }
}
