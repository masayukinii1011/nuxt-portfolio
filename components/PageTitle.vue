<template>
  <section class="section">
    <div class="container has-text-centered">
      <h2 class="has-text-weight-bold title">{{ title }}</h2>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    title: ""
  }
};
</script>
