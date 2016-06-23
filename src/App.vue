<template>
  <div>
    <!--<img class="logo" src="./assets/logo.png">-->
    <!--<img class="logo" src="./assets/66.jpg">-->
    <hello></hello>
    <alert type="success">
      <strong>Well Done!</strong>
      You successfully read this important alert message.
    </alert>
    <alert
      :show.sync="showRight"
      :duration="3000"
      type="success"
      width="400px"
      placement="top-right"
      dismissable
    >
      <span class="icon-ok-circled alert-icon-float-left"></span>
      <strong>Well Done!</strong>
      <p>You successfully read this important alert message.</p>
    </alert>

    <button class="btn btn-default" @click="showModal = true">Show modal</button>
    <modal title="Modal title" :show.sync="showModal" v-if="true">
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title">Modal <b>Title</b></h4>
      </div>
      <div slot="modal-body" class="modal-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </modal>
    <!--<p>-->
      <!--Welcome to your Vue.js app!-->
    <!--</p>-->
    <!--<p>-->
      <!--To get a better understanding of how this boilerplate works, check out-->
      <!--<a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.-->
      <!--It is also recommended to go through the docs for-->
      <!--<a href="http://webpack.github.io/" target="_blank">Webpack</a> and-->
      <!--<a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.-->
      <!--If you have any issues with the setup, please file an issue at this boilerplate's-->
      <!--<a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.-->
    <!--</p>-->
    <!--<p>-->
      <!--You may also want to checkout-->
      <!--<a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and-->
      <!--<a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.-->
    <!--</p>-->
  </div>
</template>

<script>
import Hello from './components/Hello'
import {slider, alert, modal} from 'vue-strap'

export default {
  data () {
    return {
      showModal: false,
      showRight: false
    }
  },
  components: {
    Hello,
    slider,
    alert,
    modal
  }
}

</script>

<style scoped>


</style>
