import React from 'react'

import UserList from './UserList'

class UserInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {userName: ''};

    this.addUser = this.addUser.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({userName: event.target.value});
  }
  addUser(){
    this.props.addUser(this.state.userName)
    this.setState({userName: ''});
  }
  render(){
    return (
      <div>
        <input type="text" value={this.state.userName} onChange={this.handleChange} />
        <button onClick={this.addUser} type="button">Add User</button>
        <UserList users={this.props.users}/>
      </div>
    )
  }
}

export default UserInput
