import React from 'react';

class Lesson1 extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {}
  }
  render() {
    return (
      <div>
        <h1 className="title">J使用 JSX 描述 UI 信息</h1>
      </div>
    )
  }


  // 转化为JavaScript 对象描述
  // render() {
  //   return (
  //     React.createElement(
  //       "div",
  //       null,
  //       React.createElement(
  //         "p",
  //         { className: 'title' },
  //         "J使用 JSX 描述 UI 信息"
  //       )
  //     )
  //   )
  // }


  // JSX （JSX是JavaScript XML）是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML， 。
  // React.js 可以用 JSX 来描述你的组件长什么样的。
  // 当数据变化，需要更新组件的时候，就可以用比较快的算法操作这个 JavaScript 对象，而不用直接操作页面上的 DOM，这样可以尽量少的减少浏览器重排，极大地优化性能。这个在以后的章节中我们会提到
  // JSX 在编译的时候会变成相应的 JavaScript 对象描述。
  // react-dom 负责把这个用来描述 UI 信息的 JavaScript 对象变成 DOM 元素，并且渲染到页面上
  

}
export default Lesson1