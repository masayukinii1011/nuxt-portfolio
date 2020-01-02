<template>
  <div :class="{ hasFooterWrapper : this.$route.name !== 'index' }">
    <Header />
    <nuxt />
    <Footer v-if="this.$route.name !== 'index'" />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

body {
  line-height: 1;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

nav ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  text-decoration: none;
}

/* change colours to suit your needs */
ins {
  background-color: #ff9;
  color: #000;
  text-decoration: none;
}

/* change colours to suit your needs */
mark {
  background-color: #ff9;
  color: #000;
  font-style: italic;
  font-weight: bold;
}

del {
  text-decoration: line-through;
}

abbr[title],
dfn[title] {
  border-bottom: 1px dotted;
  cursor: help;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* change border colour to suit your needs */
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 1em 0;
  padding: 0;
}

input,
select {
  vertical-align: middle;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  transition: 0.2s ease-out;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.hasFooterWrapper {
  position: relative;
  padding-bottom: 52px;
  min-height: 100vh;
}

.container {
  max-width: 1024px;
}

.page-enter-active,
.page-leave-active {
  transition: 0.16s ease-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateY(2px);
}
</style>
