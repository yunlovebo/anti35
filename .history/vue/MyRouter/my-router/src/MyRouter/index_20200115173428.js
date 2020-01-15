let Vue;

class MyRouter {
    constructor (options) {
        this.$options = options;
    }
}

MyRouter.install = function (vue) {
    Vue = vue;

    // 1. 挂载$router
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
    })
}

export default MyRouter;