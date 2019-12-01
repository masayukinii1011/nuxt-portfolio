<template>
  <div>
    <page-title-area v-bind:title="$nuxt.$route.name" />
  </div>
</template>

<script>
import PageTitleArea from "~/components/PageTitleArea.vue";

export default {
  components: {
    PageTitleArea
  }
};
</script>

<style scoped lang="scss">
</style>
