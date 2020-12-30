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
  data: function () {
    return {
      currentPost: ''
    }
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
    const stateWorks = await store.state.works.find(
        (work: { fields: { slug: any } }) => work.fields.slug === params.slug
      )
    const payloadWorks = payload
    let currentPost;

    if(stateWorks) {
      currentPost = stateWorks
    } else if(payloadWorks) {
      currentPost = payloadWorks
    }

    return { currentPost }
  }
};
</script>
