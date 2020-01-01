<template>
  <section class="section">
    <div class="container">
      <PageTitle :title="$nuxt.$route.name" />
      <div class="columns is-centered">
        <div class="column is-half">
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
                <textarea class="textarea is-large" name="message"></textarea>
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-success is-fullwidth is-large">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";

export default {
  components: {
    PageTitle
  }
};
</script>
