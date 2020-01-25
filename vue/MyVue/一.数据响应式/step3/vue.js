class Vue {
    constructor (options) {
        this.$options = options;
        this.$data = options.data;

        // 数据响应式
        observer(options.data);
        // 数据代理
        proxy(this, '$data');

        // 创建编译器
        new Compile(options.el, this)
    }
}

// 批量执行数据响应化，区分对象/数组
class Observer {
    constructor (value) {
        this.value = value;
        this.walk(value);
    }

    walk (obj) {
        Object.keys(obj).forEach((key) => {
            defineReactive(obj, key, obj[key]);
        })
    }
}

function proxy (vm, sourceKey) {
    Object.keys(vm[sourceKey]).forEach((key) => {
        Object.defineProperty(vm, key, {
            get () {
                return vm[sourceKey][key];
            },
            set (newVal) {
                vm[sourceKey][key] = newVal;
            },
        })
    });
}

function defineReactive(obj, key, val) {

    // 对象嵌套    
    observer(obj[key]);

    // 创建Dep实例，一个key对应一个Dep实例
    const dep = new Dep();

    Object.defineProperty(obj, key, {
        get () {
            console.log(`get ${key} value is ${val}`);
            // 依赖收集
            Dep.target && Dep.addDep(dep);
            return val;
        },
        set (newVal) {
            if (val !== newVal) {
                console.log(`set ${key} new value is ${val}`);
                // 赋值是对象
                observer(obj[key])
                val = newVal;

                // 通知更新
                dep.notify();
            }
        },
    })
}

function observer (obj) {
    if (obj !== null && typeof obj !== 'object') {
        return;
    }
    
    new Observer(obj);
}

// 观察者，保存某个key相关的更新函数，当值发生变化时执行更新
class Watcher {
    constructor (vm, key, cb) {
        this.$vm = vm;
        this.$key = key;
        this.$cb = cb;

        // 这里把当前watcher实例暂存一下，为了在马上执行的getter方法中添加到相关key的Dep实例上，
        // 所以当前watcher存在Dep.target上也可以，随便存一个全局变量也可以，vue源码是这样写的
        // getter执行之后，即当前watcher实例已经添加到相关key的Dep对象上之后，马上把暂存置成null，避免频繁的触发getter方法中的相关逻辑
        Dep.target = this;
        this.$vm[this.$key];
        Dep.target = null;
    }

    update () {
        this.$cb.call(this.$vm, this.$vm[this.$key]);
    }
}

// 依赖，管理某个key相关的watcher
class Dep {
    constructor () {
        this.deps = [];
    }

    addDep (dep) {
        this.deps.push(dep);
    }

    notify () {
        this.deps.forEach(watcher => watcher.update);
    }
}
