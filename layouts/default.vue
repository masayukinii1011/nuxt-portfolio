<template>
  <div>
    <my-header />
    <nuxt />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from "~/components/MyHeader.vue";
import MyFooter from "~/components/MyFooter.vue";

export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<style lang="scss">
html {
  font-family:"Noto Sans JP", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

[v-cloak] { display: none }
</style>
