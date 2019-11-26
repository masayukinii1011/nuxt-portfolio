<template>
  <div>
    <h2>works</h2>
    <nuxt-link :to="{ name: 'works-detail', params: { detail: 'aaa' }}">
      aaa
    </nuxt-link>
    <nuxt-link :to="{ name: 'works-detail', params: { detail: 'bbb' }}">
      bbb
    </nuxt-link>
    <nuxt-link :to="{ name: 'works-detail', params: { detail: 'ccc' }}">
      ccc
    </nuxt-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">

</style>
