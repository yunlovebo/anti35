# 从零开始，实现一个Vue

## 一. MVVM的雏形

1. 利用Object.defineProperty在setter中(**defineReactive方法**)更新视图即dom元素(**update方法**) 
2. 自动遍历对象为为每个key实现响应(**observe方法**)，需要处理以下4种特殊情况：
   - 1. 处理Array类型，因为Object.defineProperty对Array类型数据无效，参考Vue源码的方式，修改Array对象的7个原型方法；
   - 2. 对象嵌套问题；
   ```
        w.defineReactive = function defineReactive(obj, key, val) {
            observer(obj[key]);
   ```
   - 3. 赋值是对象；
   ```
        set (newVal) {
            if (val !== newVal) {
                val = newVal;
                if (typeof val === 'object') {
                    observer(obj[key])
                }
                update(val);
   ```
   - 4. 添加/删除新属性 $set方法
3. vue1.0的核心实现：一个key对应一个Dep实例，一个视图访问对应一个watcher，一个Dep实例管理多个watcher。Vue2中做出了优化，一个组件对应一个watcher
   - 1. 执行new Vue时先对数据进行响应式处理(Observer类)
   - 2. 同时编译模板，初始化视图(Compile类)
   - 3. 初始化视图时创建watcher，将来数据变化时调用其update方法，view里出现一次就创建一个watcher实例
   - 4. 同时触发key的getter的方法，一个key对应一个Dep实例，管理该key的多个watcher实例(因为一个key可能在页面出现多次)
   - 5. 将来数据发生变化时，其setter方法找到对应的Dep实例，通知其内部的所有watcher更新。
4. vue2.0做了优化，一个组件对应一个Watcher实例，一个key对应一个Dep实例，一个对象对应一个Observer实例。缺点是初始化时递归处理耗费性能，所以在vue3.0中改成了Proxy。
   
## 二. Vue初始化过程

1. 
   - 1. new Vue()           // 调用_init
   - 2. this._init(options) // 初始化各种属性
   - 3. $mount()            // 调用 mountComponent
   - 4. mountComponent      // 声明updateComponent、创建和组件相关的watcher，watcher管理当前组件实例，以后会调用updateComponent方法，updateComponent方法会先后执行render()和render()
   - 5. _render()           // 获取虚拟dom
   - 6. render()          // 虚拟dom转换成真实dom
