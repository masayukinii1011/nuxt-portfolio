<template>
  <div>
    <page-title-area v-bind:title="$nuxt.$route.name" />
    <div>{{about.fields.body}}</div>
  </div>
</template>

<script>
import PageTitleArea from "~/components/PageTitleArea.vue";
import {mapState} from 'vuex';

export default {
  components: {
    PageTitleArea
  },
  computed: {
    ...mapState(['about'])
  },
};
</script>

<style scoped lang="scss">
</style>
