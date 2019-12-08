<template>
  <div>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: ""
  }
};
</script>

<style scoped lang="scss">
div {
  text-align: center;
  padding: 32px 0;
}

h2 {
  font-size: 32px;
  color: #333;
}
</style>
