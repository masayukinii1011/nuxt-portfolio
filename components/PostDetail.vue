<template>
  <div>
    <PageTitle :title="title" />
    <div v-if="imgSrc">
      <img :src="imgSrc" :alt="imgAlt" />
    </div>
    <div class="text-body" v-html="body"></div>
  </div>
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
</style>
