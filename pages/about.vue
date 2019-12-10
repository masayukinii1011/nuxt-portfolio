<template>
  <div>
    <page-title-area :title="$nuxt.$route.name" />
    <div>
      <img :src="about.fields.image.fields.file.url" :alt="about.fields.image.fields.title" />
    </div>
    <div v-html="$md.render(about.fields.body)"></div>
  </div>
</template>

<script>
import PageTitleArea from "~/components/PageTitleArea.vue";
import { mapState } from "vuex";

export default {
  components: {
    PageTitleArea
  },
  computed: {
    ...mapState(["about"])
  }
};
</script>

<style scoped lang="scss">
</style>
