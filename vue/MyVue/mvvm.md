## MVVM
View: DOM
Model: Plain Javascript Objects
ViewModel: Vue

## MVVM框架三要素：
1. 数据响应式
   1.1 Object.defineProperty()
   1.2 Proxy
2. 模板引擎的语法
   2.1 插值{{  }}
   2.2 指令：v-bind、v-on、v-model、v-for、v-if
3. 模板引擎的渲染
   3.1 模板 => vdom => DOM


## 数据响应式：数据变更能够响应在视图中，就是数据响应式。vue2中李勇Object.defineProperty()实现变更检测
