
import React from 'react';
import PropTypes from 'prop-types';
class Title extends React.Component {
  static contextTypes = {
    themeColor: PropTypes.string
  }
  render() {
    return (
      <h1 style={{ color: this.context.themeColor }}>Title</h1>
    )
  }
}
export default Title