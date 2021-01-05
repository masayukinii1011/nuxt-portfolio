<template>
  <section class="section">
    <div class="container body-container">
      <PageTitle :title="this.$route.name.toUpperCase()" />
      <div class="columns is-centered">
        <div class="column is-half">
          <form name="contact" method="post" @submit.prevent="onSubmit()">
            <input type="hidden" name="form-name" value="contact" />
            <div class="field">
              <label class="label is-size-5">Name</label>
              <div class="control">
                <input
                  v-model="state.form.name"
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
                  v-model="state.form.email"
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
                  v-model="state.form.message"
                  class="textarea is-large"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div class="control">
              <p class="mb-3 has-text-centered" v-if="state.isDone">
                送信が完了しました。
              </p>
              <p class="mb-3 has-text-centered has-text-danger" v-if="state.isError">
                通信中にエラーが発生しました。
              </p>
              <button
                :disabled="state.checkForm || state.isLoading"
                type="submit"
                class="button is-success is-fullwidth is-large"
              >
                <loading v-if="state.isLoading" type="spin" color="#fff" :size="{ width: '24px', height: '24px' }"></loading>
                <span v-else>Send Message</span>
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
import axios from "axios"

export default defineComponent({
  components: {
    PageTitle
  },
  setup() {
    const state = reactive({
      form: {
        name: "",
        email: "",
        message: ""
      },
      isLoading: false,
      isError: false,
      isDone: false,
      checkForm: computed(() => {
        if (state.form.name && validEmail(state.form.email) && state.form.message) {
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

    const onSubmit = async () => {
      state.isLoading = true;
      state.isDone = false;
      state.isError = false;
      try {
        const res = await axios.post(process.env.SEND_MESSEGE_API, state.form)
        state.isLoading = false;
        state.isDone = true;
        state.form.name = ""
        state.form.email = ""
        state.form.message = ""
      } catch {
        state.isLoading = false;
        state.isError = true;
      };
    }

    return {
      state,
      validEmail,
      onSubmit
    };
  }
});
</script>

<style scoped lang="scss">
.input,
.textarea {
  background: #fafafa;
}

p {
  color: #363636;
  line-height: 1.25;
  font-size: 0.9rem;
}
</style>
