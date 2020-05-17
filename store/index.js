import client from '~/plugins/contentful'

export const state = () => ({
  about: '',
  works: [],
  categories: []
})

//データをstateにセット
export const mutations = {
  //Post
  setAbout(state, payload) {
    state.about = payload
  },
  setWorks(state, payload) {
    state.works = payload
  },
  //Category
  setCategories(state, payload) {
    state.categories = payload
  }
}

//Contentful APIを取得
export const actions = {
  //Blog Post
  async getPosts({ commit }) {
    await client.getEntries({
      content_type: process.env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishDate'
    }).then(entries => {
      const about = entries.items.find(item => {
        return item.fields.category.fields.slug === 'about'
      })
      const works = entries.items.filter(item => {
        return item.fields.category.fields.slug === 'works'
      })
      commit('setAbout', about)
      commit('setWorks', works)
    }).catch(console.error)
  },
  //Category
  async getCategories({ commit }) {
    await client.getEntries({
      content_type: 'category',
      order: 'fields.id'
    }).then(entries =>
      commit('setCategories', entries.items)
    ).catch(console.error)
  }
}
