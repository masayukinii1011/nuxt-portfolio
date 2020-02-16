# nuxt-portfolio

### Nuxt.js
このポートフォリオサイトはNuxt.jsで作成しました。  
[Nuxt.js](https://ja.nuxtjs.org/)

参考記事：  
https://qiita.com/isihigameKoudai/items/e3b136e9964f1d30d73d

### Contentful
記事はContentful(Headless CMS)で作成・管理し、API経由で取得しています。  
[Contentful](https://www.contentful.com/)  

記事の取得は下記を参考にしています。  
参考記事：  
https://blog.cloud-acct.com/posts/blog-contentful-api

流れとしては
1. 記事取得用のプラグインplugins/contentful.jsを用意。
2. store/index.jsで記事を取得・保管する。
3. 記事一覧ページ(pages/.../index.vue)ではmapStateメソッドを用いて取り出す。
4. 記事個別ページ(pages/.../_slug.vue)ではslugが一致している記事を取り出す。
5. 1-4のみの処理ではトップページ以外のURLに直接アクセスした場合は記事の取得ができない。そこでmiddleware/getContentful.jsを作成し、記事の取得が済んでない場合はstore/index.jsへリクエストを投げる。nuxt.config.jsにgetContentful.jsを登録。

### Netlify
インフラはNetlify(静的サイトホスティングサービス)を使用しています。  
[Netlify](https://www.netlify.com/)

ContactページはNetlifyのForm機能を使用しました。  
当初Nuxt.jsをSPAモードで開発していましたが、Netlify Formを使用するに当たりSSRする必要があったのでUniversalモードに変更しました。  
またそれでもうまく動作しなかったので、下記を参考に修正しました。  
参考記事：  
https://marketing-web.hatenablog.com/entry/nuxt_netlify_form  
formタグ内に下記の一行を追加。  
`<input type="hidden" name="form-name" value="contact" />`


### Bulma
CSSフレームワークにBulmaを使用しています。  
[Bulma](https://bulma.io/)

参考記事：  
https://tonyo.design/program/bulma/recommended_bulma_no1/  

Bootstrapと違いjQuery依存しておらず、CSSのみで軽く使いやすいです。  
ただし、UIの動きの部分は自分でJSを記述する必要があります。  
ヘッダー部分は下記を参考に作成しました。  
参考記事：  
https://qiita.com/seki19/items/649b317c10e84fb36e06


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
