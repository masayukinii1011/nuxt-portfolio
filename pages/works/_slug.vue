<template>
  <div>
    <PostDetail
      :title="currentPost.fields.title"
      :body="$md.render(currentPost.fields.body)"
      :imgSrc="currentPost.fields.image.fields.file.url"
      :imgAlt="currentPost.fields.image.fields.title"
    />
  </div>
</template>

<script>
import client from "~/plugins/contentful";
import PostDetail from "~/components/PostDetail.vue";

export default {
  components: {
    PostDetail
  },
  async asyncData({ payload, store, params, error }) {
    const currentPost =
      payload ||
      (await store.state.works.find(work => work.fields.slug === params.slug));
    if (currentPost) {
      return { currentPost };
    } else {
      return error({ statusCode: 400 });
    }
  }
};
</script>
