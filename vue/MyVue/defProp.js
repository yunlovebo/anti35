// 数据响应式

function defineReactive (obj, key, val) {

    observe(val); // 递归，初始数据含有对象

    // 对传入的obj进行访问拦截
    Object.defineProperty(obj, key, {
        get () {
            console.log('get ' + key);
            return val;
        },
        set (newVal) {
            if (newVal !== val) {
                console.log('set ' + key + ': ' + newVal);
                observe(newVal); // 修改已有key指向的val时传入的对象转为响应式
                val = newVal; // 可以保存住变量

                // 在这里update view
            }
        }
    });
}

function set (obj, key, val) {
    defineReactive(obj, key, val)
}

// 自动遍历对象把每个key变成响应式数据
function observe (obj) {
    if (typeof obj !== 'object' || obj == null) {
        return;
    }

    Object.keys(obj).forEach((key) => {
        defineReactive(obj, key, obj[key]);
    })
    
}

function set (obj, key, val) {
    defineReactive(obj, key, val);
}

// defineReactive(obj, 'foo', 'foo');
const obj = {'foo': 'foo', 'bar': 'bar', 'baz': {a: 1}};
observe(obj)

obj.foo
obj.baz.a
obj.baz.a = 2

obj.bar = {b: 3}
obj.bar.b

// obj.newp = {c: 3}


set(obj, 'newp', {c: 3})
obj.newp.c

// obj.foo;
// obj.foo = 'foooooooooooooooooo';