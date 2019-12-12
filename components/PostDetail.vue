<template>
  <div>
    <PageTitle :title="title" />
    <div>
      <img :src="imgSrc" :alt="imgAlt" />
    </div>
    <div v-html="body"></div>
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
