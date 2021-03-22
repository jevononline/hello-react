import React from 'react';
import { Divider } from 'antd';

import './index.less';
import reactWebp from './img/react.webp'
import vueWebp from './img/vue.webp'
import more from './img/more.png'
import live1 from './img/live1.png'
import live2 from './img/live2.png'
import live3 from './img/live3.png'
import live4 from './img/live4.png'
class Lesson6 extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <h1>组件生命周期：React的生命周期从广义上分为三个阶段：挂载、渲染、卸载</h1>
        <img src={reactWebp} alt='' />
        {/* <img src={vueWebp} alt='' /> */}
        <div>
          <Divider plain>一、组件生命周期的执行次数</Divider>
          <div>1、只执行一次： constructor、componentWillMount、componentDidMount</div>
          <div>2、执行多次：render 、子组件的componentWillReceiveProps、componentWillUpdate、componentDidUpdate</div>
 
          <div>3、有条件的执行：componentWillUnmount（页面离开，组件销毁时）</div>
          <div>4、不执行的：根组件（ReactDOM.render在DOM上的组件）的componentWillReceiveProps（因为压根没有父组件给传递props）</div>
        </div>
        <Divider plain>二、组件的生命周期执行顺序</Divider>
        <div className="item">
          1、假设组件嵌套关系是 App里有parent组件，parent组件有child组件。
          <img src={more} alt='' />
          <div>如果不涉及到setState更新，第一次渲染的顺序如下：
          <div>
            <img src={live1} alt='' />
          </div>
          <div>
            App：   constructor --> componentWillMount -->  render --> 
            parent: constructor --> componentWillMount -->  render --> 
            child:    constructor --> componentWillMount -->  render  --> 
            componentDidMount (child) -->  componentDidMount (parent) --> componentDidMount (App)
  
          </div>
          <div className="item">
           2、这时候触发App的setState事件
            <div>
              <img src={live2} alt='' />
            </div>
            <div>
              App：   componentWillUpdate --> render --> 
              parent: componentWillReceiveProps --> componentWillUpdate --> render --> 
              child:    componentWillReceiveProps --> componentWillUpdate --> render -->
              componentDidUpdate (child) -->  componentDidUpdate (parent) --> componentDidUpdate (App)
            </div>
          </div>
            <div className="item">
              3、如果是触发parent的setState
            <div>
                <img src={live3} alt='' />
              </div>
              <div>
                parent： componentWillUpdate --> render --> 
                child:     componentWillReceiveProps --> componentWillUpdate --> render --> 
                componentDidUpdate (child) -->  componentDidUpdate (parent) 
            </div>
            </div>
            <div className="item">
              4、只是触发了child组件自身的setState
              <div>
                <img src={live4} alt='' />
              </div>
              <div>
                child： componentWillUpdate --> render -->  componentDidUpdate (child)
              </div>
            </div>
        </div>
      </div>
      </div>
    )
  }
}
export default Lesson6