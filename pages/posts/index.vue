<template>
  <div>
    <template v-if="posts.length">
      <ul v-for="(post, i) in posts" :key="i">
        <li>{{ post.fields.title }}</li>
        <ul>
          <li>{{ post.fields.body }}</li>
          <li>{{ post.fields.publishDate }}</li>
        </ul>
        <nuxt-link :to="linkTo('posts', post)">この記事をみる</nuxt-link>
      </ul>
    </template>
    <template v-else>投稿された記事はありません。</template>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["posts"]),
    ...mapGetters(["linkTo"])
  }
};
</script>
