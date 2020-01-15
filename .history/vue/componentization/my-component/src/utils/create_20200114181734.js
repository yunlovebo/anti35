import Vue from 'vue'

function create (component, props) {
    let vm = new Vue({
        render (h) {
            return h => h(component, {props});
        }
    })
}

export default create;