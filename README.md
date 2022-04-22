# nuxt-portfolio

### Nuxt.js
このポートフォリオサイトは Nuxt.js + TypeScript + Composition API で作成しました。  
[Nuxt.js](https://ja.nuxtjs.org/)  
[Nuxt.js + TypeScript](https://typescript.nuxtjs.org/)  
[Nuxt.js + Composition API](https://composition-api.nuxtjs.org/)  
  
現在はv2を使っていますが、Nuxt.jsのv3が発表されたので移行したいと思っています。  
TypeScriptもデフォルトでサポートされていて、かなり使い勝手がよくなっている印象。  

### インフラ
AWSで組んでいます。  
ホスティングにS3 + CloudFront + Route 53を使用しています。  
メールフォームにSESを使用しています。  
またLambda + API Gatewayを使って、  
1.URLの正規化  
2.コンタクトフォームの入力をSESへ連携  
を実現しています。  
CI/CDパイプラインをGithub Actionsで組んでいます。  

### Contentful
記事はContentful(Headless CMS)で作成・管理し、API経由で取得しています。  
[Contentful](https://www.contentful.com/)  

### Bulma
CSSフレームワークにBulmaを使用しています。  
[Bulma](https://bulma.io/)

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
