var Vue = require('vue')
var VueRouter = require('vue-router')

Vue.use(VueRouter)

var router = new VueRouter({
  history: true,
  saveScrollPosition: true
});

var App = require('./app.vue');

router.map({
    '/foo/:username': {
        component: require( './page/foo.vue' )
    },
    '/bar': {
        component: require( './page/bar.vue' )
    },
    // not found handler
    '*': {
      component: require('./page/not-found.vue')
    },
})
router.start(App, '#app')