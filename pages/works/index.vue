<template>
  <div>
    <PostList :title="$nuxt.$route.name.toUpperCase()" :posts="works" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@nuxtjs/composition-api";
import PostList from "~/components/PostList.vue";

export default defineComponent({
  components: {
    PostList
  },
  setup(_props, { root }) {
    const works = computed(() => root.$accessor.works);
    return {
      works
    };
  }
});
</script>
