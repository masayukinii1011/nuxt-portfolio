<template>
  <div>
    <page-title-area v-bind:title="work.title" />
    <div>{{work.text}}</div>
  </div>
</template>

<script>
import PageTitleArea from "~/components/PageTitleArea.vue";

export default {
  components: {
    PageTitleArea
  },
  computed: {
    work() {
      for (let work of this.$store.state.works.works) {
        if (this.$route.params.title == work.title) {
          return work;
        }
      }
      return null;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
