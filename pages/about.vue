<template>
  <section class="section">
    <div class="container">
      <PostDetail :title="$nuxt.$route.name.toUpperCase()" :body="$md.render(about.fields.body)" />
    </div>
  </section>
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
