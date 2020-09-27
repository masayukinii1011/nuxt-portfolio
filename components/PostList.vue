<template>
  <section class="section">
    <div class="container">
      <PageTitle :title="title" />
      <div v-if="posts.length" class="columns is-multiline is-variable is-4">
        <div v-for="(post, i) in posts" :key="i" class="column is-half">
          <div class="card">
            <nuxt-link
              :to="{
                name: `${post.fields.category.fields.slug}-slug`,
                params: { slug: post.fields.slug }
              }"
            >
              <div class="card-image">
                <figure class="image is-2by1">
                  <img
                    v-if="post.fields.image"
                    :src="post.fields.image.fields.file.url"
                    :alt="post.fields.image.fields.title"
                  />
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-size-4 has-text-centered">
                  {{ post.fields.title }}
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <p class="is-size-4" v-else>There is no post.</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import PageTitle from "~/components/PageTitle.vue";

export default defineComponent({
  components: {
    PageTitle
  },
  props: {
    title: {
      type: String,
      required: true
    },
    posts: {
      required: true
    }
  }
});
</script>

<style scoped lang="scss">
.card {
  transition: 0.2s ease-out;
  border-radius: 6px;

  &:hover {
    box-shadow: 0 0.5em 2em -0.125em rgba(10, 10, 10, 0.4),
      0 0px 0px 1px rgba(10, 10, 10, 0.02);
  }

  img {
    border-radius: 6px;
  }
}

.card-content {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eee;
}
</style>
