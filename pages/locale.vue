<template>
  <div>
    <h1>
      日本語化
    </h1>
    <ValidationObserver ref="myform">
      <validation-provider v-slot="{ errors }" rules="min_value:5">
        <input v-model="name" name="name" type="text">
        <span>{{ errors[0] }}</span>
      </validation-provider>
      <validation-provider v-slot="{ errors }" rules="email|required">
        <input v-model="email" name="メールアドレス" type="text">
        <span>{{ errors[0] }}</span>
      </validation-provider>
    </ValidationObserver>
    <MyFooter />
  </div>
</template>

<script>
import { localize } from 'vee-validate'

localize({
  ja: {
    names: {
      name: 'お名前'
    }
  }
})

export default {
  data () {
    return {
      name: '',
      email: ''
    }
  }
}
</script>
