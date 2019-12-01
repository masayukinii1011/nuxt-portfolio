<template>
  <div>
    <nuxt-link
      :to="{ name: 'works-title', params: { title: title }}"
    >{{title}}{{text}}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String
  }
};
</script>

<style scoped lang="scss">
div {
  height: 256px;
  width: calc(50% - 66px);
  margin: 0 32px 32px;
  border: 1px solid rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}
</style>
