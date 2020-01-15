let Vue;

class MyRouter {
    constructor (options) {
        this.$options = options;

        this,current = '/';

        // 监听hashchange
        window.addEventListener('hashchange', () => {
            this.current = window.location.HashChangeEvent.slice(1); // 去掉#
        })
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
        props: {
            to: {
                type: String, //|Object,
                required: true,
            }
        }
        // template: '<a></a>', // 使用runtime-only版本vue时不能这样定义
        // render (h) {
        //     h('a',
        //       []
        //     )
        // },
        // 也可以用jsx
    });

    Vue.component('router-view', {
        render (h) {

            // 获取path对应的component
            this.$router.$options.
            return h('div', 'router-view');
        }
    });
}

export default MyRouter;