<template>
  <div>
    <h1>
      Javascript内でバリデーションを操作
    </h1>
    <ValidationObserver ref="myform">
      <validation-provider v-slot="{ errors }" rules="required">
        <input v-model="name" name="name" type="text">
        <span>{{ errors[0] }}</span>
      </validation-provider>
    </ValidationObserver>
    <button @click="validate">
      バリデーションチェック
    </button>
    <MyFooter />
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      count: 0
    }
  },
  methods: {
    async validate () {
      alert(await this.$refs.myform.validate())
    }
  }
}
</script>
