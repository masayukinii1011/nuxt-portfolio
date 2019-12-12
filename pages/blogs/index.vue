<template>
  <section class="section">
    <div class="container">
      <PostList :title="$nuxt.$route.name" :posts="blogs" />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import PostList from "~/components/PostList.vue";

export default {
  components: {
    PostList
  },
  computed: {
    ...mapState(["blogs"])
  }
};
</script>
