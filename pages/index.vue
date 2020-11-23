<template>
  <div>
    <h1>vee-validate サンプルコード集</h1>
    <ul>
      <li>
        <nuxt-link to="/basic">
          基本
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/locale">
          日本語化
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/custom_validate">
          カスタムバリデーション
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/form_submit">
          全てのバリデーションが通るまで送信ボタンを無効化する
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/form_submit2">
          フォーム送信ボタンクリック時にバリデーションを実行
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/first_validate">
          ページ表示時に最初からバリデーションを実行
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/errors">
          Javascript内でバリデーションを操作
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/bootstrap">
          Bootstrapで使ってみる
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
