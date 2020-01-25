// 1. 文本节点 -> 处理插值
// 2， 元素节点 -> 遍历属性处理指令和事件绑定，递归处理子组件
class Compile {
    constructor (el, vm) {
        this.$vm = vm;
        this.$el = document.querySelector(el);

        if (this.$el) {
            this.compile(this.$el);
        }
    }

    compile (el) {
        const childNodes = el.childNodes;
        Array.from(childNodes).forEach((node) => {
            if (this.isElement(node)) {
                this.compileElement(node);
            } else if (this.isInter(node)) { // 插值文本
                this.text(node, RegExp.$1);
            }

            if(Array.from(node.childNodes).length > 0) {
                this.compile(node);
            }
        });
    }

    // 1. 初始化dom 2. 创建watcher实例
    update (node, exp, type) {
        const fn = this[type + 'Updater'];
        fn && fn(node, this.$vm[exp]);

        // 初始化dom时watcher并不存在，走到defineReactive里时Dep.target == null
        // watcher的构造函数里立即访问了this.$vm[exp]，调用了exp的getter，创建Dep实例，把此watcher添加进去了，
        // 以后更新时走的是此watcher实例的update方法
        new Watcher(node, exp, (val) => {
            fn && fn(node, val);
        });
    }

    compileElement (node) {
        const attrs = noode.attributes;
        Array.from(attrs).forEach((attr) => {
            const attrName = attr.name;
            const exp = attr.value;

            if (isDirective(attrName)) {
                const dir = attrName.subString(2);

                // 执行指令  
                this[dir] && this[dir](node, exp);
            }
        });
    }

    isElement (node) {
        return node.nodeType === 1;
    }

    isInter (node) {
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
    }

    isDirective (attr) {
        return attr.startWith('v-');
    }

    text (node, exp) {
        this.update(node, exp, 'text');
    }

    textUpdater (node, value) {
        node.textContent = value;
    }

    html (node, exp) {
        this.update(node, exp, 'v');
    }

    htmlUpdater (node, value) {
        node.innerHTML = value;
    }
}