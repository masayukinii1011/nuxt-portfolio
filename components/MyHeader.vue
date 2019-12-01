<template>
  <header>
    <h1>
      <nuxt-link to="/">msykn</nuxt-link>
    </h1>
    <div>
      <p>
        <nuxt-link to="/about">About</nuxt-link>
      </p>
      <p>
        <nuxt-link to="/works">Works</nuxt-link>
      </p>
      <p>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </p>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  background: #4fc3f7;
}

h1 {
  font-size: 24px;
  padding: 12px 8px;

  @media screen and (max-width: 425px) {
    font-size: 18px;
  }
}

a {
  color: #fff;
  transition: 0.1s ease-out;
  padding-bottom: 2px;

  &:hover {
    border-bottom: 2px solid #fff;
  }
}

div {
  display: flex;
  align-items: center;
}

p {
  font-weight: bold;
  font-size: 18px;
  padding: 0px 8px;

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
}
</style>
