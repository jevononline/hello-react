import React from 'react'
import PropTypes from 'prop-types';

class LikeButton extends React.Component {
  constructor () {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }
  render () {
    console.log('dd', this.props);
    const likedText = this.props.likedText || '取消'
    const unlikedText = this.props.unlikedText || '点赞'
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? likedText : unlikedText} 👍
      </button>
    )
  }
}
LikeButton.propTypes = {
  likedText: PropTypes.string,
  unlikedText: PropTypes.string
}

// LikeButton.propTypes = {
//   likedText: PropTypes.number.isRequired,
//   unlikedText: PropTypes.number
// }

// LikeButton.propTypes = {
//   // 你可以将属性声明为 JS 原生类型，默认情况下
//   // 这些属性都是可选的。
//   optionalArray: PropTypes.array,
//   optionalBool: PropTypes.bool,
//   optionalFunc: PropTypes.func,
//   optionalNumber: PropTypes.number,
//   optionalObject: PropTypes.object,
//   optionalString: PropTypes.string,
//   optionalSymbol: PropTypes.symbol,
// }
export default LikeButton