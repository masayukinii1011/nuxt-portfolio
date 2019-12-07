import client from '~/plugins/contentful'

export const state = () => ({
  posts: [],
  categories: [],
})

//state(個別に記事)にアクセスする用
export const getters = {
  linkTo: () => (name, obj) => {
    return { name: `${name}-slug`, params: { slug: obj.fields.slug } }
  }
}

//データをstateにセット
export const mutations = {
  //Post
  setPosts(state, payload) {
    state.posts = payload
  },
  //Category
  setCategories(state, payload) {
    state.categories = payload
  }
}

//Contentful APIを取得
export const actions = {
  //Post
  async getPosts({ commit }) {
    await client.getEntries({
      content_type: process.env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishedAt' // desc
    }).then(res =>
      commit('setPosts', res.items)
    ).catch(console.error)
  },
  //Category
  async getCategories({ commit }) {
    await client.getEntries({
      content_type: 'category',
      order: 'fields.id'
    }).then(res =>
      commit('setCategories', res.items)
    ).catch(console.error)
  }
}
