<template>
  <div>
    <page-title-area :title="$nuxt.$route.name" />
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <input name="mail" type="email" />
      <button type="submit">送信</button>
    </form>
  </div>
</template>

<script>
import PageTitleArea from "~/components/PageTitleArea.vue";

export default {
  components: {
    PageTitleArea
  }
};
</script>

<style scoped lang="scss">
</style>
