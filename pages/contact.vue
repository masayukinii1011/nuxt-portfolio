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
import axios from "axios"

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

    const onSubmit = async () => {
      const data = {
        "name": "問い合わせ太郎",
  "email": "hogehoge@example.com",
  "body": "問い合わせ内容の本文"
      }
      //var me = this;
      //this.loading = true;
      //this.showForm = false;
      try {
        const res = await axios.post('https://5kgbw2y6da.execute-api.ap-northeast-1.amazonaws.com/v1/send', data)
        //me.thanks = true;
        //me.loading = false;
        console.log(res)
      } catch(err) {
        //me.hasError = true;
        //me.showForm = true;
        //me.loading = false;
        console.log(err)
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
</style>
