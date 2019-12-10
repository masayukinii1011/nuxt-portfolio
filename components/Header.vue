<template>
  <header>
    <h1>
      <nuxt-link to="/">msykn</nuxt-link>
    </h1>
    <template v-if="categories.length">
      <ul>
        <li v-for="(category, i) in categories" v-bind:key="i">
          <nuxt-link :to="{ name: category.fields.slug }">{{category.fields.title}}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </template>
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

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  background: #4fc3f7;
}

h1 {
  font-size: 24px;
  padding: 12px 8px;

  @media screen and (max-width: 425px) {
    font-size: 18px;
  }
}

a {
  color: #fff;
  transition: 0.1s ease-out;
  padding-bottom: 2px;

  &:hover {
    border-bottom: 2px solid #fff;
  }
}

ul {
  display: flex;
  align-items: center;
}

li {
  font-weight: bold;
  font-size: 18px;
  padding: 0px 8px;
  list-style: none;

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
}
</style>
