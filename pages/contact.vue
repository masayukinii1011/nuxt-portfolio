<template>
  <div>
    <page-title-area v-bind:title="$nuxt.$route.name" />
<form name="contact" netlify-honeypot="bot-field" action="thank-you"  data-netlify="true" method="post">
  <input type="hidden" name="form-name" value="contact" />
  <p class="hidden"  style="display: none;">
    <label>Don’t fill this out: <input name="bot-field"></label>
  </p>
  <p>
    <label>Email: <input type="text" name="name"></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type=”submit”>Send</button>
  </p>
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
