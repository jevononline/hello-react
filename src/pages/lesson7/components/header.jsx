import React from 'react';
import Title from './Title'
import PropTypes from 'prop-types';
class Header extends React.Component {
  render() {
    return (
      <div>
        <h2>This is header</h2>
        <Title />
      </div> 
    )
  }
}

Header.propTypes = {
  themeColor: PropTypes.string
}

export default Header