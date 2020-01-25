# 从零开始，实现一个Vue

## 一. MVVM的雏形

1. 利用Object.defineProperty在setter中(**defineReactive方法**)更新视图即dom元素(**update方法**) 
2. 自动遍历对象为为每个key实现响应(**observe方法**)，需要处理以下4种特殊情况：
   1. 处理Array类型，因为Object.defineProperty对Array类型数据无效，参考Vue源码的方式，修改Array对象的原型方法；
   2. 对象嵌套问题；
   ```
        w.defineReactive = function defineReactive(obj, key, val) {
            observer(obj[key]);
   ```
   3. 赋值是对象；
   ```
        set (newVal) {
            if (val !== newVal) {
                val = newVal;
                if (typeof val === 'object') {
                    observer(obj[key])
                }
                update(val);
   ```
   4. 添加/删除新属性 $set方法

