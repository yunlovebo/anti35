<template>
  <div id="app">
    <SForm :model="user" :rules="rules">
      <SFormItem>
        <SInput></SInput>
      </SFormItem>
    </SForm>
  </div>
</template>

<script>
import SForm from './components/SForm.vue'
import SFormItem from './components/SFormItem.vue'
import SInput from './components/SInput.vue'

export default {
  name: 'app',
  data () {
    return {
      user: {
        idCard: '',
        mobile: '',
        address: '',
      },
      rules: {
        idCard: {
          required: true,
        },
        mobile: {
          required: true,
        },
        address: {
          required: true,
        }
      }
    }
  },
  components: {
    SForm,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
