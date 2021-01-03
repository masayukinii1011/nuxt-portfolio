import { NuxtConfig } from "@nuxt/types";

require("dotenv").config();

const client = require("./plugins/contentful").default;

const config: NuxtConfig = {
  ssr: "true",

  target: "static",
  /*
   ** Headers of the page
   */
  head: {
    title: "msykn portfolio",
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "msykn portfolio" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [{ src: "bulma/bulma.sass", lang: "sass" }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "plugins/contentful" },
    { src: "plugins/loading", mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/typescript-build",
    "nuxt-typed-vuex",
    "@nuxtjs/composition-api"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["nuxt-webfontloader", "@nuxtjs/dotenv", "@nuxtjs/markdownit", '@nuxtjs/pwa'],
  webfontloader: {
    google: {
      families: ["Play"]
    }
  },
  markdownit: {
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリング
    breaks: true, // 改行コードを<br>に変換
    html: true, // HTMLタグを有効
    linkify: true, // URLに似たテキストをリンクに自動変換
    typography: true // 言語に依存しないき置換+引用符を有効
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    // contentful
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    // API Gateway
    SEND_MESSEGE_API: process.env.SEND_MESSEGE_API
  },
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: process.env.CTF_BLOG_POST_TYPE_ID
        })
      ]).then(([entries]) => {
        return [
          ...entries.items
            .filter(
              (item: {
                fields: { category: { fields: { slug: string } } };
              }) => {
                return item.fields.category.fields.slug === "works";
              }
            )
            .map((item: { fields: { slug: any } }) => {
              return { route: `works/${item.fields.slug}`, payload: item };
            })
        ];
      });
    }
  },
  router: {
    middleware: ["getContentful"]
  },
  manifest: {
    name: 'msykn portfolio',
    lang: 'ja',
    short_name: 'msykn',
    title: 'msykn',
    'og:title': 'msykn',
    description: 'msykn portfolio',
    'og:description': 'msykn portfolio',
    theme_color: '#ffffff',
    background_color: '#3273dc'
  },
};

export default config;
