<template>
  <section class="section">
    <div class="container">
      <PageTitle :title="$nuxt.$route.name.toUpperCase()" />
      <div class="columns is-centered">
        <div class="column is-half">
          <form name="contact" method="post" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div class="field">
              <label class="label is-size-5">Name</label>
              <div class="control">
                <input v-model="name" class="input is-medium" name="name" type="text" />
              </div>
            </div>
            <div class="field">
              <label class="label is-size-5">Email</label>
              <div class="control">
                <input v-model="email" class="input is-medium" name="email" type="email" />
              </div>
            </div>
            <div class="field">
              <label class="label is-size-5">Message</label>
              <div class="control">
                <textarea v-model="message" class="textarea is-large" name="message"></textarea>
              </div>
            </div>
            <div class="control">
              <button
                :disabled="checkForm"
                type="submit"
                class="button is-success is-fullwidth is-large"
              >Send Message</button>
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
  },
  data: function() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  computed: {
    checkForm: function() {
      if (this.name && this.validEmail(this.email) && this.message) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>
