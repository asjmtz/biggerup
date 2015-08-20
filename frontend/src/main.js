var Vue = require('vue')
var VueRouter = require('vue-router')

Vue.use(VueRouter)

var router = new VueRouter();

var App = require('./app.vue');

router.map({
    '/foo/:username': {
        component: require( './page/foo.vue' )
    },
    '/bar': {
        component: require( './page/bar.vue' )
    }
})
router.start(App, '#app')