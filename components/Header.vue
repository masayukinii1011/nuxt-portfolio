<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand has-background-link">
          <nuxt-link class="navbar-item" to="/">
            <h1 class="is-size-4 has-text-weight-bold has-text-white">msykn</h1>
          </nuxt-link>
          <a
            @click="isOpen = !isOpen"
            :class="{ 'is-active': isOpen }"
            class="navbar-burger burger has-text-white"
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
        <!--PC-->
        <div
          class="navbar-menu has-background-link is-shadowless is-hidden-touch"
          id="navbarMenu"
        >
          <div v-if="categories.length" class="navbar-end">
            <nuxt-link
              v-for="(category, i) in categories"
              :key="i"
              :to="{ name: category.fields.slug }"
              class="navbar-item has-text-weight-bold has-text-white"
              >{{ category.fields.title }}</nuxt-link
            >
            <nuxt-link
              to="/music"
              class="navbar-item has-text-weight-bold has-text-white"
              >Music</nuxt-link
            >
            <nuxt-link
              to="/contact"
              class="navbar-item has-text-weight-bold has-text-white"
              >Contact</nuxt-link
            >
          </div>
        </div>
        <!--Tablet-->
        <transition>
          <div
            v-if="isOpen"
            class="navbar-menu has-background-link is-shadowless is-active is-hidden-desktop"
            id="navbarMenu"
          >
            <div v-if="categories.length" class="navbar-end">
              <nuxt-link
                v-for="(category, i) in categories"
                @click.native="isOpen = false"
                :key="i"
                :to="{ name: category.fields.slug }"
                class="navbar-item has-text-weight-bold has-text-white"
                >{{ category.fields.title }}</nuxt-link
              >
              <nuxt-link
                to="/music"
                class="navbar-item has-text-weight-bold has-text-white"
                >Music</nuxt-link
              >
              <nuxt-link
                @click.native="isOpen = false"
                to="/contact"
                class="navbar-item has-text-weight-bold has-text-white"
                >Contact</nuxt-link
              >
            </div>
          </div>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup(_props, { root }) {
    const categories = computed(() => root.$accessor.categories);
    const isOpen = ref(false);
    return {
      categories,
      isOpen
    };
  }
});
</script>

<style scoped lang="scss">
header {
  position: fixed;
  width: 100%;
  opacity: 0.9;
  z-index: 1;
}

.navbar {
  background: transparent;
}

a.navbar-item:focus,
a.navbar-item:focus-within {
  background: transparent;
}

a.navbar-item:hover {
  background: rgba(0, 0, 0, 0.05);
}

.navbar-menu {
  transition: 0.2s ease-out;
  transform-origin: top;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: scaleY(0);
}

@media all and (min-width: 1024px) {
  .navbar {
    background-color: #3273dc;
  }
}
</style>
