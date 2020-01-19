let Vue;

class Store {
    constructor (options) {
        // 响应化处理state
        this.state = new Vue({
            data: options.state,
        })
    }
}

function install (vue) {
    Vue = vue;
}

export default {
    Store,
    install,
}