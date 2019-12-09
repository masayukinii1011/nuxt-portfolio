import client from '~/plugins/contentful'

export const state = () => ({
  posts: [],
  about: '',
  works: [],
  blogs: [],
  categories: []
})

//stateにアクセスする用
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
  setAbout(state, payload) {
    state.about = payload
  },
  setWorks(state, payload) {
    state.works = payload
  },
  setBlogs(state, payload) {
    state.blogs = payload
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
      order: '-fields.publishedAt'
    }).then(entries => {
      const about = entries.items.find(item => {
        return item.fields.category.fields.slug === 'about'
      })
      const works = entries.items.filter(item => {
        return item.fields.category.fields.slug === 'works'
      })
      const blogs = entries.items.filter(item => {
        return item.fields.category.fields.slug === 'blogs'
      })
      commit('setPosts', entries.items)
      commit('setAbout', about)
      commit('setWorks', works)
      commit('setBlogs', blogs)
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
