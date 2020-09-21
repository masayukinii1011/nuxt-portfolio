<template>
  <div>
    <PostDetail
      :title="$nuxt.$route.name.toUpperCase()"
      :body="$md.render(about.fields.body)"
      :githubLink="about.fields.githubLink"
      :demoLink="about.fields.demoLink"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
import PostDetail from "~/components/PostDetail.vue";

export default defineComponent({
  components: {
    PostDetail
  },
  setup(_props, { root }) {
    const about = computed(() => root.$accessor.about);
    return {
      about
    };
  }
});
</script>
