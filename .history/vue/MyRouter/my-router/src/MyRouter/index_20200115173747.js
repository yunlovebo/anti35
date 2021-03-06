let Vue;

class MyRouter {
    constructor (options) {
        this.$options = options;
    }
}

MyRouter.install = function (vue) {
    Vue = vue;

    // 1. 全局挂载$router
    Vue.mixin({
        beforeCreate () {
            // 获取组件实例
            window.console.log('-------')
            window.console.log(this);

            // 判断根实例
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router;
            }
        },
    });

    // 2. 实现组件router-link和router-view
    Vue.component('rouuter-link', {
        // template: '<a></a>', // 使用runtime-only版本vue时不能这样定义
        render (h) {
            h('a',
              []
            )
        },
    });

    Vue.component('router-view', {

    });
}

export default MyRouter;