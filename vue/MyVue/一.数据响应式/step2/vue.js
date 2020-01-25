(function (w) {
    w.defineReactive = function defineReactive(obj, key, val) {

        // 对象嵌套    
        observer(obj[key]);

        Object.defineProperty(obj, key, {
            get () {
                console.log(`get ${key} value is ${val}`);
                return val;
            },
            set (newVal) {
                if (val !== newVal) {
                    val = newVal;
                    // 赋值是对象
                    if (typeof val === 'object') {
                        observer(obj[key])
                    }
                    update(val);
                    console.log(`set ${key} new value is ${val}`);
                }
            },
        })
    }

    // 新增属性
    w.$set = function (obj, key, val) {
        defineReactive(obj, key, val)
    }
    
    function update (val) {
        document.getElementById('app').innerText = val;
    }

    w.observer = function observer (obj) {
        if (obj !== null && typeof obj !== 'object') {
            return;
        }
        Object.keys(obj).forEach((key) => {
            defineReactive(obj, key, obj[key]);
        })
    }
})(window);