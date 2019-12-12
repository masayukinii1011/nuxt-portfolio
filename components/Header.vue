<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <h1 class="has-text-weight-bold">msykn</h1>
          </nuxt-link>
          <a
            @click="isOpen = !isOpen"
            :class="{'is-active': isOpen}"
            class="navbar-burger burger"
            role="button"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div :class="{'is-active': isOpen}" id="navbarMenu" class="navbar-menu">
          <div v-if="categories.length" class="navbar-end">
            <nuxt-link
              v-for="(category, i) in categories"
              v-bind:key="i"
              :to="{ name: category.fields.slug }"
              class="navbar-item has-text-weight-bold"
            >{{category.fields.title}}</nuxt-link>
            <nuxt-link to="/contact" class="navbar-item has-text-weight-bold">Contact</nuxt-link>
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
  data: function() {
    return {
      isOpen: false
    };
  },
  computed: {
    ...mapState(["categories"])
  }
};
</script>
