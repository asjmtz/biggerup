var Vue = require('vue')
var VueRouter = require('vue-router')

Vue.use(VueRouter)

var router = new VueRouter();

// main entry
var App = require('./app.vue');


// require router page
router.map({
    '/foo/:username': {
        component: require( './page/foo.vue' )
    },
    '/bar': {
        component: require( './page/bar.vue' )
    }
})
router.start(App, '#app')