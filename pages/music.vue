<template>
  <section class="section">
    <div class="container body-container">
      <PageTitle :title="'music'.toUpperCase()" />
      <div>
        <p class="mb-5">
          音楽活動も行なっています。<br>
          視聴の際は広告ブロックを無効にして下さい。
        </p>

        <iframe class="mb-5" frameborder="0" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1092547429&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

        <iframe class="mb-5" frameborder="0" allow="encrypted-media *; fullscreen *" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/jp/album/matters-of-the-affection/1536910723"></iframe>

        <iframe class="mb-5" frameborder="0" allow="encrypted-media *; fullscreen *" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/jp/album/underneath-the-city-of-the-bloom/1334493546"></iframe>

        <iframe class="mb-5" frameborder="0" src="https://www.youtube.com/embed/oDQt5m3BVD8" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <iframe class="mb-5" frameborder="0" src="https://www.youtube.com/embed/l9yCRuFNKIY" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <iframe class="mb-5" frameborder="0" src="https://www.youtube.com/embed/c54cX6OK050?start=6" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <iframe class="mb-5" frameborder="0" src="https://www.youtube.com/embed/2B2w8jNjoF8" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <iframe class="mb-5" frameborder="0" src="https://www.youtube.com/embed/gUN3lEoVzr8" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

<style scoped lang="scss">
p {
  color: #363636;
  line-height: 1.25;
  font-size: 0.9rem;
  text-align: center;

  @media all and (max-width: 424px) {
    text-align: left;
  }
}

iframe {
  width: 640px;
  height: 360px;
  margin: auto;
  display: block;

  @media all and (max-width: 767px) {
    width: 320px;
    height: 320px;
  }

  @media all and (max-width: 424px) {
    width: 264px;
    height: 264px;
  }

    @media all and (max-width: 374px) {
    width: 210px;
    height: 264px;
  }
}
</style>
