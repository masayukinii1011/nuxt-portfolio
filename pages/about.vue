<template>
  <div>
    <PostDetail
      :title="$nuxt.$route.name.toUpperCase()"
      :body="$md.render(about.fields.body)"
      :githubLink="about.fields.githubLink"
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
