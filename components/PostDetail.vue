<template>
  <section class="section post-detail-wrapper">
    <div class="container">
      <PageTitle :title="title" />
      <div class="image-wrapper" v-if="imgSrc">
        <img :src="imgSrc" :alt="imgAlt" />
      </div>
      <div class="text-body" v-html="body"></div>
    </div>
  </section>
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";

export default {
  components: {
    PageTitle
  },
  props: {
    title: "",
    body: "",
    imgSrc: "",
    imgAlt: ""
  }
};
</script>

<style lang="scss">
.post-detail-wrapper {
  .image-wrapper {
    max-width: 640px;
    margin: 0 auto 32px;
  }

  .text-body {
    h3 {
      color: #363636;
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 1.125;
      margin-bottom: 8px;
    }

    p {
      margin-bottom: 16px;
    }
  }
}
</style>
