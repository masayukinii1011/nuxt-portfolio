<template>
  <section class="section post-detail-wrapper">
    <div class="container">
      <PageTitle :title="title" />
      <div class="image-wrapper" v-if="imgSrc">
        <img :src="imgSrc" :alt="imgAlt" />
      </div>
      <div v-if="githubLink || demoLink" class="button-wrap">
        <a v-if="githubLink" :href="githubLink" target="_blank" class="button">
          <img src="/github_logo.png" alt="github logo" />
        </a>
        <a v-if="demoLink" :href="demoLink" target="_blank" class="button">
          <img v-if="this.$route.name === 'about'" src="/qiita_logo.png" alt="qiita logo" />
          <span v-else>DEMO</span>
        </a>
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
    githubLink: "",
    demoLink: "",
    imgSrc: "",
    imgAlt: ""
  }
};
</script>

<style lang="scss">
.post-detail-wrapper {
  .image-wrapper {
    max-width: 640px;
    margin: 0 auto 16px;

    img {
      border: 1px solid #eee;
    }
  }

  .button-wrap {
    display: flex;
    justify-content: space-between;
    width: 240px;
    margin: 0 auto 16px;

    .button {
      width: 46%;
      font-weight: 600;

      img {
        transform: scale(1.3);
      }
    }
  }

  .text-body {
    word-break: break-all;

    h3 {
      color: #363636;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.125;
      margin-top: 48px;
      margin-bottom: 16px;
    }

    h4 {
      color: #363636;
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 1.125;
      margin-top: 16px;
      margin-bottom: 16px;
    }

    p {
      color: #363636;
      line-height: 1.25;
      font-size: 0.9rem;
      margin-bottom: 16px;
    }

    ul {
      list-style: initial;
    }

    ol,
    ul {
      margin-left: 20px;
    }

    code {
      color: #363636;
      background-color: #eee;
    }
  }
}
</style>
