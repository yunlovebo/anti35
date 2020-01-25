(function (w) {
    w.defineReactive = function defineReactive(obj, key, val) {
        observer(obj[key]);

        Object.defineProperty(obj, key, {
            get () {
                console.log(`get ${key} value is ${val}`);
                return val;
            },
            set (newVal) {
                if (val !== newVal) {
                    val = newVal;
                    // 2.2 初始化响应式数据时，某个key的值是object类型，需要递归做响应式处理
                    if (typeof val === 'object') {
                        observer(obj[key])
                    }
                    update(val);
                    console.log(`set ${key} new value is ${val}`);
                }
            },
        })
    }

    // 2.3 为对象新增一个属性，该属性也要做响应式处理
    w.$set = function (obj, key, val) {
        defineReactive(obj, key, val)
    }
    
    function update (val) {
        document.getElementById('app').innerText = val;
    }

    w.observer = function observer (obj) {
        if (typeof obj !== 'object') {
            return;
        }
        Object.keys(obj).forEach((key) => {
            defineReactive(obj, key, obj[key]);
        })
    }
})(window);