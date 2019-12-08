<template>
  <div class="container">
    <nuxt-link :to="{ name: `${category}-slug`, params: { slug: slug }}">
      <div class="title">{{title}}</div>
      <div class="text">{{text}}</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: "",
    text: "",
    category: "",
    slug: ""
  }
};
</script>

<style scoped lang="scss">
.container {
  height: 256px;
  width: calc(50% - 66px);
  margin: 0 32px 32px;
  border: 1px solid rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  title {
    color: red;
  }
  text {
    color: green;
  }
}
</style>
