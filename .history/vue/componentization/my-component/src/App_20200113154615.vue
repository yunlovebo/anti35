<template>
  <div id="app">
    <s-form>
      <s-form-item>
        <s-input></s-input>
      </s-form-item>
    </s-form>
  </div>
</template>

<script>
import sForm from './components/HelsFormoWorld.vue'

export default {
  name: 'app',
  data () {
    return {
      user: {
        idCard: '',
        mobile: '',
        address: '',
      }
    }
  },
  components: {

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
