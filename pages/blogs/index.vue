<template>
  <div>
    <PageTitleArea :title="$nuxt.$route.name" />
    <div v-if="blogs.length" class="detail-card-wrap">
      <DetailCard
        v-for="(blog, i) in blogs"
        :key="i"
        :title="blog.fields.title"
        :text="blog.fields.body"
        :category="blog.fields.category.fields.slug"
        :slug="blog.fields.slug"
        :imageSrc="blog.fields.image.fields.file.url"
        :imageAlt="blog.fields.image.fields.title"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PageTitleArea from "~/components/PageTitleArea.vue";
import DetailCard from "~/components/DetailCard.vue";

export default {
  components: {
    PageTitleArea,
    DetailCard
  },
  computed: {
    ...mapState(["blogs"])
  }
};
</script>

<style>
.detail-card-wrap {
  display: flex;
  flex-wrap: wrap;
}
</style>

