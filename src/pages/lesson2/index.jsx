import React from 'react';
class Lesson2 extends React.Component {
  // 一个组件的显示形态是可以由它数据状态和配置参数决定的。
  //一个组件可以拥有自己的状态，就像一个点赞按钮，可以有“已点赞”和“未点赞”状态，
  // 并且可以在这两种状态之间进行切换。React.js 的 state 就是用来存储这种可变化的状态的。
  constructor() {
    super()
    this.state = { 
      isLiked: false,
      count: 0
    }
  }
  // React.js 调用你所传给它的方法的时候，并不是通过对象方法的方式调用（this.handleClickOnTitle），而是直接通过函数调用 （handleClickOnTitle），所以事件监听函数内并不能通过 this 获取到实例。

  handleClickOnLikeButton() {
    // 注意，当我们要改变组件的状态的时候，不能直接用 this.state = xxx 这种方式来修改，
    // 如果这样做 React.js 就没办法知道你修改了组件的状态，它也就没有办法更新页面。所以，一定要使用 React.js 提供的 setState 方法，
    // 它接受一个对象或者函数作为参数。

    // this.state.count = 3; // 不走生命周期，不渲染dom
    // debugger
    // 1 setState 接受对象参数
    this.setState({
      isLiked: !this.state.isLiked
    });

    // console.log(this.state.count) // 0
    // this.setState({ count: this.state.count + 1 }) // => 1
    // console.log(this.state.count) // 0
    this.setState({ count: this.state.count + 2 }) // => 2  

    // 2 setState 接受函数参数
    // console.log(this.state.count) // 0
    this.setState((prevState) => {
      return { count: 0 }
    })
    // this.setState((prevState) => {
    //   return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
    // })
    // this.setState((prevState) => {
    //   return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
    // })
    // 最后的结果是 this.state.count 为 3

    // 3
    // setState 合并
    // 上面我们进行了三次 setState，但是实际上组件只会重新渲染一次，而不是三次；这是因为在 React.js 内部会把 JavaScript 事件循环中的消息队列的同一个消息中的 setState 都进行合并以后再重新渲染组件。
    // 深层的原理并不需要过多纠结，你只需要记住的是：在使用 React.js 的时候，并不需要担心多次进行 setState 会带来性能问题。
  }

  render() {
    return (
      <div>
        <h1>组件的 state 和 setState</h1>
        <button onClick={this.handleClickOnLikeButton.bind(this)}>
          {this.state.isLiked ? '取消' : '点赞'} 👍
        </button>
        <div>{ this.state.count }</div>

      </div>
      
    )
  }
}
export default Lesson2