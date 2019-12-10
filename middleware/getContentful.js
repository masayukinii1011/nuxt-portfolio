export default async ({ store }) => {
  if (!store.state.posts.length || !store.state.about || !store.state.works.length || !store.state.blogs.length) await store.dispatch('getPosts')
  if (!store.state.categories.length) await store.dispatch('getCategories')
}