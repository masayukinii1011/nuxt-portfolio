<template>
  <div>
    <PostList :title="$nuxt.$route.name.toUpperCase()" :posts="works" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostList from "~/components/PostList.vue";

export default {
  components: {
    PostList
  },
  computed: {
    ...mapState(["works"])
  }
};
</script>

