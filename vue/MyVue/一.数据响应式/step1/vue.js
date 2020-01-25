(function (w) {
    w.defineReactive = (obj, key, val) => {
        Object.defineProperty(obj, key, {
            get () {
                console.log(`get ${key} value is ${val}`);
                return val;
            },
            set (newVal) {
                if (val !== newVal) {
                    val = newVal;
                    update(val);
                    console.log(`set ${key} new value is ${val}`);
                }
            },
        })
    }
    
    function update (val) {
        document.getElementById('app').innerText = val;
    }
})(window);