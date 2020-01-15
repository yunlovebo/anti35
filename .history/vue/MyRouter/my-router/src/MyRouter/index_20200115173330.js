let _vue;

class MyRouter {
    constructor (options) {
        this.$options = options;
    }
}

MyRouter.install = function (vue) {
    _vue = vue;

    _vue.mixin({
        beforeCreate () {
            // 获取组件实例
            window.console.log('-------')
            window.console.log(this);

            // 判断根实例
            if (this.$options.router) {
                _vue.prototype.$router = this.$options.router;
            }
        },
    })
}

export default MyRouter;