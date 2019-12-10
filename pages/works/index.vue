<template>
  <div>
    <PageTitleArea :title="$nuxt.$route.name" />
    <div v-if="works.length" class="detail-card-wrap">
      <DetailCard
        v-for="(work, i) in works"
        :key="i"
        :title="work.fields.title"
        :text="work.fields.body"
        :category="work.fields.category.fields.slug"
        :slug="work.fields.slug"
        :imageSrc="work.fields.image.fields.file.url"
        :imageAlt="work.fields.image.fields.title"
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
    ...mapState(["works"])
  }
};
</script>

<style>
.detail-card-wrap {
  display: flex;
  flex-wrap: wrap;
}
</style>
