<template>
  <div>
    <PostDetail
      :title="currentPost.fields.title"
      :body="$md.render(currentPost.fields.body)"
      :githubLink="currentPost.fields.githubLink"
      :demoLink="currentPost.fields.demoLink"
      :imgSrc="currentPost.fields.image.fields.file.url"
      :imgAlt="currentPost.fields.image.fields.title"
    />
  </div>
</template>

<script lang="ts">
import PostDetail from "~/components/PostDetail.vue";

export default {
  components: {
    PostDetail
  },
  async asyncData({
    payload,
    store,
    params,
    error
  }: {
    payload: any;
    store: any;
    params: any;
    error: any;
  }) {
    const currentPost =
      payload ||
      (await store.state.works.find(
        (work: { fields: { slug: any } }) => work.fields.slug === params.slug
      ));
    if (currentPost) {
      return { currentPost };
    } else {
      return error({ statusCode: 400 });
    }
  }
};
</script>
