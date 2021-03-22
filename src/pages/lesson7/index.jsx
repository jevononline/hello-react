import React from 'react';
import Header from './components/header';
import PropTypes from 'prop-types';
import LessonMain from './components/lessonMain';

class Lesson7 extends React.Component {
  static childContextTypes = {
    themeColor: PropTypes.string
  }
  constructor() {
    super()
    this.state = { themeColor: 'red' }
  }
  handleClickOnLikeButton() {
    this.setState({ themeColor: 'green' });
  }
  getChildContext() {
    return { themeColor: this.state.themeColor }
  }
  // componentWillMount() {
  //   this.setState({ themeColor: 'green' })
  // }

  render() {
    return (
      <div>
        <h1>React的 context （状态提升）</h1>
        <button onClick={this.handleClickOnLikeButton.bind(this)}>
          改变颜色
        </button>
        <div>
          <Header />
          <br/>
          <LessonMain />
        </div>
      </div>
    )
  }
}
Lesson7.propTypes = {
  themeColor: PropTypes.string
}
export default Lesson7

