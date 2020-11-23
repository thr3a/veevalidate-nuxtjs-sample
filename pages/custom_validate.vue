<template>
  <div>
    <h1>
      カスタムバリデーション
    </h1>
    <ValidationObserver ref="myform">
      <validation-provider v-slot="{ errors }" rules="odd">
        <input v-model="number" name="number" type="number">
        <span>{{ errors[0] }}</span>
      </validation-provider>
    </ValidationObserver>
    <MyFooter />
  </div>
</template>

<script>
import { extend } from 'vee-validate'

extend('odd', {
  validate: (value) => {
    return value % 2 !== 0
  },
  message: '奇数でなければいけません'
})

export default {
  data () {
    return {
      number: 0
    }
  }
}
</script>
