import './index.less'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
var router = new VueRouter()

var data = {}
Vue.set(data, 'a', 2)
var Foo = Vue.extend({
  template:
  '<div class="foo">' +
  '<h2>This is Foo!</h2>' +
  '<router-view></router-view>' + // <- nested outlet
  '</div>'
})

var Bar = Vue.extend({
  template: '<p>This is bar!</p>'
})

router.map({
  '/': {
    component (resolve) {
      require(['./App.vue'], resolve)
    }
  },
  '/foo': {
    component: Foo,
    // add a subRoutes map under /foo
    subRoutes: {
      '/': {
        // This component will be rendered into Foo's <router-view>
        // when /foo is matched. Using an inline component definition
        // here for convenience.
        component: {
          template: '<p>Default sub view for Foo</p>'
        }
      },
      '/bar': {
        // Bar will be rendered inside Foo's <router-view>
        // when /foo/bar is matched
        component: Bar
      },
      '/baz': {
        // same for Baz, but only when /foo/baz is matched
        component (resolve) {
          require(['./components/list.vue'], resolve)
        }
      }
    }
  }
})

router.beforeEach(function (transition) {
  console.log('kodo', window.localStorage.getItem('kodo'))
  console.log(transition.to.token)
  if (transition.to.auth) {
    console.log(1)
    // 对身份进行验证...
    if (window.localStorage.getItem('kodo')) {
      console.log(2)
      transition.next()
    } else {
      console.log(3)
      window.alert('身份验证已过期,请登入')
      let redirect = encodeURIComponent(transition.to.path)
      console.log(redirect)

      // router.go({name: 'login'});
    }
  } else {
    console.log(4)
    transition.next()
  }
})

// start app
var App = Vue.extend({})
router.start(App, '#app')
