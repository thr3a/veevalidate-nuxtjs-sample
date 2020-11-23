<template>
  <div>
    <h1>vee-validate サンプルコード集</h1>
    <ul>
      <nuxt-link to="/basic">
        基本
      </nuxt-link>
    </ul>
    <ul>
      <nuxt-link to="/locale">
        日本語化
      </nuxt-link>
    </ul>
    <ul>
      <nuxt-link to="/custom_validate">
        カスタムバリデーション
      </nuxt-link>
    </ul>
    <ul>
      <nuxt-link to="/form_submit">
        全てのバリデーションが通るまで送信ボタンを無効化する
      </nuxt-link>
    </ul>
    <ul>
      <nuxt-link to="/form_submit2">
        フォーム送信ボタンクリック時にバリデーションを実行
      </nuxt-link>
    </ul>
    <ul>
      <nuxt-link to="/first_validate">
        ページ表示時に最初からバリデーションを実行
      </nuxt-link>
    </ul>
    <ul>
      <nuxt-link to="/errors">
        Javascript内でバリデーションを操作
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
