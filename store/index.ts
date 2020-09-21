import { MutationTree, ActionTree } from "vuex";
import client from "~/plugins/contentful";

export const state = () => ({
  about: null,
  works: [],
  categories: []
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  setAbout: (state, payload) => (state.about = payload),
  setWorks: (state, payload) => (state.works = payload),
  setCategories: (state, payload) => (state.categories = payload)
};

//Contentful APIを取得
export const actions: ActionTree<RootState, RootState> = {
  async getPosts({ commit }) {
    await client
      .getEntries({
        content_type: process.env.CTF_BLOG_POST_TYPE_ID,
        order: "-fields.publishDate"
      })
      .then((entries: { items: any[] }) => {
        const about = entries.items.find(
          (item: { fields: { category: { fields: { slug: string } } } }) => {
            return item.fields.category.fields.slug === "about";
          }
        );
        const works = entries.items.filter(
          (item: { fields: { category: { fields: { slug: string } } } }) => {
            return item.fields.category.fields.slug === "works";
          }
        );
        commit("setAbout", about);
        commit("setWorks", works);
      })
      .catch(console.error);
  },
  async getCategories({ commit }) {
    await client
      .getEntries({
        content_type: "category",
        order: "fields.id"
      })
      .then((entries: { items: any }) => commit("setCategories", entries.items))
      .catch(console.error);
  }
};
