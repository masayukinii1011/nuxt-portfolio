<template>
  <div>
    <page-title-area v-bind:title="$nuxt.$route.name" />
    <div class="works-detail-card-wrap">
      <works-detail-card
        v-for="work in works"
        v-bind:key="work.id"
        v-bind:title="work.title"
        v-bind:text="work.text"
      />
    </div>
  </div>
</template>

<script>
import PageTitleArea from "~/components/PageTitleArea.vue";
import WorksDetailCard from "~/components/WorksDetailCard.vue";

export default {
  components: {
    PageTitleArea,
    WorksDetailCard
  },
  computed: {
    works() {
      return this.$store.state.works.works;
    }
  },
};
</script>

<style scoped lang="scss">
.works-detail-card-wrap {
  display: flex;
  flex-wrap: wrap;
}
</style>
