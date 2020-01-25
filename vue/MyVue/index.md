# 从零开始，实现一个Vue

## 一. MVVM的雏形

1. 利用Object.defineProperty在setter中(**defineReactive方法**)更新视图即dom元素(**update方法**) 
2. 自动遍历对象为为每个key实现响应(**observe方法**)，需要处理以下4种特殊情况：
   1. 处理Array类型，因为Object.defineProperty对Array类型数据无效，参考Vue源码的方式，修改Array对象的原型方法；
   2. 初始化响应式数据时，某个key的值是object类型，需要递归做响应式处理；
   3. 为对象新增一个属性，该属性也要做响应式处理；
   4. 删除对象的一个属性

