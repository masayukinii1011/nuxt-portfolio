<template>
  <section class="section">
    <div class="container body-container">
      <PageTitle :title="'old'.toUpperCase()" />
      <div>
        old
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import PageTitle from "~/components/PageTitle.vue";

export default defineComponent({
  components: {
    PageTitle
  },
  setup() {}
});
</script>
