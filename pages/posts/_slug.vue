<template>
  <div>
    <template v-if="currentPost">
      {{ currentPost.fields.title }}
      {{ currentPost.fields.publishedAt }}<br>
      {{ currentPost.fields.body }}
    </template>

    <template v-else>
      お探しの記事は見つかりませんでした。
    </template>
  </div>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  async asyncData({ env, params }) {
    let currentPost = null
    await client.getEntries({
      content_type: env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(res => (currentPost = res.items[0])).catch(console.error)

    return { currentPost }
  }
}
</script>
