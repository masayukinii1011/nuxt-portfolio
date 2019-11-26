<template>
  <div>
    <h1>
      <nuxt-link to="/about">
        <span
          v-for="(t, index) in text"
          :key="index"
          class="item"
          :style="{animationDelay: index*100+'ms'}"
          v-text="t"
        />
      </nuxt-link>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "My Portfolio Website"
    };
  }
};
</script>

<style scoped lang="scss">
div {
  background: #4fc3f7;
  margin-top: -64px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.item {
  display: inline-block;
  color: #fff;
  min-width: 0.3em;
  font-size: 48px;
  animation: text-in 0.4s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;

  @media screen and (max-width: 767px) {
    font-size: 36px;
  }
  @media screen and (max-width: 425px) {
    font-size: 26px;
  }
}
</style>
