# nuxt-portfolio

### Nuxt.js
このポートフォリオサイトはNuxt.jsで作成しました。  
[Nuxt.js](https://ja.nuxtjs.org/)

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

流れとしては
1. 記事取得用のプラグインplugins/contentful.jsを用意。
2. store/index.jsで記事を取得・保管する。
3. 記事一覧ページ(pages/.../index.vue)ではmapStateメソッドを用いて取り出す。
4. 記事個別ページ(pages/.../_slug.vue)ではslugが一致している記事を取り出す。
5. 1-4のみの処理ではトップページ以外のURLに直接アクセスした場合は記事の取得ができない。そこでmiddleware/getContentful.jsを作成し、記事の取得が済んでない場合はstore/index.jsへリクエストを投げる。nuxt.config.jsにgetContentful.jsを登録。

### Bulma
CSSフレームワークにBulmaを使用しています。  
[Bulma](https://bulma.io/)

Bootstrapと違いjQuery依存しておらず、CSSのみで軽く使いやすいです。  
ただし、UIの動きの部分は自分でJSを記述する必要があります。  

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
