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
                <input
                  v-model="state.name"
                  class="input is-medium"
                  name="name"
                  type="text"
                />
              </div>
            </div>
            <div class="field">
              <label class="label is-size-5">Email</label>
              <div class="control">
                <input
                  v-model="state.email"
                  class="input is-medium"
                  name="email"
                  type="email"
                />
              </div>
            </div>
            <div class="field">
              <label class="label is-size-5">Message</label>
              <div class="control">
                <textarea
                  v-model="state.message"
                  class="textarea is-large"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div class="control">
              <button
                :disabled="state.checkForm"
                type="submit"
                class="button is-success is-fullwidth is-large"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "@nuxtjs/composition-api";
import PageTitle from "~/components/PageTitle.vue";

export default defineComponent({
  components: {
    PageTitle
  },
  setup() {
    const state = reactive({
      name: "",
      email: "",
      message: "",
      checkForm: computed(() => {
        if (state.name && validEmail(state.email) && state.message) {
          return false;
        } else {
          return true;
        }
      })
    });

    const validEmail = (email: string) => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };

    return {
      state,
      validEmail
    };
  }
});
</script>

<style scoped lang="scss">
.container {
  background: #fefefe;
  padding: 0 32px 32px;
  margin-top: 64px;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);

  .input,
  .textarea {
    background: #fafafa;
  }
}
</style>
