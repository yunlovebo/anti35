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
            window.console.log(this);
        },
    })
}

export default MyRouter;