<template>
  <div>
    <h1>
      フォーム送信ボタンクリック時にバリデーションを実行
    </h1>
    <ValidationObserver ref="myform" v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div>
          <validation-provider v-slot="{ errors }" rules="required">
            <label for="">名前</label>
            <input v-model="name" name="name" type="text">
            <span>{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div>
          <validation-provider v-slot="{ errors }" rules="email|required">
            <label for="">メールアドレス</label>
            <input v-model="email" name="email" type="text">
            <span>{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div>
          <button type="submit">
            送信
          </button>
        </div>
      </form>
    </ValidationObserver>
    <MyFooter />
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    onSubmit () {
      alert('Form has been submitted!')
    }
  }
}
</script>
