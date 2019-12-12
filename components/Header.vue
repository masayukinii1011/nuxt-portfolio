<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <h1>msykn</h1>
          </nuxt-link>
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div v-if="categories.length" class="navbar-end">
            <nuxt-link
              v-for="(category, i) in categories"
              v-bind:key="i"
              :to="{ name: category.fields.slug }"
              class="navbar-item"
            >{{category.fields.title}}</nuxt-link>
            <nuxt-link to="/contact" class="navbar-item">Contact</nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";
import client from "~/plugins/contentful";

export default {
  computed: {
    ...mapState(["categories"])
  }
};
</script>
