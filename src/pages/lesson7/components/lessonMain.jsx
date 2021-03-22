import React from 'react';
import Content from './content'
import PropTypes from 'prop-types';
class LessonMain extends React.Component {
  render() {
    return (
      <div>
        <h2>This is main</h2>
        <Content />
      </div>
    )
  }
}
LessonMain.propTypes = {
  themeColor: PropTypes.string
}


export default LessonMain