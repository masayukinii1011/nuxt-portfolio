<template>
  <div>
    <PageTitleArea v-bind:title="$nuxt.$route.name" />
      <div v-if="blogs.length" class="detail-card-wrap">
        <DetailCard
          v-for="(blog, i) in blogs"
          v-bind:key="i"
          v-bind:title="blog.fields.title"
          v-bind:text="blog.fields.body"
          v-bind:category="blog.fields.category.fields.slug"
          v-bind:slug="blog.fields.slug"
        />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PageTitleArea from "~/components/PageTitleArea.vue";
import DetailCard from "~/components/DetailCard.vue";

export default {
  components: {
    PageTitleArea,
    DetailCard
  },
  computed: {
    ...mapState(['blogs'])
  },
}
</script>

<style>
.detail-card-wrap {
  display: flex;
  flex-wrap: wrap;
}
</style>

