<template>
  <div class="container">
    <PostDetail
      :title="$nuxt.$route.name"
      :body="$md.render(about.fields.body)"
      :imgSrc="about.fields.image.fields.file.url"
      :imgAlt="about.fields.image.fields.title"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostDetail from "~/components/PostDetail.vue";

export default {
  components: {
    PostDetail
  },
  computed: {
    ...mapState(["about"])
  }
};
</script>
