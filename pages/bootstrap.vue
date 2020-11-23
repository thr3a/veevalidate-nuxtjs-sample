<template>
  <div class="container">
    <h1>
      Bootstrap
    </h1>
    <ValidationObserver ref="myform">
      <div class="form-group">
        <validation-provider v-slot="{ errors }" rules="email|required">
          <label>メールアドレス</label>
          <input v-model="email" name="メールアドレス" type="text" class="form-control col-sm-5">
          <span class="d-block text-danger">{{ errors[0] }}</span>
        </validation-provider>
      </div>
    </ValidationObserver>
    <MyFooter />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  data () {
    return {
      email: ''
    }
  }
}
</script>
