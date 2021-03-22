import React from 'react';

import diffPng from './img/diff.png'
import diffPng2 from './img/diff2.webp'
import './index.less';
class Lesson9 extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <h1>react vs vue </h1>
        <img src={diffPng} alt='' />
        <img src={diffPng2} alt=''  width="800"/>
        <div className="sum">上面主要梳理了react和vue的4点不同：
          1、数据是不是可变的
          2、通过js操作一切还是各自的处理方式
          3、类式的组件写法还是声明式的写法
          4、什么功能内置，什么交给社区去做
        </div>
        <h1>
          react整体的思路就是函数式，所以推崇纯组件，数据不可变，单向数据流，当然需要双向的地方也可以做到，比如结合redux-form，<br/>
          而vue是基于可变数据的，支持双向绑定。react组件的扩展一般是通过高阶组件，而vue组件会使用mixin。vue内置了很多功能，而react做的很少，很多都是由社区来完成的，vue追求的是开发的简单，而react更在乎方式是否正确。
        </h1>
      </div>
    )
  }
}
export default Lesson9