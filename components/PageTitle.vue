<template>
  <section class="section">
    <div class="container has-text-centered">
      <h2 class="has-text-weight-bold title">{{ title }}</h2>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  }
});
</script>
