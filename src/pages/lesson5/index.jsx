import React from 'react';
import User from './user';
class Lesson5 extends React.Component {
  constructor () {
    super()
    this.state = {
      users: [
        { username: 'Jerry', age: 11, gender: 'male' },
        { username: 'Tomy', age: 12, gender: 'male' },
        { username: 'Lily', age: 13, gender: 'female' },
        { username: 'Lucy', age: 14, gender: 'female' }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>渲染列表数据</h1>
        {this.state.users.map((user, i) => <User key={i} user={user} />)}
      </div>
    )
  }
}
export default Lesson5