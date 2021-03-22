import React from 'react';
import LikeButton from './LikeButton';

class Lesson3 extends React.Component {
  render () {
    return (
      <div>
        <h1>配置组件的 props</h1>
        <LikeButton likedText='已赞' unlikedText='赞' />
      </div>
    )
  }
}

export default Lesson3