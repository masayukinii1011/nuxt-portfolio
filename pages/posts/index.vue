<template>
  <div>
    <template v-if="posts.length">
      <ul v-for="(post, i) in posts" :key="i">
        <li>{{ post.fields.title }}</li>
        <ul>
          <li>{{ post.fields.body }}</li>
          <li>{{ post.fields.publishedAt }}</li>
        </ul>
        <nuxt-link :to="linkTo(post)">この記事をみる</nuxt-link>
      </ul>
    </template>
    <template v-else>
      投稿された記事はありません。
    </template>
  </div>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  computed: {
    linkTo: () => (obj) => {
      return { name: 'posts-slug', params: { slug: obj.fields.slug } }
    }
  },
  async asyncData({ env }) {
    let posts = []
    await client.getEntries({
      content_type: env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishedAt'
    }).then(res => (posts = res.items)).catch(console.error)
    return { posts }
  }
}
</script>
