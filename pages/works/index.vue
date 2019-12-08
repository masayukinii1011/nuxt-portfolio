<template>
  <div>
    <PageTitleArea v-bind:title="$nuxt.$route.name" />
      <div v-if="works.length" class="detail-card-wrap">
        <DetailCard
          v-for="(work, i) in works"
          v-bind:key="i"
          v-bind:title="work.fields.title"
          v-bind:text="work.fields.body"
          v-bind:category="work.fields.category.fields.slug"
          v-bind:slug="work.fields.slug"
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
    ...mapState(['works'])
  },
}
</script>

<style>
.detail-card-wrap {
  display: flex;
  flex-wrap: wrap;
}
</style>
