<template>
  <div>
    <page-title-area :title="$nuxt.$route.name" />
    <!--
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <input name="mail" type="email" />
      <button type="submit">送信</button>
    </form>
    -->
    <div class="column is-one-third has-text-left">
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input is-medium" name="name" type="text" />
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input is-medium" name="email" type="email" />
          </div>
        </div>
        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea is-medium" name="message"></textarea>
          </div>
        </div>
        <div class="control">
          <button
            type="submit"
            class="button is-link is-fullwidth has-text-weight-medium is-medium"
          >Send Message</button>
        </div>
      </form>
    </div>
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
