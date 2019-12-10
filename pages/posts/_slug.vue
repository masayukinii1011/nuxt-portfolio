<template>
  <div>
    <template v-if="currentPost">
      {{ currentPost.fields.title }}
      {{ currentPost.fields.publishDate }}
      <br />
      {{ currentPost.fields.body }}
    </template>

    <template v-else>お探しの記事は見つかりませんでした。</template>
  </div>
</template>

<script>
import client from "~/plugins/contentful";

export default {
  async asyncData({ payload, store, params, error }) {
    const currentPost =
      payload ||
      (await store.state.posts.find(post => post.fields.slug === params.slug));

    if (currentPost) {
      return { currentPost };
    } else {
      return error({ statusCode: 400 });
    }
  }
};
</script>
