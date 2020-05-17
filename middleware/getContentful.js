export default async ({ store }) => {
  if (!store.state.about || !store.state.works.length) await store.dispatch('getPosts')
  if (!store.state.categories.length) await store.dispatch('getCategories')
}
