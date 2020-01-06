## 组件间通信方式：
##### &emsp;&emsp;

### &emsp; 1. props/$emit &nbsp;&nbsp;[示例]()
#### &emsp;&emsp;&emsp;&emsp;props: 父->子单向数据流；$emit: 自定义事件。
```
    // 子组件：
    <button @click="$emit('child-event', 'hello papa')">send something to parent</button>

    //父组件
    <child :title=" 'hello child' " @child-event="childMessage = $event"></child>
```
##### &emsp;&emsp;

### &emsp; 2. \$parent/\$root/$children
#### &emsp;&emsp;&emsp;&emsp;\$parent/\$root: 兄弟组件之间委托给父组件/祖先组件通信；\$children: 父组件访问子组件数组。
##### &emsp;&emsp;

### &emsp; 3. \$ref
#### &emsp;&emsp;&emsp;&emsp;父组件获取子组件实例
##### &emsp;&emsp;

### &emsp; 4. provide/inject
#### &emsp;&emsp;&emsp;&emsp; 祖先组件跨代传给后代组件，提示：provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。
##### &emsp;&emsp;

### &emsp; 5. \$attrs/\$listeners
#### &emsp;&emsp;&emsp;&emsp;创建高阶组件时常用；
#### &emsp;&emsp;&emsp;&emsp;\$attrs：包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)，(vue的api真多啊～)；
#### &emsp;&emsp;&emsp;&emsp;\$listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。
##### &emsp;&emsp;

### &emsp; 6. Vuex
#### &emsp;&emsp;&emsp;&emsp;全局store，编写通用组件时可能无法强制使用者安装vuex。
##### &emsp;&emsp;

### &emsp; 7. slot
#### &emsp;&emsp;&emsp;&emsp;实现内容分发；创建通用组件时常用。
##### &emsp;&emsp;&emsp;&emsp;

### &emsp; 8. eventBus
#### &emsp;&emsp;&emsp;&emsp; 事件总线：任意两个组件之间传值；一般bus使用vue对象，也可以自己实现bus。