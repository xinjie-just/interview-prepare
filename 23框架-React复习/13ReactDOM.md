# ReactDOM

每个 JSX 元素都是调用 React.createElement() 的语法糖。如果使用了 JSX，就不再需要调用以下方法。

createElement()
createFactory()

## React.Component 和 React.PureComponent

React.PureComponent 与 React.Component 很相似。两者的区别在于 React.Component 并未实现 shouldComponentUpdate()，而 React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数。

## createElement()

```jsx
React.createElement(
  type,
  [props],
  [...children]
)
```

创建并返回指定类型的新 React 元素。其中的类型参数既可以是标签名字符串（如 'div' 或 'span'），也可以是 React 组件 类型 （class 组件或函数组件），或是 React fragment 类型。

## React.isValidElement()

验证一个对象是否是 React 元素。

```jsx
React.isValidElement()
```

## React.lazy

React.lazy() 允许你定义一个动态加载的组件。这有助于缩减 bundle 的体积，并延迟加载在初次渲染时未用到的组件。

```jsx
const SomeComponent = React.lazy(() => import('./SomeComponent'));
```