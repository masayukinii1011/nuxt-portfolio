import { Middleware } from "@nuxt/types";

const getContentful: Middleware = async ({ store }) => {
  if (!store.state.about || !store.state.works.length) {
    await store.dispatch("getPosts");
  }
  if (!store.state.categories.length) {
    await store.dispatch("getCategories");
  }
};

export default getContentful;
