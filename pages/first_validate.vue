<template>
  <div>
    <h1>
      ページ表示時に最初からバリデーションを実行
    </h1>
    <ValidationObserver ref="myform">
      <validation-provider v-slot="{ errors }" immediate rules="email|required">
        <input v-model="email" name="email" type="text">
        <span>{{ errors[0] }}</span>
      </validation-provider>
    </ValidationObserver>
    <MyFooter />
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  }
}
</script>
