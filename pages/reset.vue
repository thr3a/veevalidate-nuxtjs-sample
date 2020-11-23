<template>
  <div>
    <h1>
      バリデーションを一括リセット
    </h1>
    <ValidationObserver ref="myform" v-slot="{ reset }">
      <form @reset.prevent="reset">
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
          <button type="reset">
            リセット
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
  }
}
</script>
