<template>
  <div>
    <template v-if="currentPost">
    <PageTitleArea v-bind:title="currentPost.fields.title" />
    <div>{{ currentPost.fields.body }}</div>
    </template>
  </div>
</template>

<script>
import client from '~/plugins/contentful';
import PageTitleArea from "~/components/PageTitleArea.vue";

export default {
  components: {
    PageTitleArea
  },
  async asyncData({ payload, store, params, error }) {
    const currentPost = payload || await store.state.works.find(work => work.fields.slug === params.slug)
    if (currentPost) {
      return { currentPost }
    } else {
      return error({ statusCode: 400 })
    }
  }
};
</script>

<style>
</style>
