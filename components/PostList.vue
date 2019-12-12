<template>
  <div>
    <PageTitle :title="title" />
    <div v-if="posts.length" class="columns is-multiline is-variable is-4">
      <div v-for="(post, i) in posts" :key="i" class="column is-half">
        <div class="card">
          <nuxt-link
            :to="{ name: `${post.fields.category.fields.slug}-slug`, params: { slug: post.fields.slug }}"
          >
            <div class="card-image">
              <figure class="image is-2by1">
                <img :src="post.fields.image.fields.file.url" :alt="post.fields.image.fields.title" />
              </figure>
            </div>
            <div class="card-content">
              <p class="title has-text-centered">{{post.fields.title}}</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import PostList from "~/components/PostList.vue";

export default {
  components: {
    PageTitle,
    PostList
  },
  props: {
    title: "",
    posts: ""
  }
};
</script>
