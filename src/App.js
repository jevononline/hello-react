import './App.less';

import React from 'react';

// import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

// import Main from './components/layout/index';

class App extends React.Component {
  constructor(props) {
    super(props)
    // 没有super(props), 后面使用回报错
    // 定义state
    // bind方法
    // 其他初始化工作
  }

  componentWillMount() {
    // 服务器渲染的唯一hook
  }

  componentDidMount() {
    // 可以调用setState， render Component
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
// const Login = () => {
//   return (
//     <div>login</div>
//   );
// }
export default App