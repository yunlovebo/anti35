const _vue;

class MyRouter {
    constructor (options) {
        this.$options = options;
    }
}

MyRouter.install = function (vue, options) {
    _vue = vue;

    _vue.mixin({
        beforeCreate () {
            // 获取组件实例
            console.log(this);
        },
    })
}