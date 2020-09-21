<template>
  <section class="hero is-link is-fullheight">
    <div class="hero-body">
      <div class="container">
        <p class="title has-text-centered">
          <span
            v-for="(t, index) in text"
            :key="index"
            class="item has-text-white"
            :style="{ animationDelay: index * 100 + 'ms' }"
            v-text="t"
          />
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const text = ref("My Portfolio Website");
    return {
      text
    };
  }
});
</script>

<style scoped lang="scss">
.item {
  font-family: "Play";
  font-size: 3rem;
  letter-spacing: 0.04em;
  display: inline-block;
  min-width: 0.3em;
  cursor: pointer;
  user-select: none;
  transition: 0.2s ease-out;
  animation: text-in 0.4s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;

  &:hover {
    transform: translate(0, -10px);
  }

  @media (max-width: 767px) {
    font-size: 2.2rem;
  }
  @media (max-width: 424px) {
    font-size: 1.6rem;
  }
}

@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
</style>
