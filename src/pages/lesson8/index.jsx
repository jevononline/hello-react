import React from 'react';
import CommentApp from './components/CommentApp'
import './index.less';
class Lesson8 extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <h1>使用真正的 Redux 和 React-redux</h1>
        <CommentApp />
      </div>
    )
  }
}
export default Lesson8