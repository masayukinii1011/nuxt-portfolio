<template>
  <div>
    <template v-if="currentPost">
      <PageTitleArea :title="currentPost.fields.title" />
      <div class="publishedAt">{{ currentPost.fields.publishDate }}</div>
      <div>
        <img
          :src="currentPost.fields.image.fields.file.url"
          :alt="currentPost.fields.image.fields.title"
        />
      </div>
      <div v-html="$md.render(currentPost.fields.body)"></div>
    </template>
  </div>
</template>

<script>
import client from "~/plugins/contentful";
import PageTitleArea from "~/components/PageTitleArea.vue";

export default {
  components: {
    PageTitleArea
  },
  async asyncData({ payload, store, params, error }) {
    const currentPost =
      payload ||
      (await store.state.blogs.find(blog => blog.fields.slug === params.slug));
    if (currentPost) {
      return { currentPost };
    } else {
      return error({ statusCode: 400 });
    }
  }
};
</script>

<style>
</style>

