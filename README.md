## nuxt-portfolio

### Application
このポートフォリオサイトは Nuxt.js + TypeScript + Composition API で作成しました。
Nuxt.js は2系を使っているので、いい加減移行しないとまずい。

### Infrastructure
AWSで構築。
ホスティングにS3 + CloudFront + Route 53、メールフォームにSESを使用。
Lambda + API Gatewayで、
1.URLの正規化
2.コンタクトフォームの入力をSESへ連携
を実現。
またGithub ActionsでCI/CDパイプラインを構築。

### Content Management
記事はContentful(Headless CMS)で管理。
[Contentful](https://www.contentful.com/)

### Build Setup

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
