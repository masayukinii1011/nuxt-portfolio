<template>
  <section class="section">
    <div class="container body-container">
      <PageTitle :title="'music'.toUpperCase()" />
      <div>
        <p class="mb-5 has-text-centered">ご視聴の際は広告ブロックを無効にしてください。</p>

        <iframe class="mb-5" frameborder="0" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1092547429&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

        <iframe class="mb-5" frameborder="0" allow="encrypted-media *; fullscreen *" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/jp/album/matters-of-the-affection/1536910723"></iframe>

        <iframe class="mb-5" frameborder="0" allow="encrypted-media *; fullscreen *" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/jp/album/underneath-the-city-of-the-bloom/1334493546"></iframe>

        <iframe class="mb-5" frameborder="0" src="https://www.youtube.com/embed/oDQt5m3BVD8" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <iframe class="mb-5" frameborder="0" src="https://www.youtube.com/embed/l9yCRuFNKIY" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <iframe class="mb-5" frameborder="0" src="https://www.youtube.com/embed/c54cX6OK050?start=6" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <iframe class="mb-5" frameborder="0" src="https://www.youtube.com/embed/2B2w8jNjoF8" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <iframe class="mb-5" frameborder="0" src="https://www.youtube.com/embed/gUN3lEoVzr8" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <iframe frameborder="0" src="https://bandcamp.com/EmbeddedPlayer/album=3491816205/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless></iframe>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "@nuxtjs/composition-api";
import PageTitle from "~/components/PageTitle.vue";

export default defineComponent({
  components: {
    PageTitle
  },
  setup() {}
});
</script>

<style scoped lang="scss">
iframe {
  width: 640px;
  height: 360px;
  margin: auto;
  display: block;
}
</style>
